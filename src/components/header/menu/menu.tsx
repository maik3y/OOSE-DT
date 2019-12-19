import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss';

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <NavLink className="menu__link" exact to={'/'}>
        Home
      </NavLink>
      <NavLink className="menu__link" exact to={'/lessen'}>
        Lessen
      </NavLink>
      <NavLink className="menu__link" exact to={'/toetsen'}>
        Toetsen
      </NavLink>
      <NavLink className="menu__link" exact to={'/404notfound'}>
        404 not found
      </NavLink>
    </nav>
  );
};
export default Menu;
