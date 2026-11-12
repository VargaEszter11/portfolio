import React from 'react';
import '../index.css';

function About() {
    return (
        <div id="about" className="px-6 md:px-8 max-w-6xl mx-auto scroll-mt-24">
            <div className="w-full md:w-2/3">
                <h2 className="font-mono text-offwhite text-2xl font-medium">
                    About me
                </h2>
                <p className="font-mono text-base text-muted mt-4">
                    I'm a fullstack developer finishing my degree, still learning constantly and genuinely enjoying the process
                    - figuring out not just how to build things, but how to build them well, and actually caring about getting the details right.
                </p>
                <p className="font-mono text-base text-muted mt-4">
                    Outside of code, I'm usually planning my next trip, unwinding with a good series and way too much coffee,
                    or knee-deep in a DIY project I probably underestimated and will definitely finish eventually.
                    I'm a climber, I recently started running, and both are a great excuse to step away from the screen and give
                    my body some attention. I also volunteer at the local dog shelter from time to time,
                    which is easily the best way to reset after a long week.
                </p>
            </div>
        </div>
    )
}

export default About