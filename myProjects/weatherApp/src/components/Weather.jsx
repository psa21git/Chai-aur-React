import React, { useEffect, useState } from 'react'
import useWeather from '../hooks/useWeather'
import { setWeather } from '../features/weatherSlice'
import {useSelector,useDispatch} from 'react-redux'

function Weather() {
    const [isVisible,setIsVisible] = useState(false)
    // const [api,setApi] = useState({})
    const [loc,setLoc] = useState('')

    const dispatch = useDispatch()

    const location = useSelector(state => state.loc)
    const api = useWeather(location) ?? {}
    // setApi(useWeather(location) ?? {})
    // useEffect(()=>{
    //     setApi(useWeather(location) ?? {})
    // },[location])
    
    const toggleVisibility = ()=>{
        if(api!={}) {
            setIsVisible(true)
        }
        else{
            setIsVisible(false)
        }
    }
    
    // console.log(api, isVisible, location)

    const setWeatherHandler = (e) => {
        e.preventDefault()
        dispatch(setWeather(loc))
        // toggleVisibility(api)
        setLoc('')    
    }

    const temp_celcius = api['current']?.['temp_c'] ?? ' '
    const condition = api['current']?.['condition'] ?? ""
    const weatherText = condition['text'] ?? ' '
    const weatherIcon = condition['icon'] ?? ''
    
    return (
        < div className='bg-gray-950 h-screen' >
            <form onSubmit = {setWeatherHandler}
            >
                <div className='w-full text-white p-4 text-2xl text-center bg-gray-700 '>
                    RealTime Weather
                </div>
                <div className='relative w-full flex my-5 items-center justify-center bg-gray-950'>
                    <input
                        value={loc}
                        onChange={(e)=>setLoc(e.target.value)}
                        placeholder='search city'
                        className="block p-2.5 w-1/2 mx-5 h-10  text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    />
                    <button type='submit'
                    className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-2 mb-2absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'      
                    >
                        <img src="https://cdn-icons-png.flaticon.com/128/10412/10412430.png" className='w-4 h-4' alt="" />
                    </button>
                </div>
                
            </form>
            <div>
                {api['location'] && 
                <div className=' w-full text-white justify-center items-center p-4 text-xl text-center bg-gray-700 '>   
                    <div className='flex justify-center'>
                        <div className='font-bold'>City :</div>
                        <div className='ml-2'>
                            {api['location']?.['name'] ?? ""}
                        </div>
                    </div> 
                    <div className='flex justify-center'>
                        <div className='font-bold'>Region :</div> 
                        <div className='ml-2'>
                            {api['location']?.['region'] ?? ""}
                        </div>
                    </div> 
                    <div className='flex justify-center'>
                        <div className='font-bold'>Country :</div> 
                        <div className='ml-2'>
                            {api['location']?.['country'] ?? ""}
                        </div>
                    </div> 
                    <div className='flex justify-center'>
                        <div className='font-bold'>Temperature in celcius :</div>
                        <div className='ml-2'>
                            {temp_celcius} °C
                        </div>
                    </div> 
                    <div className=' flex justify-center'>
                        <div className='font-bold'>Weather :</div> 
                        <div className='ml-2'>
                            {weatherText}
                        </div>
                    </div> 
                    
                    <img src={weatherIcon} className='block mx-auto h-100 w-auto' />
                </div>
                }
                {!api['location'] && 
                    <div className='w-full text-white p-4 text-xl text-center bg-gray-700 '>
                        ! Pls Enter a valid City Name !
                    </div>
                }
            </div>
        </div>
        
    )
}

export default Weather