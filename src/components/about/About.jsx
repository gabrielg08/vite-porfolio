import React from "react";
import "./about.css"
import Image from "../../assets/man.svg"
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am Gabriel Gonzalez developer from
                            Dominican Republic. I have rich expirence in infrastructure, also
                            I am good at web building.
                        </p>
                        <a href="" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    Infraestructure
                                </h3>
                                <span className="skills__number">
                                    
                                </span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage infraestructure"></span>
                            </div>
                        </div>
                    
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    Development
                                </h3>
                                <span className="skills__number">
                                    
                                </span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>


                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    Design
                                </h3>
                                <span className="skills__number">
                                    
                                </span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage design"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBox/>
        </section>
    )
}

export default About