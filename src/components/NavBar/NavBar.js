import React from 'react';
import styles from "./NavBar.module.css";
import { SearchBar } from '../SearchBar/SearchBar';


export function NavBar(){
    return (
        <div className={styles['nav-bar']}>

        <SearchBar/>

        </div>
    )




}