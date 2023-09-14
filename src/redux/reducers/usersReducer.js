import { createReducer } from "@reduxjs/toolkit";
import { authenticate, getCountries, signIn, signUp } from "../actions/usersActions";

const initialState = {
    countries: [],
    token: null,
    user: {},
    status: 'offline'
}

const usersReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getCountries.fulfilled, (state, action) => {
            const newState = { ...state, countries: action.payload }
            return newState
        })
        .addCase(getCountries.rejected, (state, action) => {
            const newState = { ...state, countries: action.payload }
            return newState
        })
        .addCase(signIn.fulfilled, (state, action) => {
            const newState = { ...state, ...action.payload }
            return newState
        })
        .addCase(signUp.fulfilled, (state, action) => {
            const newState = { ...state, ...action.payload }
            return newState
        })
        .addCase(authenticate.fulfilled, (state, action) => {
            const newState = { ...state, ...action.payload }
            return newState
        })
)

export default usersReducer