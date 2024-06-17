import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="" className="home__socials-link" target="_blank">
            <FaLinkedin />
            </a>

            <a href="" className="home__socials-link" target="_blank">
                <FaGithub />
            </a>
        </div>
    )
}

export default HeaderSocials