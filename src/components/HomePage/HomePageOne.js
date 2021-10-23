import React from 'react';
import styles from './HomePageOne.module.css';




export function HomePageOne(props){
    return (
        <div >
            <div className={styles.homepageimage}>
            <img className="homepageone-img" src={props.homepagemoduleone} alt="home-page-one" />
            </div>
            <div className={styles.homepageone}>
            <h1>Find Inspiration, make it your own</h1>
            </div>
            

        </div>
    )


}