import React, { useState, useEffect  } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import { Container, Row } from "reactstrap";
import styled from "styled-components";

const Font = styled.div`
color: black;
font-weight: bold;



`;

export default function Photo(){
    const [data, setData] = useState([]);

    useEffect(() => {

    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=sfXEAGd3HMe8dVnwqgGerLIVftf2hKHeVx3blTYv")
    .then(response => {
       
        setData(response.data);
        console.log("Response", response.data);
       
    })
    .catch(error => console.log(error))
}, []);

return(
<Container>
    <Font>
     <PhotoCard data = {data}
                imgUrl = {data.url}
     
     />
     </Font>
     </Container> 
);
}