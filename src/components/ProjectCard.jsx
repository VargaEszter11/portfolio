import React, { useEffect, useState } from 'react'
import '../index.css'
import { ExternalLink } from 'lucide-react'

function ProjectCard({ stack, title, description, demoLink, githubLink, details, images = [] }) {
    const [open, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null)

    const activeImage = activeIndex !== null ? images[activeIndex] : null
    const hasMultipleImages = images.length > 1

    const closeModal = () => {
        setActiveIndex(null)
        setOpen(false)
    }

    const showPrevious = () => {
        setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1))
    }

    const showNext = () => {
        setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1))
    }

    useEffect(() => {
        if (!open) return

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                if (activeIndex !== null) {
                    setActiveIndex(null)
                } else {
                    closeModal()
                }
                return
            }

            if (activeIndex === null || !hasMultipleImages) return

            if (event.key === 'ArrowLeft') showPrevious()
            if (event.key === 'ArrowRight') showNext()
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [open, activeIndex, hasMultipleImages, images.length])

    return (
        <>
            <div className="border border-white/10 rounded-md p-6 bg-white/2 flex flex-col h-full">
                <p className="font-mono text-sm text-muted">{stack}</p>
                <h3 className="font-mono text-offwhite text-xl font-medium mt-2">{title}</h3>
                <p className="font-mono text-muted text-sm mt-3">{description}</p>
                <div className="flex gap-4 mt-4 pt-4 mt-auto">
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-teal text-sm">
                            live demo
                            <ExternalLink size={14} />
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noreferrer" className="font-mono text-teal text-sm">
                            github
                        </a>
                    )}
                    {details && (
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="font-mono text-teal text-sm cursor-pointer"
                        >
                            more
                        </button>
                    )}
                </div>
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-ink/80"
                    onClick={closeModal}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/10 rounded-md bg-ink p-6 shadow-xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="font-mono text-sm text-muted">{stack}</p>
                                <h3 id="project-modal-title" className="font-mono text-offwhite text-xl font-medium mt-2">
                                    {title}
                                </h3>
                            </div>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="font-mono text-muted text-sm cursor-pointer hover:text-offwhite"
                                aria-label="Close"
                            >
                                close
                            </button>
                        </div>

                        <div className="mt-4 space-y-3">
                            {details.map((paragraph) => (
                                <p key={paragraph} className="font-mono text-muted text-sm leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {images.length > 0 && (
                            <div className="mt-6 grid grid-cols-3 gap-3">
                                {images.map((image, index) => (
                                    <button
                                        key={image.src}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        className="group text-left cursor-pointer"
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="aspect-video w-full rounded-md border border-white/10 object-cover object-top transition group-hover:border-teal/50"
                                        />
                                        {image.caption && (
                                            <span className="mt-1 block font-mono text-faint text-xs">
                                                {image.caption}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}

                        {(demoLink || githubLink) && (
                            <div className="flex gap-4 mt-6 pt-4 border-t border-white/10">
                                {demoLink && (
                                    <a href={demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-teal text-sm">
                                        live demo
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                                {githubLink && (
                                    <a href={githubLink} target="_blank" rel="noreferrer" className="font-mono text-teal text-sm">
                                        github
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                    {activeImage && (
                        <div
                            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 px-4"
                            onClick={(event) => {
                                event.stopPropagation()
                                setActiveIndex(null)
                            }}
                        >
                            <div
                                className="relative flex max-h-[85vh] max-w-5xl items-center gap-4"
                                onClick={(event) => event.stopPropagation()}
                            >
                                {hasMultipleImages && (
                                    <button
                                        type="button"
                                        onClick={showPrevious}
                                        className="shrink-0 font-mono text-muted text-2xl leading-none cursor-pointer hover:text-offwhite"
                                        aria-label="Previous image"
                                    >
                                        ‹
                                    </button>
                                )}

                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setActiveIndex(null)}
                                        className="absolute -top-8 right-0 font-mono text-muted text-sm cursor-pointer hover:text-offwhite"
                                        aria-label="Close image"
                                    >
                                        close
                                    </button>
                                    <img
                                        src={activeImage.src}
                                        alt={activeImage.alt}
                                        className="max-h-[85vh] max-w-4xl rounded-md border border-white/10 object-contain"
                                    />
                                    {activeImage.caption && (
                                        <p className="mt-2 text-center font-mono text-faint text-xs">
                                            {activeImage.caption} ({activeIndex + 1}/{images.length})
                                        </p>
                                    )}
                                </div>

                                {hasMultipleImages && (
                                    <button
                                        type="button"
                                        onClick={showNext}
                                        className="shrink-0 font-mono text-muted text-2xl leading-none cursor-pointer hover:text-offwhite"
                                        aria-label="Next image"
                                    >
                                        ›
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default ProjectCard
