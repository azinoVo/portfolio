import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <header className='navigation'>
            <h1>Nguyen Vo</h1>
            <ul>
                <li><a href="#techWrapper">Tech Stack</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>

        </header>
    );
}

export default Nav;