import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchInput.css';
import {
  getUpcomingMovies,
  clearState,
  setSearchTerm,
} from '../../util/redux/reducer/movieReducer';
import { useDispatch } from 'react-redux';

function SearchInput() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [timer, setTimer] = useState(null);

  const handleSeahcInputChange = (text) => {
    setSearchText(text);
    clearTimeout(timer);
    if (text === '') {
      dispatch(clearState());
      dispatch(setSearchTerm(''));
      return;
    }

    // debounce technique
    const newTimer = setTimeout(() => {
      dispatch(setSearchTerm(text));
      dispatch(clearState());
    }, 700);
    setTimer(newTimer);
  };

  return (
    <form className='nosubmit'>
      <span className='search-icon'>
        <SearchIcon />
      </span>
      <input
        className='nosubmit'
        data-testid='search-bar'
        aria-label='Search'
        type='search'
        placeholder='Search'
        autoComplete='off'
        value={searchText}
        onChange={(e) => {
          e.preventDefault();
          handleSeahcInputChange(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchInput;

// import SearchIcon from "../assets/search.png";
// import { useEffect, useRef } from "react";
// import { resetMovies, setSearch } from "../store/movies/slice";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMovies, searchMovies } from "../store/movies/thunk";

// function SearchInput() {
//     const moviesData = useSelector(state => state.movies);
//     const dispatch = useDispatch();
//     const prevSearchRef = useRef("");

//     useEffect(() => {
//         // debounce
//         const lastState = prevSearchRef.current;
//         const timer = setTimeout(() => {
//             if (moviesData.search) {
//                 dispatch(resetMovies())
//                 dispatch(searchMovies({search: moviesData?.search}))
//             } else if (!moviesData.search && lastState) {
//                 dispatch(resetMovies())
//                 dispatch(fetchMovies())
//             }
//         }, 800)
//         prevSearchRef.current = moviesData.search;
//         return () => clearTimeout(timer)
//     }, [moviesData.search]);

//     return(
//         <>
//             <div className="search-input-group">
//                 <img src={SearchIcon} />
//                 <input value={moviesData?.search} onChange={(e) => dispatch(setSearch(e.target.value))} />
//             </div>
//         </>
//     )
// }

// export default SearchInput;
