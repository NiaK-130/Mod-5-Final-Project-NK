import React from 'react';
import styles from './HomePageTwo.module.css';




export function HomePageTwo(props){
    return (
        <div >
            <div className={styles.homepageimagetwo}>
            <img className="homepagetwo-img" src={props.homepagemoduletwo} alt="home-page-two" />
            </div>
            <div className={styles.homepagetwo}>
            <h1>Connect with Professionals, build your dream</h1>
            </div>
            

        </div>
    )


}