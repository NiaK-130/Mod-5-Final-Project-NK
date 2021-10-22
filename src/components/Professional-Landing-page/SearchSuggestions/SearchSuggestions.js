import React from 'react';
import styles from './SearchSuggestions.module.css';

export function SearchSuggestions(){
    return (
        <div className={styles.suggestions}>
            <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-pencil-alt"></i></span><span className={styles.suggestion}>Design</span>
            <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-home"></i></span><span className={styles.suggestion}>Renovation</span>
            <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-edit"></i></span><span className={styles.suggestion}>Remodeling</span>
            <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-bell"></i></span><span className={styles.suggestion}>Services</span>
        </div>


    );



}