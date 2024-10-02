/*
This client to display the fetching data from the server parent
like this 
<Server> //this parent file to fetch the send the data as a props
<Client/>  //this file to display
</Server>
*/
"use client";

import Banner from "./Banner";
import Details from "./Details";
import ProductList from "../../../_components/ProductSection/client-content/ProductList";
import Breadcrumb from "../../../_components/BreadCrumb/Breadcrumb";

function Client({ chosenProduct, similar }) {
  return (
    <div className="mt-5 md:mt-10 px-5 md:px-10">
      <Breadcrumb title={chosenProduct?.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-7 ">
        <Banner product={chosenProduct} />
        <Details product={chosenProduct} />
      </div>
      <div className="py-[30px] sm:py-[50px] ">
        <h2 className="text-center my-5 text-2xl">Similar Products</h2>
        <ProductList products={similar.data} />
      </div>
    </div>
  );
}

export default Client;
