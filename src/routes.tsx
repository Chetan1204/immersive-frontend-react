import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Aboutus from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Careers from "./pages/Careers/Careers";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BlogPage from "./pages/blog/BlogPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import MobileAppDevelopmentServices from "./components/MobileAppDevelopmentServices/BannerSection";
import WebAppDevelopmentServices from "./components/WebAppDevelopmentServices/Banner";
import BlogChainDevelopment from "./components/BlockChainDevelopment/Banner";
import UIDevelopment from "./components/UIDevelopment/UIBanner";
import EDevelopment from "./components/E-CommerceDevelopment/EBanner";
import Banner from "./components/DedicatedTeam/Banner";
import DigitalBanner from "./components/DigitalMarketing/DigitalBanner";
import WordPressBanner from "./components/WordPressDevelopment/WordPressBanner";
import QualityBanner from "./components/QualityAssurance/QualityBanner";
import FullStackBanner from "./components/FullStackDevelopment/FullStackBanner";
import StaffAugmentationBanner from "./components/StaffAugmentation/StaffAugmentationBanner";
const AppRoutes = () => {
    
  return (
    <>

    <Router>
      
      <Navbar />
      <ScrollToTop />
      <Routes>
       {/* <Route path="/" element={<Home />} /> */}
       <Route path="/" element={<Home />} />
       <Route path="/about-us" element={<Aboutus />} />
       <Route path="/services" element={<Services />} />
       <Route path="/career" element={<Careers />} />
       <Route path="/contact-us" element={<ContactUs />} />
       <Route path="/blog" element={<BlogPage />} />
       <Route path="/blog/:slug" element={<BlogDetailPage />} />

        <Route path="/mobile-app-development" element={<MobileAppDevelopmentServices />} />
        <Route path="/web-app-development" element={<WebAppDevelopmentServices />} />
        <Route path="/blockchain-development" element={<BlogChainDevelopment />} />
         <Route path="/ui-ux-development" element={<UIDevelopment />} />
           <Route path="/ecommerce-development" element={<EDevelopment />} />
           <Route path="/hire-dedicated-developers" element={<Banner />} />
           <Route path="/digital-marketing" element={<DigitalBanner />} />
          <Route path="/wordpress-development" element={<WordPressBanner />} />
          <Route path="/quality-assurance-testing" element={<QualityBanner />} />
          <Route path="/full-stack-development" element={<FullStackBanner />} />
          <Route path="/staff-augmentation" element={<StaffAugmentationBanner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
    </>
  );
};

export default AppRoutes;
