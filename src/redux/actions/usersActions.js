import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { countryApi } from "../../Api";

const getCountries = createAsyncThunk('getCountries', async () => {
    try {
        const res = await countryApi()
        console.log(res)
        return res
    } catch (err) {
        console.log(err)
        return []
    }
})

export { getCountries }