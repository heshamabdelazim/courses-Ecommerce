"use client";
import React, { useContext, useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "../../_utils/ProductApis";
import DropDown from "./DroppDown";
import { CartContext } from "../../_context/CartContext";

function ProductSection() {
  let [products, setProducts] = useState();
  const { category, setCategory } = useContext(CartContext);

  useEffect(() => {
    gettingProducts_();
  }, []);

  const gettingProducts_ = async () => {
    try {
      const response = await ProductApis.getLatestProducts(); //the response of axios has {meta, data} so we will get our data
      const data = response.data; //now you got the data you can use
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };
  products && console.log(products.data);
  const coursesCategories = () => {
    // This getting all categories of courses then send it to DropDown
    const gettingAllCategories = products?.data.map((ele) => ele.category);
    // now output is ["TECH", "TECH", "TECH", "MARKETING", "MARKETING", "MARKETING"]
    const filtered = new Set(gettingAllCategories);
    return Array.from(filtered);
  };

  const dataRevealed = () => {
    // This function after the user update the category then useContext updates then the output will be shown
    if (category == "all") {
      return products?.data;
    }
    const filteredData = products?.data.filter(
      (ele, ind) => ele.category == category
    );
    return filteredData;
  };

  console.log(dataRevealed());

  return (
    <div id="productSection">
      <div className="flex justify-center items-center gap-2 md:gap-3 lg-gap-4 ">
        <h2 className="py-6 sm:py-12 text-center text-2xl lg:text-4xl">
          Courses Section
        </h2>
        <DropDown list={coursesCategories()} />{" "}
        {/* when the user chose a category it will update here again */}
      </div>
      <ProductList products={dataRevealed()} />
    </div>
  );
}

export default ProductSection;
