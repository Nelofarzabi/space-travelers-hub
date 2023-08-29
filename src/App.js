import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import RocketsView from './features/rockets/RocketsView';
import MissionsView from './features/missions/MissionsView';
import ProfileView from './features/profile/ProfileView';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index path="/" element={<RocketsView />} />
    <Route path="missions" element={<MissionsView />} />
    <Route path="profile" element={<ProfileView />} />
  </Route>,
));

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
