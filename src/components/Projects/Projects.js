import React from 'react';
import projectsList from './ProjectsList';

const Projects = () => {
    return (
        <>
        <h2>Projects</h2>
        {/* <img src={require('../../assets/RoamlyResized.png')} alt=''/> */}
        <div className='projects'>
            {projectsList.map(project => {
                return(
                    <div className='project'>
                        <h3>{project.name}</h3>
                        <img src={require(`../../assets/${project.picture}.png`)} alt="project here"/>
                        <ul>
                            {project["tech-stack"].map(tech => {
                                return <li>{tech}</li>
                            })}
                        </ul>
                        <p>{project.description}</p>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default Projects;