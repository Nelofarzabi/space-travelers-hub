import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import MissionsView from '../MissionsView';
import { joinMission } from '../../redux/missions/missionsSlice';

const mockStore = configureStore([]);

test('renders missions with correct buttons and actions', () => {
  const initialState = {
    missions: {
      missions: [
        {
          id: 1, name: 'Mission 1', description: 'Description 1', joined: true,
        },
        {
          id: 2, name: 'Mission 2', description: 'Description 2', joined: false,
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
        <MissionsView />
      </MemoryRouter>
    </Provider>,
  );

  // Check if mission names and descriptions are rendered
  const missionName1 = screen.getByText('Mission 1');
  const missionDescription1 = screen.getByText('Description 1');
  const missionName2 = screen.getByText('Mission 2');
  const missionDescription2 = screen.getByText('Description 2');

  expect(missionName1).toBeInTheDocument();
  expect(missionDescription1).toBeInTheDocument();
  expect(missionName2).toBeInTheDocument();
  expect(missionDescription2).toBeInTheDocument();

  // Check if Join Mission button exists and click it
  const joinMissionButton = screen.getByText('Join Mission');
  userEvent.click(joinMissionButton);

  // Check if dispatched action is correct
  const expectedAction = joinMission({ id: 2 });
  const actions = store.getActions();
  expect(actions).toContainEqual(expectedAction);
});
