import React from "react";



export default function ImageDisplay({imagesmain, deleteImage, key}) {

    console.log("i am here",imagesmain)

    function handleClick() {
        deleteImage(imagesmain.id)
    }

    return (
        <div className = "image-display-container" >
            <img className = "image-base" src={imagesmain.image} alt={imagesmain.image}/>
            <div className = "container-info">
            <h2> Title: {imagesmain.title}</h2>
            <h4 className = "image-display-text" >Description: {imagesmain.image_desc} </h4> 
            <h4 className = "image-display-text">Author: {imagesmain.by} </h4> 
            <h4 className = "image-display-text">tags: {imagesmain.tags} </h4>  
            <h4 className = "image-display-text">tags: {imagesmain.tagstwo} </h4>  
            <h4 className = "image-display-text">tags: {imagesmain.tagsthree} </h4>  
            
            </div>
            <div > 
            <button className = "remove-image-Button" onClick={handleClick}>Remove image</button>
            </div> 
        </div>
    )
}


// addImage(title, image, imageDesc, by, tags, tagstwo, tagsthree)