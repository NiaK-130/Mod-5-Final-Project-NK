import React from 'react';
import styles from "./NavBar.module.css";
import { SearchBar } from '../SearchBar/SearchBar';


export function NavBar(props){
    return (
        <div className={styles['nav-bar']}>

        <SearchBar term={props.term} location={props.location} search={props.search}/>

        </div>
    )




}