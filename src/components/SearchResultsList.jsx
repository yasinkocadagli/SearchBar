import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultsList.css"
export const SearchResultsList = ({results}) => {
  return (
    <div className="results-list">
        {
          results.map((results,id)=>{
            return <SearchResult result={results} key={id}/>
          })
        }
    </div>
  );
};

export default SearchResultsList;
