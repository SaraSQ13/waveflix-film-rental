import React from "react";
// import { useEffect, useState } from "react";
// import { Navigate, NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setQuery } from "../../features/searh/searchSlice";
// import  search  from "../../features/searh/searchSlice";

import "./SearchBar.scss";

export default function SearchBar() {
//   const [query, setQueryState] = useState("");
//   const dispatch = useDispatch();
//   const { status, results } = useSelector((state) => state.search);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setQuery(query));
//     dispatch(search(query));
//   };

  return (
    <div>
      <form  className=" d-flex mt-3" role="search"> 
      {/* onSubmit={handleSubmit} */}
        <input
          className="form-control me-2"
          type="text"
        //   value={query}
        //   onChange={(e) => setQueryState.apply(e.target.value)}
          placeholder="Título de la película"
          aria-label="Search"
        />
        <button className="button" type="submit">
          Search
        </button>
        {/* {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>There was an error</p>}
        {status === "succeeded" && (
          <ul>
            {results.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        )} */}
      </form>
    </div>
  );
}
