import React, { useCallback, useState } from 'react'
import '../index.css'
import { ExternalLink } from 'lucide-react'
import DetailModal from './DetailModal'

const relevantCourses = [
    {
        name: 'Web Technologies 1 & 2',
        description: 'HTML, CSS and JavaScript in the first course, Angular in the second. I built a small project for each - they are on my GitHub.',
        link: { href: 'https://github.com/VargaEszter11', label: 'github' },
    },
    {
        name: 'Databases',
        description: 'Writing SQL queries and using databases inside real programs, mostly with SQLite. One of my favourite courses.',
    },
    {
        name: 'Object-Oriented Programming',
        description: 'Object-oriented design in Java, together with AI-based programming. I am currently working on the course assignment, CampusLostFound.',
        link: { href: 'https://github.com/VargaEszter11/CampusLostFound', label: 'github' },
    },
    {
        name: 'SAP ABAP Programming Basics',
        description: 'Developing in ABAP on SAP systems - a different world from web development, and one of the courses I enjoyed most.',
    },
    {
        name: 'Networks',
        description: 'Two networking fundamentals courses, which led into the Cisco CCNA track below.',
    },
]

const ccnaCourses = [
    { name: 'CCNA: Introduction to Networks', status: 'completed' },
    { name: 'CCNA: Switching, Routing, and Wireless Essentials', status: 'completed' },
    { name: 'CCNA: Enterprise Networking, Security, and Automation', status: 'in progress' },
]

const universityDetails = [
    'I started my Computer Science Engineering BSc at the University of Miskolc in September 2023, specialising in web technologies, and expect to graduate in January 2027.',
    'University is also where my work experience started: I joined Shiwaforce through the dual education programme, so my studies run in parallel with my internship, and I took part in evoCampus, Evosoft\'s mentoring programme at the university.',
    'The courses I enjoyed most were databases, web technologies, and SAP ABAP programming.',
]

const ccnaDetails = [
    'The Cisco Networking Academy CCNA track is a three-course series that goes from networking fundamentals through switching and routing to enterprise networks, security, and automation.',
    'I have completed the first two courses and am currently working through the third.',
]

const modals = {
    university: {
        titleId: 'university-modal-title',
        date: '2023. 09. - 2027. 01. (expected)',
        title: 'Computer Science Engineering BSc',
        org: 'University of Miskolc · GEIK',
        details: universityDetails,
    },
    ccna: {
        titleId: 'ccna-modal-title',
        title: 'CCNA courses',
        org: 'Cisco Networking Academy',
        details: ccnaDetails,
    },
}

function Education() {
    const [activeModal, setActiveModal] = useState(null)
    const modal = activeModal ? modals[activeModal] : null

    const closeModal = useCallback(() => setActiveModal(null), [])

    return (
        <>
            <div id="education" className="px-6 md:px-8 py-10 max-w-6xl mx-auto scroll-mt-24">
                <h2 className="font-mono text-offwhite text-2xl font-medium">
                    Education
                </h2>
                <div className="mt-8 space-y-8">
                    <div className="border-l-2 border-teal/40 pl-4 md:pl-6">
                        <p className="font-mono text-sm text-muted">
                            2023. 09. - 2027. 01. (expected)
                        </p>
                        <h3 className="font-mono text-offwhite text-lg font-medium mt-1">
                            Computer Science Engineering BSc
                        </h3>
                        <p className="font-mono text-teal text-sm mt-1">
                            University of Miskolc · GEIK
                        </p>
                        <p className="font-mono text-muted text-sm mt-3">
                            Specialising in web technologies, studying alongside my internship through the dual education programme.
                        </p>
                        <button
                            type="button"
                            onClick={() => setActiveModal('university')}
                            className="font-mono text-teal text-sm mt-3 cursor-pointer"
                        >
                            more
                        </button>
                    </div>

                    <div className="border-l-2 border-teal/40 pl-4 md:pl-6">
                        <p className="font-mono text-sm text-muted">
                            2 of 3 completed
                        </p>
                        <h3 className="font-mono text-offwhite text-lg font-medium mt-1">
                            CCNA courses
                        </h3>
                        <p className="font-mono text-teal text-sm mt-1">
                            Cisco Networking Academy
                        </p>
                        <p className="font-mono text-muted text-sm mt-3">
                            Working through Cisco's CCNA curriculum, from networking fundamentals to enterprise networks.
                        </p>
                        <button
                            type="button"
                            onClick={() => setActiveModal('ccna')}
                            className="font-mono text-teal text-sm mt-3 cursor-pointer"
                        >
                            more
                        </button>
                    </div>
                </div>
            </div>

            {modal && (
                <DetailModal modal={modal} onClose={closeModal}>
                    {activeModal === 'university' && (
                        <>
                            <p className="font-mono text-muted text-sm leading-relaxed mt-3">
                                My thesis, an AI travel planner, is still in progress - you can find it under{' '}
                                <a href="#projects" onClick={closeModal} className="text-teal">projects</a>.
                            </p>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <p className="font-mono text-faint text-sm">
                                    relevant courses
                                </p>
                                <ul className="mt-3 space-y-4">
                                    {relevantCourses.map((course) => (
                                        <li key={course.name}>
                                            <p className="font-mono text-offwhite text-sm">
                                                {course.name}
                                            </p>
                                            <p className="font-mono text-muted text-sm leading-relaxed mt-1">
                                                {course.description}
                                                {course.link && (
                                                    <>
                                                        {' '}
                                                        <a
                                                            href={course.link.href}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center gap-1 text-teal"
                                                        >
                                                            {course.link.label}
                                                            <ExternalLink size={12} />
                                                        </a>
                                                    </>
                                                )}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                    {activeModal === 'ccna' && (
                        <ul className="mt-6 pt-4 border-t border-white/10 space-y-3">
                            {ccnaCourses.map((course) => (
                                <li
                                    key={course.name}
                                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4 font-mono text-sm"
                                >
                                    <span className="text-offwhite">{course.name}</span>
                                    <span className={`shrink-0 ${course.status === 'completed' ? 'text-muted' : 'text-faint'}`}>
                                        {course.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </DetailModal>
            )}
        </>
    )
}

export default Education
