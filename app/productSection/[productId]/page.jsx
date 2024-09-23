"use client";
import Breadcrumb from "../../_components/BreadCrumb/Breadcrumb";
import ProductApis from "../../_utils/ProductApis";
import React, { useEffect, useState } from "react";
import Banner from "./_components/Banner";
import Details from "./_components/Details";
import ProductList from "../../_components/ProductSection/ProductList";
import { usePathname } from "next/navigation";

function Product({ params }) {
  // Hoocks
  let [product, setProduct] = useState();
  let [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    gettingAProduct_();
  }, []);

  const gettingAProduct_ = async () => {
    const res = await ProductApis.getAProduct(params.productId);
    console.log(res);
    setProduct(res.data.data);
    gettingSimilarProducts_(res.data.data);
    // Just note, You can NOT write this code gettingSimilarProducts_(product)
  };

  const gettingSimilarProducts_ = async (pro) => {
    try {
      const res = await ProductApis.getSimilarProducts(pro.category);
      setSimilarProducts(res.data.data);
    } catch (err) {
      console.log(await ProductApis.getSimilarProducts());
    }
  };

  // getting pathname then drill it as props to BreadCrumb for navigation
  const path = usePathname();

  return (
    <div className="mt-5 md:mt-10 px-5 md:px-10">
      <Breadcrumb title={product?.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-7 ">
        <Banner product={product} />
        <Details product={product} />
      </div>
      <div className="py-[30px] sm:py-[50px] ">
        <h2 className="text-center my-5 text-2xl">Similar Products</h2>
        <ProductList products={similarProducts} />
      </div>
    </div>
  );
}
// http://localhost:1337/api/products?filters[category][$eq]=TECH&populate=*

export default Product;
