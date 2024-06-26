import React from "react";

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">

            
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">20</h3>
                <span className="about__subtitle">Project completed</span>
            </div>
        </div>

         <div className="about__box">

            
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">100</h3>
                <span className="about__subtitle">Cup of cofee</span>
            </div>
        </div>

         <div className="about__box">

            
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">3</h3>
                <span className="about__subtitle">Free badges</span>
            </div>
        </div>
        </div>
    )
}

export default AboutBox