import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json)
        // converting the api response into json data
        .then((res)=>setData(res[currency]))
        // setting the data using useState

    },[currency])
    // dependencies is currency as each time we change currency this hook should be called
    console.log(data);
    return data 
    //data is object we can check from api link
}

export default useCurrencyInfo;