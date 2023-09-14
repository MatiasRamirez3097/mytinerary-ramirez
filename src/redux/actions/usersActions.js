import { createAction, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { countryApi, server } from "../../Api";
import { ls } from '../../utils/ls.js'

const getCountries = createAsyncThunk('getCountries', async () => {
    try {
        const res = await countryApi()
        return res
    } catch (err) {
        return []
    }
})

const logOut = createAction('logout', () => {
    ls.clear()
    return {
        payload: {
            user: {},
            token: null,
            status: 'offline'
        }
    }
})

const signIn = createAsyncThunk('signIn', async (data) => {
    console.log(data.email)
    const res = await server.post('/auth/signin', {
        email: data.email,
        password: !data.password && data.google ? data.email + import.meta.env.VITE_GOOGLE_KEY : data.password,
    })
    ls.set("token", res.data.token)
    return {
        user: res.data.user ? res.data.user : {},
        token: res.data.token ? res.data.token : null,
        status: 'online'
    }

})

const signUp = createAsyncThunk('signUp', async (data) => {
    try {
        const { google = false, ...user } = data
        const res = await server.post('/auth', {
            ...user,
            password: !user.password && google ? user.email + import.meta.env.VITE_GOOGLE_KEY : user.password,
        })
        console.log(res)
        ls.set("token", res.data.response.token)
        return {
            user: res.data.response.user,
            token: res.data.response.token,
            status: "online"
        }
    } catch (error) {
        return isRejectedWithValue({
            user: {},
            token: null,
            status: 'offline'
        })
    }
})

const authenticate = createAsyncThunk('authenticate', async () => {
    const token = ls.getText('token')
    const { data } = await server.get('/auth/token', {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    return {
        user: data.user,
        status: 'online',
    }

})

export { authenticate, getCountries, logOut, signIn, signUp }