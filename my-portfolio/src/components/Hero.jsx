import React from 'react';
import '../index.css';
import TypewriterText from './TypewriterText';

function Hero() {
    const heading = "Hi, I'm Eszter"
    const subtext = 'Fullstack dev. Climber. Dog person. Always planning my next trip.'

    return (
        <div className="px-8 py-10 max-w-6xl mx-auto">
            <div className="w-2/3">
                <p className="font-mono text-sm text-teal">fullstack developer</p>
                <h1 className="font-mono text-offwhite text-4xl font-medium mt-4">
                    <TypewriterText text={heading} />
                </h1>
                <p className="font-mono text-base text-muted mt-2">
                    <TypewriterText
                        text={subtext}
                        delay={heading.length}
                    />
                </p>
                <div className="flex gap-3 mt-8">
                    <a href="#projects" className="bg-teal font-mono text-ink px-4 py-2 rounded-md">
                        view projects
                    </a>
                    <a href="#contact" className="border border-white/30 font-mono text-offwhite px-4 py-2 rounded-md">
                        contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero