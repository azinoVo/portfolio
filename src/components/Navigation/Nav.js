import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='navWrapper'>
            <ul>
                {/* <li>Profile</li> */}
                <li>Skills</li>
                <li>Projects</li>
                {/* <li>Hobbies</li> */}
            </ul>
        </nav>
    );
}

export default Nav;