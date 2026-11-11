import React from 'react'
import '../index.css'

function Education() {
    return (
        <div id="education" className="px-6 md:px-8 py-10 max-w-6xl mx-auto">
            <h2 className="font-mono text-offwhite text-2xl font-medium">
                Education
            </h2>
            <div className="mt-8 space-y-8">
                <div className="border-l-2 border-teal/40 pl-4 md:pl-6">
                    <p className="font-mono text-sm text-muted">
                        2023. 09. - 2027. 01.
                    </p>
                    <h3 className="font-mono text-offwhite text-lg font-medium mt-1">
                        BSc Computer Science Engineering
                    </h3>
                    <p className="font-mono text-teal text-sm mt-1">
                        University of Miskolc · Web Technologies
                    </p>
                    <p className="font-mono text-muted text-sm mt-3">
                        Studying in a dual education programme alongside my internship at Shiwaforce. Expected graduation: January 2027.
                    </p>
                </div>

                <div className="border-l-2 border-teal/40 pl-4 md:pl-6">
                    <h3 className="font-mono text-offwhite text-lg font-medium">
                        Cisco Networking Academy
                    </h3>
                    <p className="font-mono text-muted text-sm mt-3">
                        CCNA 1-3 courses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education
