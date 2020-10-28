import React from "react";

const EnquireProduct = () => (
  <div id="respond" className="">
    <form method="post" id="form-comments" className="comment-form">
    
      <div className="row-form row">
        <div className="col-form col-md-12">
          <div className="form-group">
            <p className="light-color">Email Address</p>
            <input
              name="author"
              type="text"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
        </div>
        
      </div>
        <div className="row-form row">
        <div className="col-form col-md-12">
          <div className="form-group">
            <p className="light-color">Contact Number</p>
            <input
              name="author"
              type="text"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
        </div>
        
      </div>
      <p className="form-submit">
        <input
          name="submit"
          type="submit"
          id="submit-btn"
          className="btn btn-color btn-white btn-square"
          value="Enquire Now"
        />
       
      </p>
       
    </form>
  </div>
);

export default EnquireProduct;
