import { useSelector, useDispatch } from 'react-redux';
import { reserveRockets } from './rocketsSlice';
import './Rockets.css';

const RocketsView = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <main>
      <ul className="rockets--list">
        {
      rockets.map((rocket) => {
        const {
          name, id, img, description, reserved,
        } = rocket;
        return (
          <li key={id}>
            <img src={img} alt="" className="rocket--img" />
            <section className="rockets--desc">
              <h3>{name}</h3>
              <p>
                {reserved && <button type="button" className="reserved--badge">reserved</button>}
                {description}
              </p>
              <button
                type="button"
                className={`reserve--btn ${reserved ? 'booked--btn' : 'not--booked--btn'}`}
                onClick={() => dispatch(reserveRockets({ id }))}
              >
                { reserved
                  ? 'cancel reservation'
                  : 'Reserve Rockets'}
              </button>
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
