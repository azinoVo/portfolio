import React from 'react';

const Game = () => {
    return (
        <>
        <div className='boss'>
            <img src={require('../../assets/Slime.gif')} alt="loading..." />
            {/* This will be where the raid boss will be placed along with its health and any status effects on it. */}
        </div>
        <div className='user-info'>
            {/* This will store user information such as health from database and skills that the class has. */}
        </div>
        <div className='general-info'>
            {/* This will display game dialogue. */}
        </div>
        </>

    );
}

export default Game;