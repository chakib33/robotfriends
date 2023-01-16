import React from "react";
import './SearchBox.css' 

const SearchBox = ({searchChange}) => {
    return (
        <div className="mainSearchBox">
        <input 
        className="searchbox"
        type='search' 
        placeholder='Search robots'
        onChange={searchChange}
        />
    </div>
);
}

export default SearchBox;