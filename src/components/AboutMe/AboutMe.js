import React from 'react';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
    return (
        <>
        <h2 id="bio">About Me</h2>
        <div className='bioWrapper'>
            <p>Hello, friends! I'm a developer originally from Vietnam. I 
                immigrated to the United States in 2001 and have made
                the Big Easy my new home. With a background in science and education,
                I have strong problem-solving, communication, procedural, and design skills.
                I hope to use these skills creatively to design and create amazing products.
                When I'm not debugging, I'm usually reading fantasy books, writing stories, playing League
                of Legends, or dragging my friends out to grab sushi. To view my 
                projects, scroll below or click the handy dandy arrow.
            </p>
        </div>
        <div className='scroll'><a href="#projectsHeader" title="View Projects"><FontAwesomeIcon className='fa-icon' icon={faChevronCircleDown} size="3x"/></a></div>
        </>
    );
}

export default AboutMe;