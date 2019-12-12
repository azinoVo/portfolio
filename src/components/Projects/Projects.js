import React from 'react';
import projectsList from './ProjectsList';

const Projects = () => {
    return (
        <>
        <h2>Projects</h2>
        <div className='projects'>
            {projectsList.map(project => {
                return(
                    <div className='project'>
                        <p>{project.name}</p>
                        <img src="" alt="project here"/>
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