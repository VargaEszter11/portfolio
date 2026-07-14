import React from 'react';
import '../index.css';

function Skills() {
    return (
        <div id="skills" className="px-8 py-10 max-w-6xl mx-auto">
            <h2 className="font-mono text-offwhite text-2xl font-medium">
                Skills
            </h2>
            <div className="grid grid-cols-3 gap-8 mt-8">
                <div className="border border-white/10 rounded-md p-5 bg-white/[0.02]">
                    <p className="font-mono text-teal text-sm">
                        <span className="text-muted">const</span> frontend = [
                    </p>
                    <p className="font-mono text-offwhite text-sm pl-4 mt-1">
                        'react',<br />
                        'tailwind',<br />
                        'javascript',<br />
                        'html',<br />
                        'css',<br />
                        'angular'
                    </p>
                    <p className="font-mono text-teal text-sm">]</p>
                </div>
                <div className="border border-white/10 rounded-md p-5 bg-white/[0.02]">
                    <p className="font-mono text-teal text-sm">
                        <span className="text-muted">const</span> backend = [
                    </p>
                    <p className="font-mono text-offwhite text-sm pl-4 mt-1">
                        'java',<br />
                        'python',<br />
                        'C#'
                    </p>
                    <p className="font-mono text-teal text-sm">]</p>
                </div>
                <div className="border border-white/10 rounded-md p-5 bg-white/[0.02]">
                    <p className="font-mono text-teal text-sm">
                        <span className="text-muted">const</span> design = [
                    </p>
                    <p className="font-mono text-offwhite text-sm pl-4 mt-1">
                        'figma'
                    </p>
                    <p className="font-mono text-teal text-sm">]</p>
                </div>
            </div>
        </div>
    )
}

export default Skills