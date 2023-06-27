"use client";
import { useState } from "react";

import { SearchManufactur } from "./";

const SearchBar = () => {
   const [manufacturer, setManufacturer] = useState('');

   const hundleSearch = () => { }
   
  return (
     <form onSubmit={hundleSearch} className="searchbar">
        <div className="searchbar__item">
           <SearchManufactur manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div>
    </form>
  )
}

export default SearchBar
