import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.scss';

const Navigation: FC = () => {
  return (
    <nav className={s.navigation}>
      <h3 className={s.navigation__title}>Github Search</h3>
      <span className={s.navigation__box}>
        <Link to="/" className={s.navigation__box__link}>
          Home
        </Link>
        <Link to="/favorites" className={s.navigation__box__link}>
          Favorites
        </Link>
      </span>
    </nav>
  );
};

export default Navigation;
