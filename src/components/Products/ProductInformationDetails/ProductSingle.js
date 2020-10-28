import React,{useState} from "react";
import Slider from "react-id-swiper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "swiper/css/swiper.css";
import dataProductItem from "../../../data/Products/product-detail.json";
import SliderButtons from "../../../elements/SliderButtons/SliderButtons";
import EnquireProduct from "./EnquireProduct"
import ReactWow from "react-wow";
const ProductSingle = ({categoryID,productID}) => {
  const [imageString,setImageString]=useState("");
  const settings = {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
  };

  console.log('wow', categoryID, productID);

  return (
    <>
    <ReactWow animation="fadeLeft" delay="0.1s">
      <div className="row">
        <div className="col-md-6">
          <div className="product-slider">
            <Slider {...settings}>
             
                {
                  dataProductItem.filter(index=>index.id===parseInt(categoryID))
                  .map((item)=>(
                     item.productList.filter(index=>index.detailID===parseInt(productID))
                    .map((product)=>(
                      product.productImageList
                      .map((image)=>{ 
                        return(

                        <div>
                        <img
                            src={require(`../../../assets/images${image.img}`)}
                            className="img-responsive"
                            alt="single-product"
                          />
                        </div>
                          )
                        
                      })
                     ))
                  ))
                }
   
            </Slider>
          </div>
        </div>
       

        {
                  dataProductItem.filter(index=>index.id===parseInt(categoryID))
                  .map((item)=>(

                    item.productList.filter(index=>index.detailID===parseInt(productID))
                     .map((product)=>{
                      return (
                  <div 
                        className="col-md-6" 
                        style={{height:"681px",background:"#0000005c"}}
                    >
                      <h2 style={{
                          paddingTop: "10px"}}>{product.detailName}</h2>
                      <h3 className="grey">
                     
                      </h3>
                      <div style={{borderTop:"1px solid rgb(29 29 29 / 0.15)",
                                   height: "1px",
                                  marginBottom:"7px"}}></div>
                    <Tabs defaultActiveKey={1} className="light-tabs">
                      <TabList  className="nav nav-tabs">
                      <Tab key={1}>
                          <span>Overview</span>
                        </Tab>
                        <Tab key={2}>
                          <span>Description</span>
                        </Tab>
                        <Tab key={3}>
                          <span>Specification</span>
                        </Tab>
                          <Tab key={4}>
                          <span>Enquire</span>
                        </Tab>
                    
                        </TabList>
                            <div style={{borderTop:"1px solid rgb(29 29 29 / 0.15)",
                                   height: "1px",
                                  marginBottom:"7px"}}></div>
                           <div className="tab-content " 
                                style={{textAlign:"justify",
                                        height:"450px"
                                        }}>
                         
                            <TabPanel key={1} className="tab-pane fade in active">
                             <div className="single-product" style={{marginTop:"10px"}}>
                                  <p className="light-color">
                                  {product.detailOverview}
                                   </p>
                                </div>
                            </TabPanel>
                            <TabPanel key={2} className="tab-pane fade in active">
                             <div className="single-product" style={{marginTop:"10px"}}>
                                  <p className="light-color">
                                  {product.detailDescription}
                                   </p>
                                </div>
                            </TabPanel>
                            <TabPanel key={3} className="tab-pane fade in active">
                             <div className="single-product" style={{marginTop:"10px"}}>
                                  <p className="light-color">
                                  {product.detailSpecification}
                                   </p>
                                </div>
                            </TabPanel>

                            <TabPanel key={4} className="tab-pane fade in active">
                             <div className="single-product" style={{marginTop:"10px"}}>
                                  <EnquireProduct/>
                                </div>
                            </TabPanel>
                       
                        </div> 
                                    </Tabs>
                                    <div style={{borderTop:"1px solid rgb(29 29 29 / 0.15)",
                                   height: "1px",
                                  marginBottom:"7px"}}></div>
                                  <div className="tab-content">
              
                            <input
                              name="submit"
                              type="submit"
                              id="submit-btn"
                              className="btn btn-color btn-red btn-square"
                              value="Download Product Catalouge"
                            />
                      
                      </div> 
                    </div>

                        )
                    
                    })
                  ))
                }



   
      </div>
   </ReactWow>
    </>
  );
};

export default ProductSingle;
