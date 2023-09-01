import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import ProfileView from '../ProfileView';
import rocketsReducer from '../../rockets/rocketsSlice'; // Update with actual path
import missionsReducer from '../../missions/missionsSlice'; // Update with actual path

test('renders reserved missions and rockets', () => {
  const store = configureStore({
    reducer: {
      rockets: rocketsReducer,
      missions: missionsReducer,
    },
    preloadedState: {
      rockets: {
        rockets: [
          { id: 1, name: 'Rocket 1', reserved: true },
          { id: 2, name: 'Rocket 2', reserved: false },
        ],
      },
      missions: {
        missions: [
          { id: 1, name: 'Mission 1', joined: true },
          { id: 2, name: 'Mission 2', joined: false },
        ],
      },
    },
  });

  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <ProfileView />
      </MemoryRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
