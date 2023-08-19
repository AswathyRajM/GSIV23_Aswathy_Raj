import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PageNotFound from './pages/PageNotFound';
import MoveiList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<MoveiList />} />
            <Route path='/movie/details/:movieId' element={<MovieDetails />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
