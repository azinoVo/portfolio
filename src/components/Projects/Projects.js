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
                        <h3><a href={project.landing} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                        <div className='project-info'>
                            <img src={require(`../../assets/${project.picture}.png`)} alt={project.name}/>
                            <div className='right-side'>
                                <h4>Technology</h4>
                                <ul>
                                    {project["tech-stack"].map(tech => {
                                        return <li>{tech}</li>
                                    })}
                                </ul>
                                <h4>Description</h4>
                                <p>{project.description}</p>
                                {project.landing && <a href={project.landing} target="_blank" rel="noopener noreferrer">Landing</a>}
                                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default Projects;