import React, { FC } from 'react';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { IRepo } from '../../models';
import s from './index.module.scss';

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavorite, removeFavorite } = useActions();
  const { favorites } = useAppSelector((state) => state.github);

  const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFavorite(repo.html_url);
  };
  const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFavorite(repo.html_url);
  };

  return (
    <a className={s.link} href={repo.html_url} target="_blank" rel="noreferrer">
      <div className={s.box}>
        <h2>{repo.full_name}</h2>
        <p className={s.forks}>
          Forks: <span>{repo?.forks}</span>
          Watchers: <span>{repo?.watchers}</span>
        </p>
        <p className={s.description}>{repo?.description}</p>
        {favorites.includes(repo.html_url) ? (
          <button onClick={removeFromFavorite} className={s.btn + ' ' + s.red}>
            Remove
          </button>
        ) : (
          <button onClick={addToFavorite} className={s.btn}>
            Add
          </button>
        )}
      </div>
    </a>
  );
};

export default RepoCard;
