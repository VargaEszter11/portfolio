import React from 'react';
import '../index.css';

function Experience() {
    return (
        <div id="experience" className="px-8 py-10 max-w-6xl mx-auto">
            <h2 className="font-mono text-offwhite text-2xl font-medium">
                Experience
            </h2>
            <div className="mt-8 space-y-8">
                <div className="border-l-2 border-teal/40 pl-6">
                    <p className="font-mono text-sm text-muted">
                        {'2023. 09. - present'}
                    </p>
                    <h3 className="font-mono text-offwhite text-lg font-medium mt-1">
                        {'Duális képzés'}
                    </h3>
                    <p className="font-mono text-teal text-sm mt-1">
                        {'Shiwaforce.com Zrt.'}
                    </p>
                    <p className="font-mono text-muted text-sm mt-3">
                        {'My work ranges from small Java applications to AI integrations and internal tooling — automating repetitive tasks and building websites where needed.'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience