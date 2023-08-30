import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from './missionsSlice';
import './Missions.css';

const MissionsView = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  useEffect(() => {
    console.log(missions);
    dispatch(fetchMissions());
  }, []);
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
          <tr>
            <th>Thaicom</th>
            <td>
              Thaicom is the name of a series of communications
              satellites operated from Thailand, and also the name
              of Thaicom Public Company Limited, which is the company
              that owns and operates the Thaicom satellite fleet and
              other telecommunication businesses in Thailand and
              throughout the Asia-Pacific region. The satellite projects
              were named Thaicom by the King of Thailand, His Majesty
              the King Bhumibol Adulyadej, as a symbol of the linkage
              between
              Thailand and modern communications technology.
            </td>
            <td>
              <button type="button" className="member--btn">not a member</button>
            </td>
            <td>
              <button type="button" className="join--mission--btn">Join Mission</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default MissionsView;
