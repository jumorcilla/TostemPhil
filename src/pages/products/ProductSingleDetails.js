import React, {useState, useEffect} from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import ProductSingle from "../../components/Products/ProductInformationDetails/ProductSingle";
import FooterOne from "../../components/Footer/FooterOne";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductSingleDetails = () => {
 let query = useQuery();
 const [categoryID, setcategoryID] = useState('1');
 const [productID, setproductID] = useState('1');

 useEffect(() => {
  setcategoryID(query.get("categoryID"));
  setproductID(query.get("productID"));

 }, [query.get("categoryID"), query.get("productID")]);

return (
  <Loader>
   <ScrollToTopOnMount/>
      <HeaderOne />
     <PageTitleAbout
      title=""
       tagline=""
      
      
      image=""
    />
    <section className="light-bg" >
      <div className="container">
        <ProductSingle categoryID ={categoryID} productID={productID}/>
      </div>
    </section>
    <FooterOne />
  </Loader>
)
};

export default ProductSingleDetails;
