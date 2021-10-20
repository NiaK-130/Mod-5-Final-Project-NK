
import React, {useState, useEffect} from 'react'



function Ideasdisplay({url, key}) {



    return (
        <div>
            <img className = "unsplash-img" src = {url} key={key} alt=""/>
       
        </div>
    )
}



export default Ideasdisplay

