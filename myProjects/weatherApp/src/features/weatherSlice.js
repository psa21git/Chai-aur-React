import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loc: '',
}

const weatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers:{
        setWeather: (state, action)=>{
            state.loc = action.payload
        }
    }
})

export const {setWeather} = weatherSlice.actions

export default weatherSlice.reducer