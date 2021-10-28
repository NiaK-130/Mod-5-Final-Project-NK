import React, {useEffect, useState} from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import NewImageForm from './NewImageForm';
import styles from './Dashboard.module.css';
import ImageDisplay from './ImageDisplay';



export default function Dashboard({imagesmain, addImage, deleteImage, user}) {


    const [form, openCloseForm] = useState(false)

    function handleClick(e){
        e.preventDefault()
        openCloseForm(!form)
    }
    console.log("herer",imagesmain)

    return (

        

        <div className = "dashboard-div">
            
            <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-columns"></i></span><span className={styles.yourdashboard}>Dashboard</span>

           
    

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


            <div className = {styles.userimg}>
            <img className = {styles.userimage}src = {user.bio} alt="user-img"/>
            </div>

            <div className = {styles.welcome}>
            <h1>Welcome {user.avatar} </h1>
            </div>
           
            <div className = {styles.addimagebutton}>
                <button className = "button is-link" onClick={handleClick}>Add Image</button>
            </div>
          
            {form ? <NewImageForm imagesmain={imagesmain} addImage={addImage}/> : ' '}
            
            {/* {imagesmain.map((imagepassed) => <ImageDisplay  imagepassed={imagepassed} key={imagepassed.id}/>)} */}
           
            <div className={styles.mainmainimagebox}> 
           
            {imagesmain.map((image) => <ImageDisplay imagesmain={image} deleteImage={deleteImage}/>)}
           </div>
        </div>
    )
}

