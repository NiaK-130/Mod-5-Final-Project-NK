import React from "react";



export default function ImageDisplay({images}) {

    console.log(images)

    // function handleClick() {
    //     deleteStudent(student.id)
    // }

    return (
        <div className = "image-display-container" >
            <img className = "image-base" src={images.image} alt={images.image}/>
            <div className = "container-info">
            <h2>{images.title}</h2>
            <h4 className = "image-display-text" >Description: {images.image_desc} </h4> 
            <h4 className = "image-display-text">Author: {images.by} </h4> 
            <h4 className = "image-display-text">tags: {images.tags} </h4>  
            <h4 className = "image-display-text">tags: {images.tagstwo} </h4>  
            <h4 className = "image-display-text">tags: {images.tagsthree} </h4>  
            
            </div>
            <div > 
            {/* <button className = "remove-image-Button" onClick={handleClick}>Remove image</button> */}
            </div> 
        </div>
    )
}


// addImage(title, image, imageDesc, by, tags, tagstwo, tagsthree)