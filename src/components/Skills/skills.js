import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skills = () => {
    return (
        <div id="portfolio">
            <section id="skills">
                {/* <span className="skill-title">What I do </span> */}
                <div className="contact-title">
                    <h1>What I do</h1>
                    <img src={theme_pattern} alt="Theme" />
                </div>
                <span className="skillDesc">
                    I am a passionate and skilled UI developer focused on crafting intuitive, responsive, and visually engaging user interfaces. I combine creative design with clean, efficient code to deliver seamless user experiences.
                </span>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>UI/UX Design</h2>
                            <p>Crafting intuitive and engaging digital experiences through thoughtful UI/UX design.</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <img src={webdesign} alt="webdesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Web Design</h2>
                            <p>Designing visually stunning and user-friendly websites that deliver seamless online experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills;