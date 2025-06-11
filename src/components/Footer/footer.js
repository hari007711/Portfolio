import React from "react";
import "./footer.css";
import footer_logo from "../../assets/Hlogo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img style={{ height: "70px" }} src={footer_logo} alt="Logo" />
                    <p>I am a frontend developer with 10 Months of Internship experience at a startup company called Pravyuha Tech Solution.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="user" />
                        <input type="emai" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2025 Hari Kumar. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of service</p>
                    <p>Privary Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;