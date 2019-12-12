import React from 'react';
import './Banner.css'
import picture from '../../assets/profile resized.png'
import Contacts from '../Contacts/Contacts'


const Banner = () => {
    return (
        <header className='banner-wrapper'>
            <div className='banner'>
                <img src={picture} alt="Nguyen Vo"/>
                <div className='description'>
                    <h1 id='name'>Nguyen Vo</h1>
                    <p>Full Stack Web Developer</p>
                    <p>from New Orleans, LA</p>
                    <Contacts />
                </div>
            </div>
        </header>
    );
}

export default Banner;