import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchInput.css';

function SearchInput() {
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
      />
    </form>
  );
}

export default SearchInput;
