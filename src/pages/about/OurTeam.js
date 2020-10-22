import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import WhoWeAreSeven from "../../components/WhoWeAre/WhoWeAreSeven";
import OurSkillsTwo from "../../components/OurSkills/OurSkillsTwo";
import CounterOne from "../../components/Counters/CounterOne";
import OurServicesThree from "../../components/OurServices/OurServicesThree";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import TestimonialsTwo from "../../components/Testimonials/TestimonialsTwo";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";

const AboutUs = () => (
  <Loader>
   <ScrollToTopOnMount/>
    <HeaderOne />
    <PageTitleAbout
      // title="About Tostem"
      // tagline=""
      image=""
    />
   <TestimonialsTwo 
      title="Our Team"
      tagline=""
    />
    <FooterOne />
  </Loader>
);

export default AboutUs;
