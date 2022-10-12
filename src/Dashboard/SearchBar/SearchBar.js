import React from "react";
import "./SearchBar.css";

function SearchBar({handleChange}) {
    const handleSearch = (e) => {
        handleChange(e);
    }
    return (
        <div className="search-input">
            <div>
                <input 
                    className="input-text" 
                    placeholder="Search Emoji"
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
}
export default SearchBar;
