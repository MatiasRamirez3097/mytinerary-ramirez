import { createReducer } from "@reduxjs/toolkit";
import { getCountries } from "../actions/usersActions";

const initialState = {
    countries: []
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
)

export default usersReducer