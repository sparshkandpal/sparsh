import React from 'react';
import { useState } from 'react';

const SearchBar = () => {
  const [ keyword, setKeyword] = useState("");
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"1rem", margintop:"10px"};



  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search Movie"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar