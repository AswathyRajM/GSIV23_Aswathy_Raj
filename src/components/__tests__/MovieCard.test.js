import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard/index.js';
import { MemoryRouter as Router } from 'react-router-dom';
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
  it('should render the card which shows title', () => {
    render(
      <Router>
        <MovieCard movie={movie} />
      </Router>
    );
    expect(screen.getByText('Test Movie')).toBeInTheDocument;
    expect(screen.getByText('test overview')).toBeInTheDocument;
    let image = screen.getByTestId('image');
    expect(image).toBeInTheDocument();
  });
});

it('should have the correct url to navigate', () => {
  render(
    <Router>
      <MovieCard movie={movie} />
    </Router>
  );
  let id = movie.id;
  const card = screen.getByTestId('card');
  const url = '/movie/details/' + id;
  expect(card).toHaveAttribute('href', url);
});
