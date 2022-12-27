import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import HomePage5 from '../HomePage5/HomePage5';
import HomePage6 from '../HomePage6/HomePage6';
import HomePage7 from '../HomePage7/HomePage7';
import HomePage8 from '../HomePage8/HomePage8';
import HomePage9 from '../HomePage9/HomePage9';
import AboutPage from '../AboutPage/AboutPage';

import SeviceSinglePage from '../SeviceSinglePage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';

import PortfolioGridPage from '../PortfolioGridPage/PortfolioGridPage';
// import PortfolioMasonaryPage from '../PortfolioMasonaryPage/PortfolioMasonaryPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import BlogPage from '../BlogPage/BlogPage';
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft';
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull';
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide';
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth';
import ContactPage from '../ContactPage/ContactPage';
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'
import GalleryPage from '../GalleryPage/GalleryPage';
import PlannerPage from '../PlannerPage/PlannerPage';
import ServicePage from '../ServicePage/ServicePage';
import ServicePageS2 from '../ServicePageS2/ServicePageS2';
import ServicePageS3 from '../ServicePageS3/ServicePageS3';

import ErrorPage from '../ErrorPage/ErrorPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='home2' element={<HomePage2 />} />
          <Route path='home3' element={<HomePage3 />} />
          <Route path='home4' element={<HomePage4 />} />
          <Route path='home5' element={<HomePage5 />} />
          <Route path='home6' element={<HomePage6 />} />
          <Route path='home7' element={<HomePage7 />} />
          <Route path='home8' element={<HomePage8 />} />
          <Route path='home9' element={<HomePage9 />} />
          <Route path='about' element={<AboutPage />} />
        

          <Route path='gallery' element={<GalleryPage />} />
          <Route path='planner' element={<PlannerPage />} />
          <Route path='service' element={<ServicePage />} />
          <Route path='service-s2' element={<ServicePageS2 />} />
          <Route path='service-s3' element={<ServicePageS3 />} />
          <Route path='service-single/:id' element={<SeviceSinglePage />} />
          <Route path='team-single/:id' element={<TeamSinglePage />} />

          
          <Route path='/portfolio-grid' element={<PortfolioGridPage />} />
          {/* <Route path='/portfolio-masonary' element={<PortfolioMasonaryPage />} /> */}
          <Route path='/blog-single/:id' element={<BlogDetails/>} />
          <Route path='/blog-single-left-sidebar/:id' element={<BlogDetailsLeftSiide/>} />
          <Route path='/blog-single-fullwidth/:id' element={<BlogDetailsFull/>} />
          <Route path='/blog' element={<BlogPage/>} />
          <Route path='/blog-left-sidebar' element={<BlogPageLeft/>} />
          <Route path='/blog-fullwidth' element={<BlogPageFullwidth/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/404' element={<ErrorPage/>} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
