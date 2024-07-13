import {useState,useEffect} from 'react'

function useCitySuggestions(loc){
    const [data, setData] = useState([]);
    // if(loc!=''){
        useEffect(()=>{
            fetch(`http://api.weatherapi.com/v1/search.json?key=0031e05af98746ca8d651400241106&q=${loc}`)
                .then((res)=>res.json())
                // converting the api response into json data
                .then((res)=>setData(res))
                // setting the data using useState
                .catch(error => {
                    setData([]);  // Handle any errors that occurred during the fetch
                })
                // console.log(data)
        
            const updateValue = (newValue)=>{
                setData(newValue)
            }
        },[loc])
        // if (data!={}) console.log(data);
        // return [data,updateValue]
        return data
        //data is object we can check from api link
    // }
    
}
    

export default useCitySuggestions;