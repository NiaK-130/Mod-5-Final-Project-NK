import React from 'react';
import styles from './BusinessRating.module.css';
import Rating from 'react-rating';

export function BusinessRating() {
    return (
        <div className={styles['rating']}>BusinessRating
        <Rating
            emptySymbol="far fa-star"
             fullSymbol="fa fa-star"
            fractions={2}
            readonly
            initialRating={5}
            />
            <p>150 Reviews</p>

        </div>      

    );



}

