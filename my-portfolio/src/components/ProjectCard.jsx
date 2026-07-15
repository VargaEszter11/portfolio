import React from 'react';
import '../index.css';

function ProjectCard({ stack, title, description, demoLink, githubLink }) {
    return (
        <div className="border border-white/10 rounded-md p-6 bg-white/2 flex flex-col h-full">
            <p className="font-mono text-sm text-muted">{stack}</p>
            <h3 className="font-mono text-offwhite text-xl font-medium mt-2">{title}</h3>
            <p className="font-mono text-muted text-sm mt-3">{description}</p>
            <div className="flex gap-4 mt-4 pt-4 mt-auto">
                {demoLink && <a href={demoLink} className="font-mono text-teal text-sm">live demo</a>}
                {githubLink && <a href={githubLink} className="font-mono text-teal text-sm">github</a>}
            </div>
        </div>
    )
}

export default ProjectCard
