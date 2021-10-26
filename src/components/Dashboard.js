import React, {useEffect, useState} from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import NewImageForm from './NewImageForm';
import styles from './Dashboard.module.css';
import ImageDisplay from './ImageDisplay';



export default function Dashboard({images, addImage, user}) {


    const [form, openCloseForm] = useState(false)


    function handleClick(e){
        e.preventDefault()
        openCloseForm(!form)
    }




    return (
        <div className = "dashboard-div">
            
            <h1>Welcome {user.avatar} </h1>
           
            <div>
                <button className = "button is-light" onClick={handleClick}>Add Image</button>
            </div>
            {form ? <NewImageForm images={images} addImage={addImage}/> : ' '}
            {images.map((image) => <ImageDisplay  image={image} key={image.id}/>)}
            
        </div>
    )
}

