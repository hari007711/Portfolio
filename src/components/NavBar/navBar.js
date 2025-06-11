import React, { useRef, useState } from "react";
import './navBar.css';
import logo from '../../assets/Hlogo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import underLine from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuOpen from "../../assets/menu_open.svg";
import menuClose from "../../assets/menu_close.svg";

const NavBar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px"
    }

    return (
        // <nav className="navbar">
        //     <img src={logo} alt="logo" className="logo"/>
        //     <div className="desktopMenu">
        //         <Link className="desktopMenuListItem">Home</Link>
        //         <Link className="desktopMenuListItem">About</Link>
        //         <Link className="desktopMenuListItem">Portfolio</Link>
        //         <Link className="desktopMenuListItem">Projects</Link>

        //     </div>
        //     <button className="desktopMenuBtn">
        //         <img src={contactImg} alt="desktopMenuImg" className="desktopMenuImg" />Contact Me
        //     </button>
        // </nav>


        <div className="navbar">
            <img style={{ height: "70px" }} src={logo} alt="logo" />
            <img src={menuOpen} onClick={openMenu} alt="Open" className="nav-mob-open" />

            {/* <h1>Hari</h1> */}
            {/* <ul className="nav-menu">
                <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underLine} alt="Underline" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underLine} alt="Underline" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#projects"><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink>{menu === "projects" ? <img src={underLine} alt="Underline" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#portfolio"><p onClick={() => setMenu("portfolio")}>Protfolio</p></AnchorLink>{menu === "portfolio" ? <img src={underLine} alt="Underline" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underLine} alt="Underline" /> : <></>}</li>
            </ul> */}
            <ul ref={menuRef} className="nav-menu">
                <img src={menuClose} onClick={closeMenu} alt="Open" className="nav-mob-close" />
                <li>
                    <Link
                        className="anchor-link"
                        to="home"
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={() => setMenu("home")}
                    >
                        Home
                    </Link>
                    {menu === "home" && <img src={underLine} alt="Underline" />}
                </li>
                <li>
                    <Link
                        className="anchor-link"
                        to="about"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={() => setMenu("about")}
                    >
                        About Me
                    </Link>
                    {menu === "about" && <img src={underLine} alt="Underline" />}
                </li>
                <li>
                    <Link
                        className="anchor-link"
                        to="projects"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={() => setMenu("projects")}
                    >
                        Projects
                    </Link>
                    {menu === "projects" && <img src={underLine} alt="Underline" />}
                </li>
                <li>
                    <Link
                        className="anchor-link"
                        to="portfolio"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={() => setMenu("portfolio")}
                    >
                        Portfolio
                    </Link>
                    {menu === "portfolio" && <img src={underLine} alt="Underline" />}
                </li>
                <li>
                    <Link
                        className="anchor-link"
                        to="contact"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={() => setMenu("contact")}
                    >
                        Contact
                    </Link>
                    {menu === "contact" && <img src={underLine} alt="Underline" />}
                </li>
                {/* Repeat for other sections */}
            </ul>

            <div className="nav-connect">
                <Link
                    className="anchor-link"
                    to="contact"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={() => setMenu("contact")}
                >
                    Connect With Me
                </Link></div>

        </div>
    )
}

export default NavBar;