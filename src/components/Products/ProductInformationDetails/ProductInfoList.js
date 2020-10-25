import React from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
const ProductInfoList = ({dataTeam,categoryID}) => (
  <section className="white-bg" id="Prod">
    <div className="container">
      <div className="row mt-10 startup-member hover">
        {dataTeam.map((member) => (
          <Link to={`${process.env.PUBLIC_URL}/product-single-detail?categoryID=${categoryID}&productID=${member.detailID}`}>
          <div className="col-md-4 test-shine box-shadow-hover" key={member.detailID}>
            <div className="member text-center">
              <div className="team-member-container">
                <img
                  src= {require(`../../../assets/images${member.img}`)}
                  className="img-responsive"
                  alt="team-01"
                />
                 
              </div>
              <div className="grey-bg pt-20 pb-20 ">
                <h4 className="member-title text-uppercase">{member.detailName}</h4>
          
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ProductInfoList;
