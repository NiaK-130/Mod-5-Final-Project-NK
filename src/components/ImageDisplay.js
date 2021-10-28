import React from "react";
import styles from './ImageDisplay.module.css';



export default function ImageDisplay({imagesmain, deleteImage, key}) {

    console.log("i am here",imagesmain)

    function handleClick() {
        deleteImage(imagesmain.id)
    }

    console.log("hkhjkhkjhkhkhk", imagesmain)

    return (
        <div className = {styles.outerimagedisplaycontainer}>
        {/* <div className = {styles.imagedisplaycontainer} > */}
            <img className = {styles.imagebase} src={imagesmain.image} alt={imagesmain.image}/> 
            <div className = "container-info">
                
                {imagesmain.title ? <h2> Title: {imagesmain.title}</h2>: ""}
                {imagesmain.image_desc ? <h4 className = "image-display-text" >Description: {imagesmain.image_desc} </h4> : ""} 
                {imagesmain.by ? <h4 className = "image-display-text">Author: {imagesmain.by} </h4> : ""} 
                {imagesmain.tags ? <h4 className = "image-display-text">tags: {imagesmain.tags} </h4> : ""}  
                {imagesmain.tagstwo ? <h4 className = "image-display-text">tags: {imagesmain.tagstwo} </h4> : ""} 
                {/* {imagesmain.tagsthree ? <h4 className = "image-display-text">tags: {imagesmain.tagsthree} </h4> : ""}   */}
            
            </div>
            <div className = {styles.remove}> 
            <button  className = "button is-white" onClick={handleClick} > <span className={`icon is-small ${styles['search-icon']}`}><i class="fas fa-trash-alt"></i> </span></button>
            {/* <button className = "remove-image-Button" onClick={handleClick}>Remove image</button> */}
            </div> 
        {/* </div> */}
        </div>
       
    )
}
// <button className = "button is-light" onClick={handleClick} > <i class="fas fa-times-circle"></i></button>

//<i class="fas fa-trash-alt"></i>
//<i class="fas fa-times-circle"></i>
//<i class="fas fa-times"></i>



// addImage(title, image, imageDesc, by, tags, tagstwo, tagsthree)