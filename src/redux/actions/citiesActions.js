import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../Api";

const getCarousel = createAsyncThunk('getCarousel', async () => {
    try {
        const res = await server.get(`/cities`)
        return res.data.response
    } catch (err) {
        console.log(err)
        return []
    }
})

const getCities = createAsyncThunk('getCities', async (value = '') => {
    try {
        const res = await server.get(`/cities/${value}`)
        return res.data.response
    } catch (err) {
        console.log(err)
        return []
    }
})

const getCity = createAsyncThunk('getCity', async (id) => {
    try {
        const res = await server.get(`/cities/getcity/${id}`)
        return res.data.response
    } catch (err) {
        console.log(err)
        return {
            itineraries: []
        }
    }
})

const searchAction = createAction('searchAction', (val) => {
    return {
        payload: val
    }
})

export { getCarousel, getCities, getCity, searchAction }