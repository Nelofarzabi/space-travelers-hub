import { useSelector } from 'react-redux';
import './Rockets.css';

const RocketsView = () => {
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <main>
      <ul className="rockets--list">
        {
      rockets.map((rocket) => {
        const {
          name, id, img, description,
        } = rocket;
        return (
          <li key={id}>
            <img src={img} alt="" className="rocket--img" />
            <section className="rockets--desc">
              <h3>{name}</h3>
              <p>
                {description}
              </p>
              <button type="button" className="reserve--btn">Reserve Rockets</button>
            </section>
          </li>
        );
      })
     }
      </ul>
    </main>
  );
};

export default RocketsView;
