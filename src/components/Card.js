import React, { useState, useEffect} from "react";
import axios from "axios";
import Photos from "./photos.js";
import DateCard from "./DateCard.js";


function Cards() {
const [image,setImg] = useState('');
const [exp,setExp] = useState('');
const [date, setDate] = useState('');

useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=k6BJnakZKmfWOZtQ4sEgdxm95OhaylTctbC8bkvy"=${date}`)

.then(res => {
    console.log(res.data);
    
})

.catch(error => {
    console.log(error);
});
})

return (
<div className = "Card">
    <p>
        Nasa photos of the day: {date}
    </p>
    <DateCard setDate={setDate}/>
    <Photos imgUrl = {image} />
<p> {exp} </p>
</div>

)

}

export default Cards;