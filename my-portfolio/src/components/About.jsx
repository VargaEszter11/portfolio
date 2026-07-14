import React from 'react';
import '../index.css';

function About() {
    return (
        <div id="about" className="px-8 max-w-6xl mx-auto">
            <div className="w-2/3">
                <h2 className="font-mono text-offwhite text-2xl font-medium">
                    About me
                </h2>
                <p className="font-mono text-base text-muted mt-4">
                    I'm a fullstack developer finishing my degree, still learning constantly and genuinely enjoying the process
                    — figuring out not just how to build things, but how to build them well, and actually caring about getting the details right.
                    I care more about understanding the why behind a bug than just making it disappear.
                </p>
                <p className="font-mono text-base text-muted mt-4">
                    Outside of code, I'm usually planning my next trip, unwinding with a good series and way too much coffee,
                    or knee-deep in a DIY project I probably underestimated and will definitely finish eventually.
                    I also try to make time for sports when I can, mostly as an excuse to step away from the screen and remember
                    my body does other things besides type. It's a decent balance, most days.
                </p>
            </div>
        </div>
    )
}

export default About