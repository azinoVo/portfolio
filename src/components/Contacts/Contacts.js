import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import resume from '../../assets/_ Resume for Nguyen Vo [Version 2].pdf'
import './Contacts.css';

const Contacts = () => {
    return (
        <div className='contacts'>
            <span className='contact'><a href="https://www.linkedin.com/in/nguyen-vo22/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FontAwesomeIcon className='fa-icon' icon={faLinkedin} size="3x"/></a></span>
            <span className='contact'><a href="https://github.com/azinoVo" target="_blank" rel="noopener noreferrer" title="GitHub"><FontAwesomeIcon className='fa-icon' icon={faGithub} size="3x" /></a></span>
            <span className='contact'><a href={resume} target="_blank" rel="noopener noreferrer" title="Download Resume"><FontAwesomeIcon className='fa-icon' icon={faFile} size="3x"/></a></span>
        </div>
    );
}

export default Contacts;