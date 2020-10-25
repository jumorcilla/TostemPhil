import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import ProductList from "../../components/Products/ProductList";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";

const AboutUs = () => (
  <Loader>
   <ScrollToTopOnMount/>
    <HeaderOne type="white" />
    <PageTitleAbout
      // title="About Tostem"
      // tagline=""
      image=""
    />
   <ProductList 
      title="Products"
      tagline=""
    />
    <FooterOne />
  </Loader>
);

export default AboutUs;
