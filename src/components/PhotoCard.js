import React from "react";

const PhotoCard = props => {
console.log(props);
    return (
    <div>
        <h1>{props.photo.data}</h1>
    </div>
    )
}

export default PhotoCard;