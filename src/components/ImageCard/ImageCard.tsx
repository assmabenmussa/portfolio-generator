import React from 'react'
import "./ImageCard.css"
const ImageCard = ({ image, returnImage }: any) => {
    return (
        <img className="image-card" src={image} onClick={() => {
            returnImage(image);
        }} />
    )
}

export default ImageCard
