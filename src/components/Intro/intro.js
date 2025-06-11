import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import profileImg from '../../assets/profile_img.svg';
import { Element } from 'react-scroll';


const Intro = () => {
    return (

        //         <div id="home" className="hero">
        //             <img src={profileImg} alt="Profile" />
        //             <h1><span>I'm Hari Kumar,</span> Frontend Developer</h1>
        //             <p>I am a skilled website designer with experience in creating visually appealing and user friendly websites.</p>
        //             <div className="hero-action">
        //                 <div className="hero-connect">Connect With Me</div>
        //                 <div className="hero-resume">My Resume</div>
        //             </div>
        //         </div>

        <Element name="home">
            <div className="hero">
                <img src={profileImg} alt="Profile" />
                <h1><span>I'm Hari Kumar,</span> Frontend Developer</h1>
                <p>I am a skilled website designer with experience in creating visually appealing and user friendly websites.</p>
                <div className="hero-action">
                    <div className="hero-connect"><Link
                        className="anchor-link"
                        to="contact"
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        Connect With Me
                    </Link></div>
                    {/* <div className="hero-resume">My Resume</div> */}
                    <div className="hero-resume">
                        <a
                            href="/Seela_Hari_Kumar.pdf"
                            download="Seela_Hari_Kumar.pdf"
                            // className="resume-download-link"
                            style={{ color: "white" }}
                        >
                            My Resume
                        </a>
                    </div>
                </div>
            </div>
        </Element>



    )
}

export default Intro;




