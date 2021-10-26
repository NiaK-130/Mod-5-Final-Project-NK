
import React, {useState, useEffect} from 'react';
import styles from './Ideasdisplay.module.css';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import { AddFavourites } from './AddFavourites';



const IdeasStyle = createGlobalStyle`
    * {
            transition: transform 0.2s;
            // background: linear-gradient(rgba(0,0,0,0.6), (rgba(0,0,0,0.3)), url(${(props) => props.url}) )   
        
    }

    p:hover {
    cursor:pointer;
    transform: scale(1.5);
    } 

    p:hover.AddtoFav {
        opacity:1;
        } 

`;



function Ideasdisplay({url, key, favComponent}) {
    // const FavComponent = favComponent;



    return (
        <div>
            
                <IdeasStyle/>
                <div>
            <img src = {url} key={key} alt="" />
            <div>  {favComponent}</div> 
            </div>
            
            </div>
    )
}





export default Ideasdisplay


// const Ideasdisplay = (props) => {
//     const FavComponent = props.favComponent;

//     return (
//         <p>
            
//                 <IdeasStyle/>
//                 <div>
//                     <img src = {props.url} key={props.key} alt="" />
//                     <div>  <FavComponent/> </div> 
//                  </div>
            
//             </p>
//     )
// }


// function Ideasdisplay(props) {
//     const FavComponent = props.favComponent;

//     return (
//         <p>
            
//                 <IdeasStyle/>
//                 <div>
//             <img src = {props.url} key={props.key} alt="" />
//             <div>  {props.favComponent} </div> 
//             </div>
            
//             </p>
//     )
// }







// export default Ideasdisplay


//className={styles['unsplash-img']}


// const ParallaxImgStyled = styled.div`
//     background: linear-gradient(rgba(0,0,0,0.6), (rgba(0,0,0,0.3)), url(${(props) => props.url})) 
//     background-size: 10%;

//     /* Set a specific height */
//     min-height: 100px;

//     /* Create the parallax scrolling effect */
//     background-attachment: fixed;
//     background-position: center;
//     background-repeat: no-repeat;
    
//     position: relative;
//     z-index: 0;

//     &:before {
//         background: rgba(0, 0, 0, 0.2);
//         content: "Add to Favorites";
//         height: 50%;
//         left: 0;
//         position: absolute;
//         top: -55%;
//         width: 100%;
//         z-index: -1;
//     }

// `;

// const AddtoFav = styled.div`
// background-image: url(${(props) => props.url});

// display: flex;
// align-items: center;
// justify-content: center;
// position: absolute;
// background: (0,0,0,0.8);
// width:100%;
// transition: 0.5s ease;
// bottom:0;
// font-size: 20px;
// color: black;
// padding: 20px;
// text-align: center;
// z-index: -1;
// background-attachment: fixed;
// background-position: center;
// background-repeat: no-repeat;

// &:before {
//             background: rgba(0, 0, 0, 0.2);
//             content: "Add to Favorites";
//             height: 40%;
//             left: 0;
//             position: absolute;
//             top: -5%;
//             width: 100%;
//             z-index: -1;
//         }
    
// `;