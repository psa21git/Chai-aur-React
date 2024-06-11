import React, { useState } from 'react'
import useWeather from '../hooks/useWeather'
import { setWeather } from '../features/weatherSlice'
import {useSelector,useDispatch} from 'react-redux'

function Weather() {

    const [loc,setLoc] = useState('')

    const dispatch = useDispatch()

    const setWeatherHandler = (e) => {
        e.preventDefault()
        dispatch(setWeather(loc))
        setLoc('')
    }

    const location = useSelector(state => state.loc)
    const api = useWeather(location) ?? {}
    const temp_celcius = api['temp_c'] ?? '__'
    
    return (
        <>
            <form onSubmit={setWeatherHandler}>
                <div>Weather</div>
                    <input
                        value={loc}
                        onChange={(e)=>setLoc(e.target.value)}
                        placeholder='search city'
                    />
                    <button type='submit'         
                    >Get Weather</button>
            </form>
            <div>
                Temperature in celcius : {temp_celcius} *C
            </div>
            
        </>
        
    )
}

export default Weather