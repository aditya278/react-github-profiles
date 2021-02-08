import React from 'react'

import { Link } from 'react-router-dom';

export default function UserItem({login, avatar_url}) {
    return (
        <div className="card text-center" style={{maxWidth:300}}>
            <img src={avatar_url} alt="Avatar" className="round-img" style={{width:140}} />
            <h3>{login}</h3>
            <div>
                <Link to={`react-github-profiles/user/${login}`} className="btn btn-dark btn-sm my1">
                    GitHub Profile
                </Link>
            </div>
        </div>
    )
}
