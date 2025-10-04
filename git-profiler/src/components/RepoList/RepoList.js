import React, { useState, useMemo, useCallback } from 'react';
import './RepoList.css';

const RepoList = ({ repos }) => {
  const [sortBy, setSortBy] = useState('star_count'); 
  const sortedRepos = useMemo(() => {
    console.log('Running sort...');
    const sorted = [...repos];
    if (sortBy === 'created_at') {
      return sorted.sort((a, b) => new Date(b[sortBy]) - new Date(a[sortBy]));
    }
    return sorted.sort((a, b) => b[sortBy] - a[sortBy]);
  }, [repos, sortBy]);
  const handleSortChange = useCallback((e) => {
    setSortBy(e.target.value);
  }, []);

  return (
    <div className="repo-list-container">
      <h2>Top Repositories</h2>
      <div className="sort-options">
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="star_count">Stars</option>
          <option value="forks_count">Forks</option>
          <option value="created_at">Date Created</option>
        </select>
      </div>
      <ul className="repo-list">
        {sortedRepos.slice(0, 10).map(repo => (
          <li key={repo.id} className="repo-item">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-stats">
                <span>{repo.star_count}</span>
                <span>{repo.forks_count}</span>
                <span>{repo.language}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;