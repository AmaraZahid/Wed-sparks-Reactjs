import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import BannerSec from '../../components/BannerSec/BannerSec';
import TeamSection from '../../components/TeamSection/TeamSection';

import PartnerSection from '../../components/PartnerSection';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About />
            <ServiceSection />
            <FunFact />
            <ProjectSection prClass={'pt-120'} />
            <BannerSec />
            <TeamSection />
   
            <PartnerSection pClass={'section-padding'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default AboutPage;
