import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import apiClient from '../../util/apis/apiClient.js';
import { Provider } from 'react-redux';
import store from '../../util/redux/store.js';
import MovieDetails from '../MovieDetails/index.js';

jest.mock('../../util/apis/apiClient');

const mockMovie = {
  backdrop_path: '/eMPxmNvJjxVZIQWI2t1VmNC5IuR.jpg',
  casts: [
    'Jim Caviezel',
    'Mira Sorvino',
    'Bill Camp',
    'Kurt Fuller',
    'Gerardo Taracena',
    'José Zúñiga',
    'Scott Haze',
    'Gary Basaraba',
    'Eduardo Verástegui',
    'Manny Pérez',
    'Gustavo Sánchez Parra',
    'Javier Godino',
    'James Quattrochi',
    'Eduardo Gomez Monteverde',
    'Gustavo Angarita Jr.',
  ],
  director: [
    {
      job: 'Director',
      name: 'Alejandro Gómez Monteverde',
    },
  ],
  id: 678512,
  title: 'Sound of Freedom',
  overview:
    'The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.',
  poster_path: '/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg',
  release_date: '2023-07-03',
  title: 'Sound of Freedom',
  vote_average: 8.155,
};

describe('MovieDetails testing', () => {
  afterAll(() => {
    cleanup();
  });

  beforeEach(() => {
    apiClient.get.mockResolvedValue({ data: mockMovie });
    render(
      <Provider store={store}>
        <Router>
          <MovieDetails />
        </Router>
      </Provider>
    );
  });

  it('should render properly', async () => {
    setTimeout(function () {
      expect(screen.getByText('Sound of Freedom')).toBeInTheDocument;
      const overview = screen.getByTestId('movie-overview');
      expect(overview).toBeInTheDocument();
      const image = screen.getByTestId('movie-image');
      expect(image).toBeInTheDocument();
      const title = screen.getByTestId('movie-info');
      expect(title).toBeInTheDocument();
    }, 200);
  });
});
