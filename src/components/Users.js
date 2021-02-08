import React, { useEffect, useContext} from 'react'

import Loading from './Loading';
import UserItem from './UserItem';

import GithubContext from '../context/GitHub/GithubContext';

export default function Users() {
    
    const githubContext = useContext(GithubContext);
    const { users, loading, setAllUsers} = githubContext;

    useEffect(() => {
        setAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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