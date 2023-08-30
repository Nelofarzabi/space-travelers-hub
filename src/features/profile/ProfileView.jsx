import { useSelector } from 'react-redux';
import './Profile.css';

const ProfileView = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <main className="profile--container">
      <section>
        <h2>My Missions</h2>
        <ul className="profile--list">
          <li>Teslar</li>
          <li>Teslar</li>
          <li>Teslar</li>
        </ul>
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
