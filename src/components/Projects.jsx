import React from 'react'
import '../index.css'
import ProjectCard from './ProjectCard'
import thesisMainPage from '../assets/thesis_main_page.png'
import thesisPlan from '../assets/thesis_plan.png'
import thesisVisited from '../assets/thesis_visited.png'

function Projects() {
    return (
        <div id="projects" className="px-8 py-10 max-w-6xl mx-auto">
            <h2 className="font-mono text-offwhite text-2xl font-medium">
                Projects
            </h2>
            <div className="grid grid-cols-2 gap-8 mt-8">
                <ProjectCard
                    stack="html · css · javascript · python"
                    title="AI Travel Planner"
                    description="My thesis project - an AI travel planner that also lets you store and revisit places you've been."
                    demoLink="https://szakdolgozat.maty.as/"
                    details={[
                        'This is my thesis project, a web app built around the idea that planning a trip should feel exciting, not overwhelming. Instead of dumping you into a blank search box, it helps turn a rough idea of a destination into something you can actually follow.',
                        'You start with the basics: where you want to go, how long you have, and what kind of trip you are after (sightseeing, food, nature, a slower pace, or a packed itinerary). From there, the app generates day-by-day suggestions you can review and reshape, so the plan feels more like yours than a generic tourist checklist.',
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
                <ProjectCard
                    stack="coming soon"
                    title="Coming Soon"
                    description="Something new is in the works — check back later."
                />
            </div>
        </div>
    )
}

export default Projects
