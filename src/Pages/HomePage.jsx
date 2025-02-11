import React from "react";

import NavBar from "../component/HomePages/NavBar";
import FeaturedProperty from "../component/HomePages/FeaturedProperty";
import NewProjects from "../component/HomePages/NewProjects";
import AboutOurBrand from "../component/HomePages/AboutOurBrand";
import Testimonials from "../component/HomePages/Testimonials";
import Footer from "../component/HomePages/Footer";

/* Copyright © VikashVerma. */

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <AboutOurBrand />
      <FeaturedProperty />
      <NewProjects />
      <Testimonials />
      <Footer />
    </>
  );
};
export default HomePage;
