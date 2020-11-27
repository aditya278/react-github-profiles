import React from 'react'
import PropTypes from 'prop-types'

function RepoItem({repo}) {
    return (
        <div className="card" style={{textAlign:'center', maxWidth:300}}>
            <h3>
                <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repo : PropTypes.object.isRequired
}

export default RepoItem

