import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from "./photos";
import DateCard from "./DateCard";





function Card(){

    const [img, setImg] = useState("");
    const [exp, setExp] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    

    useEffect(() => {
        //request info from server and add useEffect to prevent rerendering
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=y54CZckTolqCojW2qsO0J497f2bsh3yFgzEjyKkf&date=${date}`)
            .then(res => {
                console.log(res.data);
                const imgUrl = (res.data.hdurl);
                console.log(imgUrl);
                setImg(imgUrl);
                const imgDescrip = (res.data.exp);
                console.log(imgDescrip);
                setExp(imgDescrip);
                const title = (res.data.title);
                setTitle(title);
            })
            .catch(error => {
                console.log(error);
        })
    }, [date]);
   
    return (
        <div>
            <DateCard setDate={setDate}/>
            <Photo imgUrl={img}/>
            <div>
                <h2> {title} </h2>
                <h2> {exp} </h2>
            </div>
            <p>
                <p> Data provided by the National Aeronautics and Space Administration.</p>
            </p>
        </div>
        
    )
}

export default Card;