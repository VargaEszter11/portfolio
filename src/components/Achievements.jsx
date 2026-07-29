import React from 'react'
import '../index.css'
import { ExternalLink } from 'lucide-react'

function Achievements() {
    return (
        <div id="achievements" className="px-6 md:px-8 py-10 max-w-6xl mx-auto">
            <h2 className="font-mono text-offwhite text-2xl font-medium">
                Achievements
            </h2>
            <div className="mt-8 max-w-2xl border border-white/10 rounded-md p-5 md:p-6 bg-white/2">
                <p className="font-mono text-sm text-muted">2025 / 2026</p>
                <h3 className="font-mono text-offwhite text-lg font-medium mt-1">
                    National Higher Education Scholarship
                </h3>
                <p className="font-mono text-teal text-sm mt-1">
                    University of Miskolc · GEIK
                </p>
                <p className="font-mono text-muted text-sm mt-3">
                    Awarded the Nemzeti Felsőoktatási Ösztöndíj for the 2025/2026 academic year as a Computer Science Engineering student.
                </p>
                <a
                    href="https://geik.uni-miskolc.hu/news.php?id=1280"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-teal text-sm mt-3"
                >
                    faculty announcement
                    <ExternalLink size={14} />
                </a>
            </div>
        </div>
    )
}

export default Achievements
