import React from "react";
import hero1 from '../../images/slider/s1.jpg'
import hero2 from '../../images/slider/s2.jpg'
import hero3 from '../../images/slider/s3.jpg'



const Hero4 = () => {
    return (

        <section className="wpo-static-hero">
            <div className="container-fluid">
                <div className="wpo-hero-date">
                    <h2>Esabella & William</h2>
                    <p>We Are Getting Married November 15,2022</p>
                </div>
                <div className="wpo-hero-img-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wpo-hero-img">
                                <img src={hero1} alt=""/>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wpo-hero-img">
                                <img src={hero2} alt=""/>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wpo-hero-img">
                                <img src={hero3} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero4;