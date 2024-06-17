import React from "react";
import "./home.css"
import Me from "../../assets/Dev.png"
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home_img" />
                <h1 className="home__name">Gabriel Gonzalez</h1>
                <span className="home__education">I' am a full stack developer</span>
           
                <HeaderSocials/>

                <a href="#contact" className="btn">Hire me</a>

                <ScrollDown/>
            </div>

        </section>
    )
}

export default Home