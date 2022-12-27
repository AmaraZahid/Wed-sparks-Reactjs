import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import About from '../../components/about/about';
import BannerSec from '../../components/BannerSec/BannerSec';
import FunFact from '../../components/FunFact/FunFact';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/Navbar/Navbar'
import PartnerSection from '../../components/PartnerSection';

import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import TeamSection from '../../components/TeamSection/TeamSection';


import Footer from '../../components/footer/Footer';
import BlogSection from '../../components/BlogSection/BlogSection';



const HomePage = ({ addToCart, addToWishList }) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const addToWishListProduct = (product) => {
        addToWishList(product);
    };

    const products = productsArray

    return (
        <Fragment>
            <Navbar />
            <Hero />
            <About />
            <ServiceSection pbClass={'pt-0'}/>
            <FunFact />
            <ProjectSection />
            <BannerSec />
            <TeamSection />
            <PartnerSection />
            {/* <Product
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            /> */}
            
            
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default connect(null, { addToCart, addToWishList })(HomePage);