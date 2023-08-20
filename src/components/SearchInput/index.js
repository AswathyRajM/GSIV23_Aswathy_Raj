import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchInput.css';
import {
  clearState,
  setSearchTerm,
} from '../../util/redux/reducer/movieReducer';
import { useDispatch, useSelector } from 'react-redux';

function SearchInput() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.movies);

  const [searchText, setSearchText] = useState(searchTerm);
  const [timer, setTimer] = useState(null);

  const handleSeahcInputChange = (text) => {
    setSearchText(text);
    clearTimeout(timer);
    if (!text) {
      dispatch(clearState());
      dispatch(setSearchTerm(''));
      return;
    }

    // debounce technique
    const newTimer = setTimeout(() => {
      dispatch(clearState());
      dispatch(setSearchTerm(text));
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
        data-testid='search-input'
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
