import React, { useEffect, useRef, useState } from 'react';
import '../index.css';
import TypewriterText from './TypewriterText';
import portfolioImage from '../assets/portfolio_image.png';

function Hero() {
    const heading = "Hi, I'm Eszter"
    const subtext = 'Fullstack dev. Climber. Dog person. Always planning my next trip.'
    const textRef = useRef(null)
    const [imageHeight, setImageHeight] = useState(null)

    useEffect(() => {
        const el = textRef.current
        if (!el) return

        const update = () => setImageHeight(el.offsetHeight)
        update()

        const observer = new ResizeObserver(update)
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div className="px-8 py-10 max-w-6xl mx-auto flex items-center gap-8">
            <div ref={textRef} className="flex-1">
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
            <img
                src={portfolioImage}
                alt="Eszter"
                className="w-auto shrink-0"
                style={imageHeight ? { height: imageHeight } : { visibility: 'hidden', height: 0 }}
            />
        </div>
    )
}

export default Hero
