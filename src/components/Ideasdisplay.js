
import React, {useState, useEffect} from 'react'
import styles from './Ideasdisplay.module.css';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';


const IdeasStyle = createGlobalStyle`
* {
        transition: transform 0.2s;   
      
}

p:hover {
  cursor:pointer;
  transform: scale(1.5);
} 


`;



function Ideasdisplay({url, key, }) {



    return (
        <p className="image-container">
            
                <IdeasStyle/>
            <img src = {url} key={key} alt=""/>
        </p>
    )
}



export default Ideasdisplay


//className={styles['unsplash-img']}

