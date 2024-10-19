/*
This client contains every thing after fetching
the structure is the following
    ProductSection has 
        <Server>
            <Client/> this is the current file
        </Server>
*/

"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import DropDown from "./DroppDown";
import ProductList from "./ProductList";

function Client({ data }) {
  // let [products, setProducts] = useState();

  const category = useSelector((data) => data.category);
  const dispatch = useDispatch();

  const coursesCategories = () => {
    // This getting all categories of courses then send it to DropDown
    const gettingAllCategories = data?.data.map((ele) => ele.category);
    // now output is ["TECH", "TECH", "TECH", "MARKETING", "MARKETING", "MARKETING"]
    const filtered = new Set(gettingAllCategories);
    return Array.from(filtered);
  };

  const dataRevealed = () => {
    // This function when the user choose some category so this function will filter
    if (category == "all") {
      return data?.data;
    }
    const filteredData = data?.data.filter(
      (ele, ind) => ele.category == category
    );
    return filteredData;
  };

  return (
    <div id="productSection">
      <div className="flex justify-center items-center gap-2 md:gap-3 lg-gap-4 ">
        <h2 className="py-6 sm:py-12 text-center text-2xl lg:text-4xl font-bold">
          Courses Section
        </h2>
        <DropDown list={coursesCategories()} />
        {/* when the user chose a category it will update here again */}
      </div>
      <ProductList products={dataRevealed()} />
    </div>
  );
}

export default Client;
