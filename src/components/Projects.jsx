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
                            stack="python · fastapi · postgresql · javascript · docker"
                            title="Planventure"
                            description="My BSc thesis - a travel tracking and planning web app with AI-generated itineraries."
                            demoLink="https://szakdolgozat.maty.as/"
                            details={[
                                'Planventure is my BSc thesis: a web app for tracking the places you have visited and planning the trips you want to take next. Visited places are available in both list and map views, and itineraries are generated with the DeepSeek LLM.',
                                'Users can sign in with Google OAuth, verify their email address, and share their itineraries with others. The interface is trilingual (Hungarian, English and German), and admins can export and import data.',
                                'The backend is built with Python and FastAPI on top of PostgreSQL, the frontend is written in JavaScript, and everything runs in Docker. The project has a Pytest suite of roughly 500 tests and a GitHub Actions CI pipeline.',
                            ]}
                            images={[
                                { src: thesisMainPage, alt: 'Planventure main page', caption: 'Main page' },
                                { src: thesisPlan, alt: 'AI travel plan view', caption: 'Generated travel plan' },
                                { src: thesisVisited, alt: 'Visited places view', caption: 'Visited places' },
                            ]}
                        />
                    </div>
                    <div className="w-[calc(100vw-3rem)] shrink-0 snap-center md:w-auto md:min-w-0 md:shrink md:snap-align-none">
                        <ProjectCard
                            stack="react native · typescript · node.js · postgresql · docker"
                            title="Vinted helper"
                            description="An inventory and profit tracker for second-hand clothing resellers."
                            details={[
                                'Vinted helper is a mobile app for people who resell second-hand clothes. It tracks your inventory with photos, shows the profit per item, and supports bundles with automatic price splitting.',
                                'The backend is a Fastify REST API with JWT authentication on PostgreSQL, and the app is built with React Native and TypeScript. Everything runs in Docker.',
                                'The "Buy check" feature identifies an item from photos and recommends whether it is worth buying, based on online prices and your own sales history.',
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
