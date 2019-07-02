import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repo => (
      <Repository key={repo.id}>
        <header>
          <img src={repo.owner.avatar_url} alt={repo.owner.login} />
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <strong>{repo.name}</strong>
          </a>
          <small>{repo.owner.login}</small>
        </header>

        <ul>
          <li>
            <i className="fa fa-star" />
            {repo.stargazers_count}
            <small>stars</small>
          </li>
          <li>
            <i className="fa fa-code-fork" />
            {repo.forks_count}
            <small>forks</small>
          </li>
          <li>
            <i className="fa fa-exclamation-circle" />
            {repo.open_issues_count}
            <small>issues</small>
          </li>
          <li>
            <i className="fa fa-clock-o" />
            {repo.lastCommit}
            <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      lastCommit: PropTypes.string,
      html_url: PropTypes.string,

      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
      }),
    }),
  ).isRequired,
};

export default CompareList;
