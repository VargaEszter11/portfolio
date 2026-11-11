import React, { useState } from 'react'
import '../index.css'

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: '#about', label: 'about' },
        { href: '#projects', label: 'projects' },
        { href: '#experience', label: 'experience' },
        { href: '#education', label: 'education' },
        { href: '#achievements', label: 'achievements' },
        { href: '#skills', label: 'skills' },
        { href: '#contact', label: 'contact' },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-ink border-b border-white/10">
            <div className="flex items-center justify-between px-6 md:px-8 py-5 max-w-6xl mx-auto">
                <span className="text-offwhite font-mono font-medium">
                    eszter.
                </span>

                {/* Desktop links */}
                <div className="hidden md:flex gap-7 text-sm font-mono text-muted">
                    {links.map((link) => (
                        <a key={link.href} href={link.href}>{link.label}</a>
                    ))}
                </div>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden text-offwhite p-2 -mr-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <svg
                        width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                    >
                        {isOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col gap-1 px-6 pb-5 text-sm font-mono text-muted">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Nav
