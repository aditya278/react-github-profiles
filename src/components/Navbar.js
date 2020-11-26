import React from 'react'

import { Link } from 'react-router-dom';

function Navbar({title, icon}) {
    return (
        <div>
            <nav className="navbar bg-primary">
                <Link to="/">
                    <h1>
                        <i className={icon}></i> {title}
                    </h1>
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

Navbar.defaultProps = {
    icon : "fab fa-github",
    title: "Github Search Engine"
}

export default Navbar
