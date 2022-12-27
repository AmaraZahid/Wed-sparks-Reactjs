import React from "react";
import LocationMap from "./Modal";

const Hero9 = () => {
    return (

        <section className="static-hero-s4">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>Ali & Amara</h2>
                                        <p>We Are Getting Married Nov 15,2022</p>
                                        <ul>
                                            <li>Monday, 12 november. 2022 <br />
                                                1:00 PM – 2:30 PM </li>
                                            <li>I-10/2, street 5, Islamabad</li>
                                            <li>+92 234-567-8910</li>
                                            <li><LocationMap /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero9;