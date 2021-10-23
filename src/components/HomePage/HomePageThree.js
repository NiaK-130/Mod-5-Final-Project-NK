import React from 'react';
import styles from './HomePageThree.module.css';




export function HomePageThree(props){
    return (
        <div >
            <div className={styles.homepageimagethree}>
            <img className="homepagethree-img" src={props.homepagemodulethree} alt="home-page-three" />
            </div>
            <div className={styles.homepagethree}>
            <h1>Turn your ideas into reality, create your own</h1>
            </div>
            <div className={styles.homepagetextthree}>
            <h2>COMING SOON</h2>
            </div>
            

        </div>
    )


}