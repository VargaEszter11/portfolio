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
                    githubLink="https://github.com/VargaEszter11/szakdolgozat"
                />
                <ProjectCard 
                    stack="react · tailwind"
                    title="This Portfolio"
                    description="The site you're on right now — built to bring my work, projects, and a bit of who I am together in one place."
                    demoLink="https://yoursite.com"
                    githubLink="https://github.com/VargaEszter11/portfolio"
                />
            </div>
        </div>
    )
}

export default Projects