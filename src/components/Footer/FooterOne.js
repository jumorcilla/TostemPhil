import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";
import FooterCopyright from "./FooterCopyright";
import logoWhite from "../../assets/images/logotostem.png";
import dataForms from "../../data/Footer/app-downloadable-form.json";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoWhite}
                      alt=""
                    />
                  </a>
                </div>
                <p>
                  TOSTEM, which entered into the aluminum window business in 1996,
                  was the last company to penetrate the market. But with full understanding
                  of the needs of joiners, carpenters and builders through its experience in
                  woooden doors and the windows wholesale business, TOSTEM was able to develop
                  products that were competitive with leading manufacturers.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Dowloadable Forms</h5>
                <ul>
                  {dataForms.map((forms,i)=>(
                    <li key={i} >
                    <a key={i} href={forms.link}>{forms.title}</a>
                     </li>
                    ))

                  /*<li>
                    <a href="#!">Themeforest</a>
                  </li>
                  <li>
                    <a href="#!">Audio Jungle</a>
                  </li>
                  <li>
                    <a href="#!">Code Canyon</a>
                  </li>
                  <li>
                    <a href="#!">Video Hive</a>
                  </li>
                  <li>
                    <a href="#!">Envato Market</a>
                  </li>*/}
                </ul>
              </div>
            </div>
             <div className="col-sm-6 col-md-6">
              <div className="widget widget-links">
                <h5 className="widget-title">Signup for Newsletter</h5>
                <div className="input-group">
                <input placeholder="Email Address" type="search"  style={{ height: '48px' }} className="form-control"/>
                <span className="input-group-btn">
                <button className="btn btn-red btn-square" type="button"> Signup</button>
                </span>
                </div>
                </div>
                </div>
            {/*<div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Useful Links</h5>
                <ul>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact-simple.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="service-simple.html">Our Services</a>
                  </li>
                  <li>
                    <a href="term-condition.html">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="career.html">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Contact Us</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href="#!">Park Lane Llandrindod Wells, LD7 9QW</a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="#!">+44 1632 960290</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="#!">helloscoda@gmail.com</a>
                  </li>
                  <li>
                    <i className="icofont icofont-globe"></i>
                    <a href="#!">www.envato.com</a>
                  </li>
                </ul>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </>
);

export default FooterOne;
