import React, { useState } from 'react'

const Search = ({onSearch}) => {
  const  [query,setQuery] =useState('');
   const handlesearch =(e) =>{
    e.preventDefault();// prevents page refresh
     onSearch(query);//passes the search query
   };
  return (
    <div>
  <form onSubmit={handlesearch}>
    <input type="text" 
    value={query}
     onChange={(e) => setQuery(e.target.value)}//update
     placeholder="Search..."
     id ="search-input" /> 
     <button type="submit">Search</button>
  </form>
    </div>
  )
}

export default Search;
