import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import SearchInput from '../SearchInput/index.js';
import { Provider } from 'react-redux';
import store from '../../util/redux/store.js';

describe('SearchInput testing', () => {
  afterAll(() => {
    cleanup();
  });

  it('renders SearchInput without errors', () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
  });

  it('should change the input field value correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    const input = getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('debounce function works', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );

    const input = getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'test' } });

    // Wait for debounce timer to finish
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
    });

    // Check if the actions were dispatched correctly
    const state = store.getState();
    expect(state.movies.searchTerm).toBe('test');
  });
});
