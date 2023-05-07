import React from "react";
import profileImage from "../assets/profile-image.jpg";

const Info = () => {
    return (
        <>
            <div className="Info--container">
                <img src={profileImage} alt="Profile Image"/>
                <h1>James Martin</h1>
                <h2>Junior Developer</h2>
                <h3><a href="https://github.com/JamesMartin1998"><i class="fa-brands fa-github"></i>GitHub</a></h3>
            </div>
            <div className="Info--links-container">
                <a href="mailto: jamesandrewmartin1998@hotmail.co.uk"><i class="fa-solid fa-envelope"></i>Email</a>
                <a href="https://www.linkedin.com/in/jamesmartin98/"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </>
    )
}

export default Info;