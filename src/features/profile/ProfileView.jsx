import { useSelector } from 'react-redux';
import './Profile.css';

const ProfileView = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions.missions);
  const reservedMissions = missions.filter((mission) => mission.joined);
  return (
    <main className="profile--container">
      <section>
        <h2>My Missions</h2>
        {
          reservedMissions.length > 0
            ? (
              <ul className="profile--list">
                {
            reservedMissions.map((mission) => {
              const { name, id } = mission;
              return <li key={id}>{name}</li>;
            })
          }
              </ul>
            )
            : <p className="list--info--para">No missions joined at the moment</p>
        }
      </section>
      <section>
        <h2>My Rockets</h2>
        {
          reservedRockets.length > 0
            ? (
              <ul className="profile--list">
                {
            reservedRockets.map((rocket) => {
              const { name, id } = rocket;
              return <li key={id}>{name}</li>;
            })
          }
              </ul>
            )
            : <p className="list--info--para">No rockets reserved at the moment</p>
        }
      </section>
    </main>
  );
};

export default ProfileView;
