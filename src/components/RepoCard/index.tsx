import React, { FC } from 'react';
import { IRepo } from '../../models';
import s from './index.module.scss';

const RepoCard = ({ repo }: { repo: IRepo }) => {
  return (
    <div className={s.box}>
      <h2>{repo.full_name}</h2>
      <p>
        Forks: <span>{repo?.forks}</span>
        Watchers: <span>{repo?.watchers}</span>
      </p>
      <p className={s.description}>{repo?.description}</p>
    </div>
  );
};

export default RepoCard;
