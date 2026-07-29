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

        const mediaQuery = window.matchMedia('(min-width: 768px)')

        const update = () => {
            if (mediaQuery.matches) {
                setImageHeight(el.offsetHeight)
            } else {
                setImageHeight(null)
            }
        }
        update()

        const observer = new ResizeObserver(update)
        observer.observe(el)
        mediaQuery.addEventListener('change', update)

        return () => {
            observer.disconnect()
            mediaQuery.removeEventListener('change', update)
        }
    }, [])

    return (
        <div className="px-6 md:px-8 py-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div ref={textRef} className="flex-1 text-center md:text-left order-2 md:order-1">
                <p className="font-mono text-sm text-teal">fullstack developer</p>
                <h1 className="font-mono text-offwhite text-3xl md:text-4xl font-medium mt-4">
                    <TypewriterText text={heading} />
                </h1>
                <p className="font-mono text-base text-muted mt-2">
                    <TypewriterText
                        text={subtext}
                        delay={heading.length}
                    />
                </p>
                <div className="flex gap-3 mt-8 justify-center md:justify-start">
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
                className="w-48 h-48 md:w-auto md:h-auto shrink-0 rounded-full md:rounded-none object-cover order-1 md:order-2"
                style={imageHeight ? { height: imageHeight } : undefined}
            />
        </div>
    )
}

export default Hero