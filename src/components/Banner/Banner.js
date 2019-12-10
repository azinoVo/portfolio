import React from 'react';
import './Banner.css'
import picture from '../../assets/profile resized.png'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={picture} alt="Nguyen Vo"/>
            <div className='name'>Nguyen Vo</div>
            <div className='role'>Full Stack Web Developer from New Orleans, LA</div>
        </div>
    );
}

export default Banner;