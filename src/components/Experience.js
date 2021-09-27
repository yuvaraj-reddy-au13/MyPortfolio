import React from "react";

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>aug 2020 - may 2021</h3>
                        <h4>ATTAIN U (INTERNSHIP PROGRAM)</h4>
                        <p>
                            AttainU is a college alternative that teaches
                            students the skills needed for careers in software
                            engineering Learnt To Build a mern stack application
                            and Have done 3 Projects related Web Development
                        </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>may 2021 - present</h3>
                        <h4>FREELANCING</h4>
                        <p>
                            Working on 2 projects related to web development like
                            e-commerce and portfolio for my clients
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
