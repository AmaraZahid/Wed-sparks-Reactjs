import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Hero4 from '../../components/hero4/hero4';


import PartnerSection from '../../components/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import BlogSection from '../../components/BlogSection/BlogSection';
import PortfolioSection from '../../components/PortfolioSection';
import EventSection from '../../components/EventSection/EventSection';




const HomePage4 = () => {

    return (
        <Fragment>
            <Navbar2 />
            <Hero4 />
            <PortfolioSection prClass={'pb-0'} />
            <PartnerSection />
            <EventSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage4;