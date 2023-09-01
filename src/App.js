import { useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout';
import RocketsView from './components/RocketsView';
import MissionsView from './components/MissionsView';
import ProfileView from './components/ProfileView';
import { fetchRockets } from './redux/rockets/rocketsSlice';
import { fetchMissions } from './redux/missions/missionsSlice';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index path="/" element={<RocketsView />} />
    <Route path="missions" element={<MissionsView />} />
    <Route path="profile" element={<ProfileView />} />
  </Route>,
));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
