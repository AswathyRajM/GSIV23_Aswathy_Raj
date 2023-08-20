import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
let reduxFns = { useDispatch, useSelector };
import MovieList from '../MovieList';
import store from '../../util/redux/store';

describe('MovieList testing', () => {
  afterAll(() => {
    cleanup();
  });
  beforeAll(() => {
    cleanup();
  });
  it('should mock dispatch', () => {
    const mockXXXFn = jest.fn();
    const spyOnUseDispatch = jest
      .spyOn(reduxFns, 'useDispatch')
      .mockReturnValue({ xxxFn: mockXXXFn });
    act(() => {
      render(
        <Provider store={store}>
          <MovieList />
        </Provider>
      );
    });
    act(() => {
      fireEvent.scroll(window);
    });
    setTimeout(async () => {
      await waitFor(async () => {
        expect(mockXXXFn).toHaveBeenCalledWith({
          type: 'getUpcomingMovies',
          payload: 2,
        });
      });
    });
    spyOnUseDispatch.mockRestore();
  });
});
