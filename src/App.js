import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import './App.css';
import NavBar from './components/NavBar';
import MoveiList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieNotFound from './components/MovieNotFound';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<MoveiList />} />
            <Route path='/movie/details/:movieId' element={<MovieDetails />} />
            <Route path='/movie-not-found' element={<MovieNotFound />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
