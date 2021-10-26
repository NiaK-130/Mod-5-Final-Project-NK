import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar'
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import styles from './Professionalsdisplay.module.css';
import useReactRouter from 'use-react-router';




export function Professionalsdisplay(){
    const {history} = useReactRouter();

    function search(term, location){
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);      
    }

    return (
        <div>
            <img className="pdm-image" src={process.env.PUBLIC_URL + '/pdm1.png'} alt="modular-logo" />
           
        <div className={styles[`search-area`]}> 

        <div className={styles.getideastext}>
            <h2>Connect with Professionals, Build your dream!</h2>
            </div>

        <SearchBar search={search} />
        <SearchSuggestions/>
        <img/>

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


