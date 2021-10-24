
import React, {useState, useEffect} from 'react'
import styles from './Ideasdisplay.module.css';




function Ideasdisplay({url, key, }) {



    return (
        <div>
            <img src = {url} key={key} alt=""/>
        </div>
    )
}



export default Ideasdisplay


//className={styles['unsplash-img']}

