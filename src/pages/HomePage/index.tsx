import React, { FC, useEffect, useState } from 'react';
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from '../../store/github/github.api';
import s from './index.module.scss';
import { useDebounce } from '../../hooks/debounce';
import { RepoCard } from '../../components';

const HomePage: FC = () => {
  const [search, setSearch] = useState<string>('');
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  });
  const [fetchRepos, { isLoading: isReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  const clickHandler = (username: string) => {
    setSearch('');
    fetchRepos(username);
  };

  // useEffect(() => {}, [debounced]);

  if (isError) {
    return (
      <div className={s.error}>
        <h1>Произошла ошибка загрузки данных...</h1>
      </div>
    );
  }

  return (
    <div className={s.home}>
      <div className={s.box}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={s.input}
          placeholder="Search for Github username"
        />
        {data && (
          <div className={s.drop}>
            {isLoading && <h3>Идет загрузка данных...</h3>}
            {data?.map((user) => (
              <div onClick={() => clickHandler(user.login)} key={user.id}>
                {user.login}
              </div>
            ))}
          </div>
        )}
        {repos && (
          <div className={s.reposlist}>
            {isReposLoading && <h3>Загрузка списка репозиториев...</h3>}
            {repos?.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
