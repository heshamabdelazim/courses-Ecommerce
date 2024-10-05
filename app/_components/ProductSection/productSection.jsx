import { Suspense } from "react";
import ProductApis from "../../_utils/ProductApis";
import Client from "./client-content/Client";

async function ProductSection() {
  /*
    This component was client side because of using dispatch and other hooks
    but I didn't use NEXT for pre-fetching and caching data
    So This component is server component that include fetching + a client component 
    so NOTE: to work in NEXT, Try to make all parent components Server component
    like this 
      <Server>  //here for fetching and stuff
        <Client/>  //here to display and interactivity
      </Server>
  */

  let data;
  try {
    const response = await ProductApis.getLatestProducts(); //the response of axios has {meta, data} so we will get our data
    data = response.data; //now you got the data you can use
  } catch (error) {
    console.error(error);
  }

  return <Client data={data} />;
}

export default ProductSection;
