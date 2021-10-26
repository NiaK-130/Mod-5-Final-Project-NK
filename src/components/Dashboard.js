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
          
        

            <div className = {styles.dash}>
                <img className="dash" src={process.env.PUBLIC_URL + '/dashblock.png'} alt="dash-block" />
            </div>

            <div className = {styles.dashone}>
                <img className="dash" src={process.env.PUBLIC_URL + '/dashblock.png'} alt="dash-block" />
            </div >

            <div className = {styles.hrline}>
                <img className="hrlin" src={process.env.PUBLIC_URL + '/hrline.png'} alt="hrline-block" />
            </div >

            <div className = {styles.hrlineone}>
                <img className="hrlin" src={process.env.PUBLIC_URL + '/hrline.png'} alt="hrline-block" />
            </div >

     

            <div className = {styles.welcome}>
            <h1>Welcome {user.avatar} </h1>
            </div>
           
            <div className = {styles.addimagebutton}>
                <button className = "button is-light" onClick={handleClick}>Add Image</button>
            </div>
            {form ? <NewImageForm images={images} addImage={addImage}/> : ' '}
            {images.map((image) => <ImageDisplay  image={image} key={image.id}/>)}
            
        </div>
    )
}

