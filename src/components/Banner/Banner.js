import React from 'react';
import './Banner.css'
import picture from '../../assets/profile resized.png'
import Contacts from '../Contacts/Contacts'


const Banner = () => {
    return (
        <header className='banner'>
            <img src={picture} alt="Nguyen Vo"/>
            <Contacts />
            <div className='name'>Nguyen Vo</div>
            <div className='role'>Full Stack Web Developer from New Orleans, LA</div>
        </header>
    );
}

export default Banner;