import React from 'react'

import Loading from './Loading';
import UserItem from './UserItem';

export default function Users({ users, loading }) {
    
    if(loading) {
        return <Loading />
    }

    return (
        <div id="users" style={userStyle}>
            {
                users.map(user => (
                    <UserItem key={user.id} login={user.login} avatar_url={user.avatar_url} />
                ))
            }
        </div>
    )
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "2rem",
};