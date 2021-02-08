import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';

import Loading from './Loading';
import Repos from './Repos';

import GithubContext from '../context/GitHub/GithubContext';

function Profile ({match}) {

    const githubContext = useContext(GithubContext);

    const { user, loading, getUser, getUserRepos} = githubContext;

    useEffect(() => {
        getUser(match.params.username);
        getUserRepos(match.params.username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        company
    } = user;

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Link to="/react-github-profiles" className="btn btn-light">
                Back to Search
            </Link>
            Hireable : { hireable ? (
                <i className="fas fa-check text-success" />
                ) : (
                    <i className="fas fa-times text-danger" />
            )}

            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt="Display" className="round-img" style={{ maxWidth: 150 }} />
                    <h1>{name}</h1>
                    <p>Location : {location}</p>
                </div>
                <div>
                    {
                        bio && (
                            <>
                                <h2>Bio</h2>
                                <p>{bio}</p>
                            </>
                        )
                    }
                    <a href={html_url} className="btn btn-dark my-1" target="_blank" rel="noreferrer" alt="Profile">Visit GitHub Profile</a>
                    <ul>
                        <li>
                            {
                                login && (
                                    <>
                                        <b> Username : </b> {login}
                                    </>
                                )
                            }
                        </li>
                        <li>
                            {
                                company && (
                                    <>
                                        <b> Company : </b> {company}
                                    </>
                                )
                            }
                        </li>
                        <li>
                            {
                                blog && (
                                    <>
                                        <b> Websites: </b> {blog}
                                    </>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">
                    Followers : {followers}
                </div>
                <div className="badge badge-primary">
                    Following : {following}
                </div>
                <div className="badge badge-primary">
                    Public Repos : {public_repos}
                </div>
                <div className="badge badge-primary">
                    Public Gists : {public_gists}
                </div>
            </div>
            <Repos />
        </>
    )
}

export default Profile;