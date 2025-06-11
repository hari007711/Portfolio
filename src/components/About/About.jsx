import React from "react";
import './About.css';
import themePattern from '../../assets/theme_pattern.svg';
import profile from '../../assets/profile_img.jpg';

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={themePattern} alt="ThemePattern" className="theme" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img className="heroImage" src={profile} alt="profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a skilled website designer with experience in creating I am a skilled website designer with experience in creating</p>
                        <p>I am a skilled website designer with experience in creating I am a skilled website designer with experience in creating</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Javascript</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React Js</p><hr style={{ width: "60%" }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="about-achievements"></div> */}
        </div>
    )
}

export default About;