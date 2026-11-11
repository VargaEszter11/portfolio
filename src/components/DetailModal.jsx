import React, { useEffect } from 'react'
import '../index.css'
import { ExternalLink } from 'lucide-react'

function DetailModal({ modal, onClose, children }) {
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') onClose()
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [onClose])

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-ink/80"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={modal.titleId}
                className="w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/10 rounded-md bg-ink p-4 md:p-6 shadow-xl"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex items-start justify-between gap-4">
                    <div>
                        {modal.date && (
                            <p className="font-mono text-sm text-muted">{modal.date}</p>
                        )}
                        <h3
                            id={modal.titleId}
                            className="font-mono text-offwhite text-xl font-medium mt-2"
                        >
                            {modal.title}
                        </h3>
                        <p className="font-mono text-teal text-sm mt-1">
                            {modal.org}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="font-mono text-muted text-sm cursor-pointer hover:text-offwhite shrink-0"
                        aria-label="Close"
                    >
                        close
                    </button>
                </div>

                <div className="mt-4 space-y-3">
                    {modal.details.map((paragraph) => (
                        <p key={paragraph} className="font-mono text-muted text-sm leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {children}

                {modal.link && (
                    <div className="mt-6 pt-4 border-t border-white/10">
                        <a
                            href={modal.link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-teal text-sm"
                        >
                            {modal.link.label}
                            <ExternalLink size={14} />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DetailModal
