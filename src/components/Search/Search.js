import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { SearchResults } from "./SearchResults/SearchResults";


export function Search(){
    return (
        <div>
        <NavBar/>
        <SearchResults/>
        </div>

    );
}