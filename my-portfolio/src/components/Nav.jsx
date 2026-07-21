import React from 'react'
import '../index.css'

function Nav() {
    return (
        <nav className="sticky top-0 z-50 bg-ink border-b border-white/10">
            <div className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto">
                <span className="text-offwhite font-mono font-medium">
                    eszter.
                </span>
                <div className="flex gap-7 text-sm font-mono text-muted">
                    <a href="#about">about</a>
                    <a href="#projects">projects</a>
                    <a href="#experience">experience</a>
                    <a href="#achievements">achievements</a>
                    <a href="#skills">skills</a>
                    <a href="#contact">contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav
