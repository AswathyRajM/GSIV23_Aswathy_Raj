import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchInput from '../SearchInput';

function NavBar() {
  const location = useLocation();
  const path = location.pathname;
  const isHome = path === '/';
  const isDetails = path.slice(0, path.lastIndexOf('/')) === '/movie/details';
  return (
    <div className='navbar'>
      <div className='search'>
        {isHome ? (
          <SearchInput />
        ) : isDetails ? (
          <>
            <p className='details-nav-heading'>Movie Details</p>
          </>
        ) : (
          <></>
        )}
      </div>

      <ul className='nav-links'>
        <li>
          <Link className='nav-link' to='/'>
            <HomeIcon className='home-icon' />
          </Link>
        </li>

        <li></li>
      </ul>
    </div>
  );
}

export default NavBar;
