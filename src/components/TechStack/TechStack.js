import React from 'react';
import TechStackList from './TechStackList';

const TechStack = () => {
    return (
        <>
        <h2 id="techStack">Technology Stack and Skills</h2>
        <div className='techWrapper'>
            {TechStackList.map(tech => {
                return (
                    <div className='tech'>
                        <h3>{tech.name}</h3>
                        <p>{tech.description}</p>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default TechStack;