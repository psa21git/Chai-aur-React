import {useState,useEffect} from 'react'

function useWeather(loc){
    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(`http://api.weatherapi.com/v1/current.json?key=0031e05af98746ca8d651400241106&q=${loc}`)
        .then((res)=>res.json())
        // converting the api response into json data
        .then((res)=>setData(res))
        // setting the data using useState
        .catch(error => {
            setData({});
            console.log(error)  // Handle any errors that occurred during the fetch
          })
        // console.log(data)
    },[loc])
    // if (data!={}) console.log(data);
    return data
    //data is object we can check from api link
}

export default useWeather;