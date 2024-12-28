import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/abhinavbahadursingh')
    //     .then(response => response.json())
    //     .then(data =>{
    //         // console.log();
    //         setData(data)
    //     })
    // } , [])
    return(
        <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">Github followers:{data.followers}
            <img src={data.avatar_url} alt="Git " width={300} className="rounded-3xl"/>
        </div>
    )
}

export default Github


export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/abhinavbahadursingh')
    return response.json()
}