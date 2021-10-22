import React from 'react';
import { BusinessRating } from '../../../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css'

export function SearchResult(){
    return (
        <div className={styles[`search-result`]}>
            <img src ='https://via.placeholder.com/210' alt='business' className = {styles['business-image']}/>
            <div className={styles['business-info']}>
                <h2 className="subtitle">Wise Build Builders</h2>
                <BusinessRating/>
                <p> Verified <span className="tag">Contruction</span> <span className="tag">Builders</span> </p>
                </div>
                <div className ={styles[`contact-info`]} >
                <p>4328998034</p>
                <p>Example Street</p>
                <p>San Jose 951243</p>
            </div> 
        </div>

    );
}