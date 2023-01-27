import React, { FC } from 'react';
import s from './index.module.scss';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

const FavoritesPage: FC = () => {
  const { favorites } = useAppSelector((state) => state.github);

  const { removeFavorite } = useActions();

  const removeFromFavorite = (url: string) => {
    removeFavorite(url);
  };
  if (favorites.length === 0) return <p>No items</p>;
  return (
    <div className={s.favorites}>
      <ul>
        {favorites.map((f) => (
          <li key={f}>
            <a target="_blank" rel="noreferrer" href={f}>
              {f}
            </a>
            <button
              onClick={() => removeFromFavorite(f)}
              className={s.btn + ' ' + s.red}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
