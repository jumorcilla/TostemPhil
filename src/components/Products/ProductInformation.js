import React from "react";

const ProductInformation = ({ title, tagline,serviceImg,description }) => {
  return(
  <section className="light-bg">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
      
      >
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
      </div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7">
        <h2 className="font-700">{title}</h2>
        <h4 className="mt-10 line-height-26 default-color">{tagline}</h4>
        <p className="mt-20">
          {description}
        </p>
        <p className="mt-30">
         
        </p>
      </div>
    </div>
  </section>
)};

export default ProductInformation;
