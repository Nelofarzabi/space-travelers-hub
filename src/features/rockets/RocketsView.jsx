import './Rockets.css';

const RocketsView = () => (
  <main>
    <ul className="rockets--list">
      <li>
        <img src="https://imgur.com/DaCfMsj.jpg" alt="" className="rocket--img" />
        <section className="rockets--desc">
          <h3>Falcon 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Impedit, aliquam, nihil blanditiis alias quam eveniet
            dignissimos possimus tempore repellendus libero rerum unde
            temporibus,
            modi quisquam laudantium? Saepe fugiat expedita labore.
          </p>
          <button type="button" className="reserve--btn">Reserve Rockets</button>
        </section>
      </li>
    </ul>
  </main>
);

export default RocketsView;
