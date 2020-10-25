import React,{useState} from "react";
import Slider from "react-id-swiper";
import "swiper/css/swiper.css";
import dataProductItem from "../../../data/Products/product-detail.json";
import SliderButtons from "../../../elements/SliderButtons/SliderButtons";
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
       <div className="col-md-1">
       </div>

        {
                  dataProductItem.filter(index=>index.id===parseInt(categoryID))
                  .map((item)=>(

                    item.productList.filter(index=>index.detailID===parseInt(productID))
                    .map((product)=>{
                      console.log(product.detailSpecification," ",product.detailName," ",product.detailSpecification)
                      return (
                  <div className="col-md-5 grey-bg">
                      <h2>{product.detailName}</h2>
                      <h3 className="grey">
                     
                      </h3>
                      <div className="single-product-des" style={{marginTop:"10px"}}>
                        <h5>Product Desription</h5>
                        <p>
                          {product.detailDescription}
                        </p>
                      </div>
                     
                      <div className="product-fabric-detail">
                        <h5>Product Specification</h5>
                        {product.detailSpecification}
                      </div>
                    </div>

                        )
                    
                    })
                  ))
                }



      
      </div>

    </>
  );
};

export default ProductSingle;
