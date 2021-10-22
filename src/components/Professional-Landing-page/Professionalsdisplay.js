import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar'
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import styles from './Professionalsdisplay.module.css';
import  {Route, Router, Link} from 'react-router-dom';

export function Professionalsdisplay(){
    // const history = Router();
    const encodeURI = encodeURIComponent("&")

    function search(term, location){
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        const url = `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`;      
    }

    return (
        <div>
        <div className={styles[`search-area`]}> 
        <SearchBar search={search} />
        <SearchSuggestions/>

        <div>
        <Link to="/search">
             <button> Search </button>
        </Link>

        </div>

        </div>
        
        <Route exact path="\search">
            <Professionalsdisplay search={search}/>


        </Route>
    
    
        </div>

    );

}



// <Router>

// <div>

//     <Link to="/login">
//         <button className="sign-in-button" > Sign In </button>
//     </Link>


//     <Link to="/signup">
//         <button className="sign-up-button"> Sign Up </button>
//     </Link>

// </div>

// <Route exact path="/login">
//     <Login login={login} />
// </Route>


// <Route exact path="/signup">
//     <Signup signup={signup} />
// </Route>

// </Router> 