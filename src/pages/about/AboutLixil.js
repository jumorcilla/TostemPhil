import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import WhoWeAreSeven from "../../components/WhoWeAre/WhoWeAreSeven";
import OurServicesThree from "../../components/OurServices/LixilServices";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import FooterOne from "../../components/Footer/FooterOne";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
const AboutUs = () => (

  <Loader> 
   <ScrollToTopOnMount/>
    <HeaderOne />
    <PageTitleAbout
      title="Lixil"
       tagline="Link to Good Living"
      image="/Tostem/Lixil_company.png"
    />
    {
      // <WhoWeAreSeven />
    }

   <OurServicesThree 
      title="About Lixil"
      tagline="Link To Good Living"
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
       <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default AboutUs;
