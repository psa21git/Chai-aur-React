import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loc: '',
    city:[]
}

const weatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers:{
        setWeather: (state, action)=>{
            state.loc = action.payload
        },
        setCity: (state,action)=>{
            state.city = action.payload
        }
    }
})

export const {setWeather,setCity} = weatherSlice.actions

export default weatherSlice.reducer