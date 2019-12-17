import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className='contacts'>
            <span className='contact'><a href="https://www.linkedin.com/in/nguyen-vo22/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='fa-icon' icon={faLinkedin} size="2x"/></a></span>
            <span className='contact'><a href="https://github.com/azinoVo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='fa-icon' icon={faGithub} size="2x" /></a></span>
        </div>
    );
}

export default Contacts;