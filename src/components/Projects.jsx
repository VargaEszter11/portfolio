import React from 'react'
import '../index.css'
import ProjectCard from './ProjectCard'
import thesisMainPage from '../assets/main.png'
import thesisPlan from '../assets/planned.png'
import thesisVisited from '../assets/mapview.png'

function Projects() {
    return (
        <div id="projects" className="px-6 md:px-8 py-10 max-w-6xl mx-auto scroll-mt-24">
            <h2 className="font-mono text-offwhite text-2xl font-medium">
                Projects
            </h2>
            <div className="mt-8 -mx-6 md:mx-0">
                <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none px-6 md:px-0 pb-4 md:pb-0">
                    <div className="w-[calc(100vw-3rem)] shrink-0 snap-center md:w-auto md:min-w-0 md:shrink md:snap-align-none">
                        <ProjectCard
                            stack="html · css · javascript · python"
                            title="AI Travel Planner"
                            description="My thesis project - an AI travel planner that also lets you store and revisit places you've been."
                            demoLink="https://szakdolgozat.maty.as/"
                            details={[
                                'This is my thesis project, a web app built around the idea that planning a trip should feel exciting, not overwhelming. Instead of dumping you into a blank search box, it helps turn an idea into something you can actually follow.',
                                'You start with the basics: where you want to go, when you want to go, and what kind of trip you are after (sightseeing, food, nature, a slower pace, or a packed itinerary). From there, the app generates day-by-day suggestions you can review and reshape, so the plan feels more like yours than a generic tourist checklist.',
                                'Beyond planning, you can also save the places you have already visited, building a personal log of destinations and memories over time, including a view of countries you have been to. That way the app is not only about the next trip, but also about keeping track of where you have been.',
                                'Under the hood, the frontend is built with HTML, CSS, and JavaScript, while a Python backend handles the planning logic, AI integration, and storing visited places. The goal was not just to call an API and hope for the best, but to structure inputs and outputs so the results stay useful, readable, and easy to iterate on.',
                                'Working on it as a thesis meant treating it like a real product: defining the problem, designing the flow, connecting frontend and backend, and polishing the details until the whole experience felt coherent. It is the project that best shows how I like to build, practical, travel-minded, and focused on making something people would actually want to use.',
                            ]}
                            images={[
                                { src: thesisMainPage, alt: 'TravelApp main page', caption: 'Main page' },
                                { src: thesisPlan, alt: 'AI travel plan view', caption: 'Generated travel plan' },
                                { src: thesisVisited, alt: 'Visited places view', caption: 'Visited places' },
                            ]}
                        />
                    </div>
                    <div className="w-[calc(100vw-3rem)] shrink-0 snap-center md:w-auto md:min-w-0 md:shrink md:snap-align-none">
                        <ProjectCard
                            stack="coming soon"
                            title="Coming Soon"
                            description="Something new is in the works — check back later."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
