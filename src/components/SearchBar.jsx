import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setKeyword(value);
        onSearch(value);
    }

    return(
        <div className="note-search">
            <input type="text" value={keyword} placeholder="Cari Catatan ..." onChange={handleChange}/>
        </div>
    )
};

export default SearchBar;
