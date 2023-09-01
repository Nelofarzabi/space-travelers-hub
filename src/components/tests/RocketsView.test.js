import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import RocketsView from '../RocketsView';
import { reserveRockets } from '../../redux/rockets/rocketsSlice';

const mockStore = configureStore([]);

test('renders rockets with correct buttons and actions', () => {
  const initialState = {
    rockets: {
      rockets: [
        {
          id: 1, name: 'Rocket 1', img: 'rocket1.jpg', description: 'Description 1', reserved: true,
        },
        {
          id: 2, name: 'Rocket 2', img: 'rocket2.jpg', description: 'Description 2', reserved: false,
        },
      ],
      loading: false,
      error: null,
    },
  };

  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <MemoryRouter>
        <RocketsView />
      </MemoryRouter>
    </Provider>,
  );

  // Check if rocket names, descriptions, and buttons are rendered
  const rocketName1 = screen.getByText('Rocket 1');
  const rocketDescription1 = screen.getByText('Description 1');
  const reserveButton1 = screen.getByText('cancel reservation');

  const rocketName2 = screen.getByText('Rocket 2');
  const rocketDescription2 = screen.getByText('Description 2');
  const reserveButton2 = screen.getByText('Reserve Rockets');

  expect(rocketName1).toBeInTheDocument();
  expect(rocketDescription1).toBeInTheDocument();
  expect(reserveButton1).toBeInTheDocument();

  expect(rocketName2).toBeInTheDocument();
  expect(rocketDescription2).toBeInTheDocument();
  expect(reserveButton2).toBeInTheDocument();

  // Check if Reserve Rockets button is clicked and dispatched action is correct
  userEvent.click(reserveButton2);

  const expectedAction = reserveRockets({ id: 2 });
  const actions = store.getActions();
  expect(actions).toContainEqual(expectedAction);
});
