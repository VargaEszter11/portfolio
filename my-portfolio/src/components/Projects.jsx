import React from 'react';
import '../index.css';
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <div id="projects" className="px-8 py-10 max-w-6xl mx-auto">
            <h2 className="font-mono text-offwhite text-2xl font-medium">
                Projects
            </h2>
            <div className="grid grid-cols-2 gap-8 mt-8">
                <ProjectCard 
                    stack="html · css · javascript · python"
                    title="AI Travel Planner"
                    description="My thesis project — an AI-based travel planning app."
                    demoLink="https://szakdolgozat.maty.as/"
                />
                <ProjectCard 
                    stack="coming soon"
                    title="Working on it"
                    description="Something new is in the works — details to be added soon."
                />
            </div>
        </div>
    )
}

export default Projects