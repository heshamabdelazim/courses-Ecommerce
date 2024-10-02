// "use client";
import Breadcrumb from "../../_components/BreadCrumb/Breadcrumb";
import ProductApis from "../../_utils/ProductApis";
import Client from "./client-content/Client";

async function Product({ params }) {
  let chosenProduct, similarProducts;

  try {
    //2 fetches here //first one fetching the product itself //second for fetching the products of same category
    const response = await ProductApis.getAProduct(params.productId);
    chosenProduct = response.data;
    const secondResponse = await ProductApis.getSimilarProducts(
      chosenProduct?.data.category
    );
    similarProducts = secondResponse.data;
  } catch (err) {
    console.log(err);
  }
  return <Client chosenProduct={chosenProduct} similar={similarProducts} />;
}

// getting pathname then drill it as props to BreadCrumb for navigation

// http://localhost:1337/api/products?filters[category][$eq]=TECH&populate=*

export default Product;
