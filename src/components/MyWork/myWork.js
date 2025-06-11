import React from "react";
import "./myWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const MyWork = () => {
    return (
        <div id="projects">
            <section id="skills">
                {/* <span className="skill-title">My Work </span> */}
                <div className="contact-title">
                    <h1>My Work</h1>
                    <img src={theme_pattern} alt="Theme" />
                </div>

                <div className="skillBars">
                    <div className="skillBar">
                        {/* <img src={UIDesign} alt="UIDesign" className="skillBarImg" /> */}
                        <div className="skillBarText-work">
                            <h2>News Monkey Web Application using ReactJS </h2>
                            <p>Engineered a ReactJS web app using HTML, CSS and JavaScript to dynamically display personalized new content via NEWS API by using React Hooks, Props and React-Router-Dom, showcasing expertise in front-end development and API integration.</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        {/* <img src={webdesign} alt="webdesign" className="skillBarImg" /> */}
                        <div className="skillBarText-work">
                            <h2>Medical Chatbot using GenAI</h2>
                            <p>Developed an AI-powered medical chatbot using Generative AI and LangChain to deliver accurate, context-aware health responses. Integrated a Flask-based frontend for real-time interactions with a secure and scalable backend.
                            </p>
                        </div>
                    </div>
                    <div className="skillBar">
                        {/* <img src={webdesign} alt="webdesign" className="skillBarImg" /> */}
                        <div className="skillBarText-work">
                            <h2>Frontend Developer Internship - Pravyuha Tech Solutions LLP </h2>
                            <ul>
                                <p><li>Created scalable admission dashboards and web applications using React.js for a school-serving SaaS platform, allowing for real-time student and admissions status updates.</li></p>
                                <p><li>Increased system responsiveness by 35% by integrating more than 50 RESTful APIs to provide real-time synchronization of admissions data, staff and student data, and notifications.</li></p>
                                <p><li>Reduced page load times by 90% through advanced performance strategies: lazy loading, code splitting, and asset optimization.</li></p>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyWork;