import React from 'react'
import styles from './AddFavourites.module.css';



export const AddFavourites = () => {
    return (
        <div>
            <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-heart"></i></span><span className={styles.favs}>Add to Favourites</span>
        </div>
    )
}


