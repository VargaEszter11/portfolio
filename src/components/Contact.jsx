import React from 'react';
import '../index.css';
import { Mail, ExternalLink } from 'lucide-react';

function Contact() {
    return (
        <div id="contact" className="px-6 md:px-8 py-14 md:py-20 max-w-6xl mx-auto">
            <div className="w-full md:w-2/3">
                <h2 className="font-mono text-offwhite text-2xl font-medium">
                    Get in touch
                </h2>
                <p className="font-mono text-base text-muted mt-2">
                    Always happy to chat about travelling, dogs, or good climbing routes.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                    <a href="mailto:varga.eszter1111@gmail.com" className="flex items-center gap-2 font-mono text-offwhite px-4 py-2 rounded-md">
                        <Mail size={18} />
                        email
                    </a>
                    <a href="https://github.com/VargaEszter11" className="flex items-center gap-2 font-mono text-offwhite px-4 py-2 rounded-md">
                        <ExternalLink size={18} />
                        github
                    </a>
                    <a href="https://www.linkedin.com/in/varga-eszter-36767a362/" className="flex items-center gap-2 font-mono text-offwhite px-4 py-2 rounded-md">
                        <ExternalLink size={18} />
                        linkedin
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact