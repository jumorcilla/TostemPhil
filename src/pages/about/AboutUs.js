import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import WhoWeAreSeven from "../../components/WhoWeAre/WhoWeAreSeven";
import OurSkillsTwo from "../../components/OurSkills/OurSkillsTwo";
import CounterOne from "../../components/Counters/CounterOne";
import OurServicesThree from "../../components/OurServices/OurServicesThree";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
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
    <WhoWeAreSeven />
   <OurServicesThree 
      title="About Us"
      tagline="Part of your success"

     />
     { //<OurSkillsTwo 
      //  title="Our Skills"
   //    tagline="We develop big ideas that sell"
   // />
    //   <CounterOne />
    // 
  
      // <OurTeamTwo title="MEET OUR TEAM" tagline="WE ARE STRONGER" />
      //   <TestimonialsOne 
      //     title="Testimonials"
      //     tagline="Happy clients"
      //   />
      //   <ClientsBrand />
      }
    <FooterOne />
  </Loader>
);

export default AboutUs;
