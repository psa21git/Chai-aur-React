import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()

    // const [data,setData] = useState(0)
    // useEffect(() => {
    //   fetch('https://api.github.com/users/psa21git')
    //   .then(response => response.json())
    //   .then((response)=>{
    //     console.log(response)
    //     setData(response)
    //   })
    // }, [])
    
  return (
    <div className='text-center text-white bg-gray-600 text-2xl p-4'>
        Followers : {data.followers}
        <div className='flex items-center justify-center p-4'>
            <img className='' src={data.avatar_url} alt="Github Pic" width={300}/>
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/psa21git')
    return response.json()
}