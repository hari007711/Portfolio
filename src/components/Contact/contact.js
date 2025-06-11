import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "1c55e7bb-7884-4cc6-9a7b-a108e69c1dea");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
           alert("Email sent Successfully")
        }
    };


    return (
        <div id="contact" className="contact">
            <div className="contact-title newContact">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="Theme" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take new projects so feel free to send me a message about anything that you want me to work on. You can contact anythime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail" /><p>hari0077kumar@gmail.com</p>

                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Mail" /><p>9491495578</p>

                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Mail" /><p>Bangalore, Karnataka, India</p>

                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="">Write you message here</label>
                    <textarea name="message" rows="8" placeholder="Enter you message" />
                    <button type="submit" className="contact-submit">Submit now</button>

                </form>
            </div>


        </div>
    )
}

export default Contact;