import React, { useContext } from 'react';

import RepoItem from './RepoItem';

import GithubContext from '../context/GitHub/GithubContext';

function Repos() {
    const githubContext = useContext(GithubContext);
    const { repos } = githubContext;

    return (
        <div id="repos" style={userStyle}>
            {
                repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
            }
        </div>
    )
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "2rem",
};

export default Repos;