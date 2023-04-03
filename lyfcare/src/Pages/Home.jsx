
import React from 'react'
import Navbar from '../Components/Navbar'
import CaptionCarousel from "../Components/CaptionCarousel";
import Footer from '../Components/Footer';
import MidSection from './../Components/MidSection';
import ShopCategory from '../Components/ShopCategory';
import BrandFe from '../Components/BrandFe';




const Home = () => {


  return (
    <div>
      <Navbar />
      <CaptionCarousel />
      <ShopCategory/>
      <MidSection />
      <BrandFe/>
      <Footer />
    </div>
  );
}

export default Home