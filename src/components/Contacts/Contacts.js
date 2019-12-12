import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contacts = () => {
    return (
        <div className='contacts'>
            <a href="https://www.linkedin.com/in/nguyen-vo22/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='fa-icon' icon={faLinkedin} size="2x" fa-fw /></a>
            <a href="https://github.com/azinoVo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='fa-icon' icon={faGithub} size="2x" /></a>
        </div>
    );
}

export default Contacts;