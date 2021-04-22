import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"50rem",background:"#F2F1F9", border:"none", padding:"1rem", margintop:"10px"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search movie"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar