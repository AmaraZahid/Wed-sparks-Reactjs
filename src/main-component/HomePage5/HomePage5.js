import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Hero5 from '../../components/hero5/hero5';
import PartnerSection from '../../components/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import PortfolioSectionS2 from '../../components/PortfolioSectionS2/PortfolioSectionS2';
import EventSection2 from '../../components/EventSection2/EventSection2';
import VideoSection from '../../components/VideoSection';
import vimg from '../../images/cta3.jpg'



const HomePage5 = () => {

    return (
        <Fragment>
            <Navbar2 />
            <Hero5 />
            <VideoSection vimg={vimg} vClass={'wpo-video-section-s3'}/>
            <PortfolioSectionS2 prClass={'pb-0'} />
            <PartnerSection />
            <EventSection2 />
            <BlogSection2 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage5;