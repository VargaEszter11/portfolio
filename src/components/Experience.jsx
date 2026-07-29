import React, { useEffect, useState } from 'react'
import '../index.css'
import { ExternalLink } from 'lucide-react'

const internshipDetails = [
    'I joined Shiwaforce through the dual education programme, working part-time alongside my studies. The role has been a mix of product work, internal tooling, and exploring newer tech like AI integrations.',
    'Day to day, I build and maintain small Java applications, help automate repetitive workflows, and put together websites or tools when the team needs them. Some tasks are tightly scoped; others mean figuring out the problem first and then shipping something useful.',
    'Working in a real company environment taught me how to move from “it works on my machine” to something teammates can rely on - clearer requirements, better communication, and caring about the details that make software easier to hand off and maintain.',
    'It is still the place where I learn the most outside of university: picking up new stacks when needed, asking better questions, and getting comfortable owning a task from first idea to something people actually use.',
]

const evoCampusDetails = [
    'evoCampus is Evosoft Hungary\'s mentoring programme at my university - a chance to work on real projects with mentors from industry, not just classroom assignments.',
    'With my team I built a storytelling webapp: we planned the idea, split the work, and shipped something we could stand behind and present. The project itself is not public, but the process - collaborating, iterating, and demoing under time pressure - was the valuable part.',
    'At the 10th anniversary closing event we demoed our work alongside other student teams. Being there meant practicing how to explain a project clearly to mentors and guests, not only how to build it.',
    'The programme helped me get more comfortable with teamwork outside university courses: receiving feedback, owning my slice of the app, and seeing how a company-style mentoring setup actually works.',
]

const modals = {
    internship: {
        titleId: 'internship-modal-title',
        date: '2023. 09. - present',
        title: 'Internship',
        org: 'Shiwaforce.com Zrt.',
        details: internshipDetails,
    },
    evoCampus: {
        titleId: 'evocampus-modal-title',
        date: '2025. 02. - 2026. 02.',
        title: 'evoCampus',
        org: 'evosoft Hungary Kft. · University of Miskolc',
        details: evoCampusDetails,
        link: {
            href: 'https://www.evosoft.hu/blog/10th-jubilee-evocampus-miskolc-university-students',
            label: '10th anniversary closing event',
        },
    },
}

function Experience() {
    const [activeModal, setActiveModal] = useState(null)
    const modal = activeModal ? modals[activeModal] : null

    useEffect(() => {
        if (!activeModal) return

        const onKeyDown = (event) => {
            if (event.key === 'Escape') setActiveModal(null)
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [activeModal])

    return (
        <>
            <div id="experience" className="px-6 md:px-8 py-10 max-w-6xl mx-auto">
                <h2 className="font-mono text-offwhite text-2xl font-medium">
                    Experience
                </h2>
                <div className="mt-8 space-y-8">
                    <div className="border-l-2 border-teal/40 pl-4 md:pl-6">
                        <p className="font-mono text-sm text-muted">
                            2023. 09. - present
                        </p>
                        <h3 className="font-mono text-offwhite text-lg font-medium mt-1">
                            Internship
                        </h3>
                        <p className="font-mono text-teal text-sm mt-1">
                            Shiwaforce.com Zrt.
                        </p>
                        <p className="font-mono text-muted text-sm mt-3">
                            My work ranges from small Java applications to AI integrations and internal tooling - automating repetitive tasks and building websites where needed.
                        </p>
                        <button
                            type="button"
                            onClick={() => setActiveModal('internship')}
                            className="font-mono text-teal text-sm mt-3 cursor-pointer"
                        >
                            more
                        </button>
                    </div>

                    <div className="border-l-2 border-teal/40 pl-4 md:pl-6">
                        <p className="font-mono text-sm text-muted">
                            2025. 02. - 2026. 02.
                        </p>
                        <h3 className="font-mono text-offwhite text-lg font-medium mt-1">
                            evoCampus
                        </h3>
                        <p className="font-mono text-teal text-sm mt-1">
                            evosoft Hungary Kft. · University of Miskolc
                        </p>
                        <p className="font-mono text-muted text-sm mt-3">
                            Participated in the evoCampus mentoring programme and built a storytelling webapp with my team.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-3">
                            <button
                                type="button"
                                onClick={() => setActiveModal('evoCampus')}
                                className="font-mono text-teal text-sm cursor-pointer"
                            >
                                more
                            </button>
                            <a
                                href="https://www.evosoft.hu/blog/10th-jubilee-evocampus-miskolc-university-students"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 font-mono text-teal text-sm"
                            >
                                10th anniversary closing event
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-ink/80"
                    onClick={() => setActiveModal(null)}
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
                                <p className="font-mono text-sm text-muted">{modal.date}</p>
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
                                onClick={() => setActiveModal(null)}
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
            )}
        </>
    )
}

export default Experience
