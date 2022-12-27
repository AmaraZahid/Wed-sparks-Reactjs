import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Hero7 from '../../components/hero7/hero7';

import PartnerSection from '../../components/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import BlogSection3 from '../../components/BlogSection3/BlogSection3';
import PortfolioSectionS3 from '../../components/PortfolioSectionS3/PortfolioSectionS3';
import EventSection3 from '../../components/EventSection3/EventSection3';
import VideoSection from '../../components/VideoSection';
import vimg from '../../images/cta5.jpg'



const HomePage7 = () => {

    return (
        <Fragment>
            <Navbar2 />
            <Hero7 />
            
            <VideoSection vimg={vimg} vClass={'wpo-video-section-s3'}/>
            <PortfolioSectionS3 />
            <PartnerSection pClass={'pt-120'}/>
            <EventSection3 />
            <BlogSection3 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage7;