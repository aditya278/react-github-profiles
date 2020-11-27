import React from 'react'
import PropTypes from 'prop-types';

import RepoItem from './RepoItem';

function Repos({userRepos}) {
    return (
        <div id="repos" style={userStyle}>
            {
                userRepos.map(repo => <RepoItem repo={repo} key={repo.id} />)
            }
        </div>
    )
}

Repos.propTypes = {
    userRepos : PropTypes.array.isRequired
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "2rem",
};

export default Repos
