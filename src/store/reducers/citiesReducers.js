import { createReducer } from "@reduxjs/toolkit";
import { getCarousel, getCities, getCity, searchAction } from "../actions/citiesActions";

const initialState = {
    carousel: [],
    cities: [],
    city: {
        itineraries: []
    },
    search: ''
}

const citiesReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getCities.fulfilled, (state, action) => {
            const newState = { ...state, cities: action.payload }
            return newState
        })
        .addCase(getCities.rejected, (state, action) => {
            const newState = { ...state, cities: action.payload }
            return newState
        })
        .addCase(getCity.fulfilled, (state, action) => {
            const newState = { ...state, city: action.payload }
            return newState
        })
        .addCase(getCity.rejected, (state, action) => {
            const newState = { ...state, city: action.payload }
            return newState
        })
        .addCase(searchAction, (state, action) => {
            const newState = { ...state, search: action.payload }
            return newState
        })
        .addCase(getCarousel.fulfilled, (state, action) => {
            const newState = { ...state, carousel: action.payload }
            return newState
        })
)

export default citiesReducer