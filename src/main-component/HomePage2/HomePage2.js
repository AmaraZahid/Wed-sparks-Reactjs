import React, { Fragment } from 'react';

import FunFact from '../../components/FunFact/FunFact';
import Hero2 from '../../components/hero2/hero2';
import Navbar from '../../components/Navbar/Navbar'
import PartnerSection from '../../components/PartnerSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import ServiceSectionS2 from '../../components/ServiceSection2/ServiceSection2';
import Footer from '../../components/footer/Footer';
import BlogSection from '../../components/BlogSection/BlogSection';
import VideoSection from '../../components/VideoSection';
import vimg from '../../images/cta.jpg'



const HomePage2 = () => {

    return (
        <Fragment>
            <Navbar />
            <Hero2 />
            <FunFact fClass={'pt-120'}/>
            <ServiceSectionS2 />
            
          
            <VideoSection vimg={vimg}/>
            <ProjectSection prClass={'pt-120'}/>
            <PartnerSection />
          
            <BlogSection bClass={'pt-0'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage2;