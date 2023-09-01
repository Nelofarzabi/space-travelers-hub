import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import './Header.css';

const Header = () => (
  <header>
    <section className="header--logo">
      <img src={planet} alt="planet logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </section>
    <nav>
      <ul className="link--list">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="missions"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="profile"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
