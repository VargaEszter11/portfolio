import { useState, useEffect } from 'react'

function TypewriterText({ text, speed = 80, delay = 0, className = '' }) {
    const [displayed, setDisplayed] = useState('')
    const [started, setStarted] = useState(false)
    const isComplete = started && displayed.length === text.length

    useEffect(() => {
        setDisplayed('')
        setStarted(false)
        const startTimeout = setTimeout(() => setStarted(true), delay)
        return () => clearTimeout(startTimeout)
    }, [text, delay])

    useEffect(() => {
        if (!started || displayed.length >= text.length) return

        const timeout = setTimeout(() => {
            setDisplayed(text.slice(0, displayed.length + 1))
        }, speed)

        return () => clearTimeout(timeout)
    }, [started, displayed, text, speed])

    return (
        <span className={className}>
            {displayed}
            {!isComplete && <span className="animate-pulse">|</span>}
        </span>
    )
}

export default TypewriterText
