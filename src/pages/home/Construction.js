import React, { useState } from "react";
import Loader from "./../../components/Loader/Loader";
import dataSlider from "../../data/Slider/construction-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import ConstructionSlider from "../../components/Hero/Construction/ConstructionSlider";
import ServicesConstruction from "../../components/Services/Construction/ServicesConstruction";
import GalleryConstruction from "../../components/Gallery/Construction/GalleryConstruction";
import CounterConstruction from "../../components/Counters/Construction/CounterConstruction";
import TeamConstruction from "../../components/Team/Construction/TeamConstruction";
import ContactConstruction from "../../components/ContactUs/Construction/ContactConstruction";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";
import BlogSlider from "../../components/Blog/BlogSlider";
import AboutUsOne from "../../components/AboutUs/AboutUsOne";
import image from "../../assets/images/about-video-img.jpg";
const Construction = () => {
  const [toggler, setToggler] = useState(false);
  return(
  <Loader>
    <HeaderOne />
    <ConstructionSlider data={dataSlider} />
   
    <GalleryConstruction title ="Product Categories"/>
    { /*<CounterConstruction />  <ServicesConstruction  title ="Product Categories"/>*/}
  
   <AboutUsOne
      title="About Our Company"
      textButton="Read more"
      linkButton="!#"
      image={image}
      toggler={toggler}
      setToggler={setToggler}
    >
      <p className="mt-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
        vulputate dolor. Nullam venenatis enim in quam euismod fringilla. Donec
        in risus eget purus mattis varius. Nulla dapibus quis orci et tincidunt.
        Phasellus in rhoncus quam. Fusce a est lacinia, ultricies mi nec, rutrum
        dolor.
      </p>
      <p>
        Donec vehicula cursus metus viverra aliquet Aliquam tincidunt dolor a
        auctor finibus. Sed in sodales magna. Etiam eget velit nec urna
        facilisis fringilla sed eget purus. Ut pulvinar ullamcorper mauris non
        tristique.
      </p>
    </AboutUsOne>
    {/* <TeamConstruction /><ContactConstruction />*/}
     <BlogSlider />
    <ClientsBrand />
    <FooterOne/>
  </Loader>
)};

export default Construction;
