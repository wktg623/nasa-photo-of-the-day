import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"



export default function Photo(){
    const [photos, setPhoto] = useState();

    useEffect(() => {

    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=sfXEAGd3HMe8dVnwqgGerLIVftf2hKHeVx3blTYv")
    .then(response => {
        setPhoto(response.data.url);
        console.log(response);
    })
    .catch(error => console.log(error));    
}, []);

return(
    <div>
        {photos.map(photo => {
          return  <PhotoCard photo = {photo} /> ;
        })}
    </div>
)
   
   


}