
import React, {useState, useEffect} from 'react'
import styles from './Ideasdisplay.module.css';




function Ideasdisplay({url, key}) {



    return (
        <div className={styles['unsplash-img']}>
            <img src = {url} key={key} alt=""/>
       
        </div>
    )
}



export default Ideasdisplay

