import React from "react";
import ContactFormSix from "./ContactFormSix";
import Icofont from "react-icofont";
import Map from "../Maps/Map";

const ContactFour = () =>  (
    <>
      <section className="contact-us white-bg" id="contact">
        <div className="container">
          <div className="clearfix">
            <div className="bg-flex-right col-md-6 map-section">
              <Map />
            </div>
            <div className="col-about-left col-md-6 text-left">
              <h2>Get in Touch</h2>
             
              <ContactFormSix />
            </div>
          </div>
        </div>
      </section>
      <section className="p-0">
        <div className="container-fluid">
          <div className="row row-flex">
            <div className="col-md-4">
              <div className="col-inner spacer dark-bg">
                <div className="text-center white-color">
                  <Icofont icon="google-map" className="font-50px white-icon" />
                  <h2>Office Address</h2>
                  <p>
                    Tostem Philippines, <br />
                    Philippines
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="col-inner spacer gradient-bg">
                <div className="text-center white-color">
                  <Icofont icon="email" className="font-50px white-icon" />
                  <h2>Email Us</h2>
                  <p className="mb-0">email@tostem.com</p>
                  <p>email2@tostem.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="col-inner spacer dark-bg">
                <div className="text-center white-color">
                  <Icofont icon="iphone" className="font-50px white-icon" />
                  <h2>Call Us</h2>
                  <p className="mb-0">(+1) xxx xxx-xxxx</p>
                  <p>(+1) xxx xxx-xxxx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

export default ContactFour;
