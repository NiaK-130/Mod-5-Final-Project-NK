import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar'
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import styles from './Professionalsdisplay.module.css';
import useReactRouter from 'use-react-router';
// import  {Route, Router, Link} from 'react-router-dom';


export function Professionalsdisplay(){
    const {history} = useReactRouter();

    function search(term, location){
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);      
    }

    return (
        <div>
        <div className={styles[`search-area`]}> 
        <SearchBar search={search} />
        <SearchSuggestions/>

        </div>

        {/* <div>
        <Link to="/search">
             <button> Search </button>
        </Link>

        </div>

        </div>
        
        <Route exact path="\search">
            <Professionalsdisplay search={search}/>


        </Route> */}
    
    
        </div>

    );

}


