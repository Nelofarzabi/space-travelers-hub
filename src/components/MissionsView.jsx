import { useDispatch, useSelector } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';
import './Missions.css';
import Loading from './Loading';
import Error from './Error';

const MissionsView = () => {
  const dispatch = useDispatch();
  const { missions, loading, error } = useSelector((state) => state.missions);
  if (loading) {
    return <Loading type="missions" />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th className="empty--th">
          &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => {
              const {
                name, id, description, joined,
              } = mission;
              return (
                <tr key={id}>
                  <th>{name}</th>
                  <td>
                    {description}
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${joined ? 'active--btn' : 'non--active--btn'} member--btn`}
                    >
                      {joined ? 'active member' : 'not a member'}
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${joined ? 'leave--mission' : 'join--mission--btn'} mission--btn`}
                      onClick={() => dispatch(joinMission({ id }))}
                    >
                      { joined ? 'leave mission' : 'Join Mission'}
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </main>
  );
};

export default MissionsView;
