import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard/index.js';
import { MemoryRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar/index.js';
import { Provider } from 'react-redux';
import store from '../../util/redux/store.js';
const movie = {
  id: 1,
  poster_path: '/test.png',
  title: 'Test Movie',
  vote_average: 7.8,
  overview: 'test overview',
};
describe('MovieCard testing', () => {
  afterAll(() => {
    cleanup();
  });
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );
  });

  it('should render properly', async () => {
    setTimeout(function () {
      const search = screen.getByTestId('search');
      expect(search).toBeInTheDocument();
      const navUrl = screen.getByTestId('nav-ul');
      expect(navUrl).toBeInTheDocument();
      const homeBtn = screen.getByTestId('home-btn');
      expect(homeBtn).toBeInTheDocument();
    }, 200);
  });

  it('should have the correct url to navigate to home', () => {
    const link = screen.getByTestId('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
