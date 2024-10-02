"use client";
import { useUser } from "@clerk/nextjs";
import TextAnimation from "../../../_components/animations/TextAnimation";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import Cart from "../../../_utils/Cart";
import { useDispatch, useSelector } from "react-redux";
import { addingData } from "../../../_RTK/slices/Cart";
import { reduxObjectBuilder } from "../../../_RTK/reduxObjectBuilder";

function Details({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((data) => data.cart);
  const router = useRouter();
  const { user } = useUser();
  console.log(cart);
  console.log(product);
  const authHandler = () => {
    if (user) {
      // if user authenticated it will does 2 things (update DB) + (update global state)
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: product.data.documentId,
        },
      };
      Cart.postToCart(data)
        .then((res) => {
          //so after posting data. What next? then update useContext to re-render in the header
          console.log(res.data.data, "this data we sent"); //this is the data went to strapi
          // reduxObjectBuilder(ele.id, ele.documentId, ele.products[0])
          dispatch(
            addingData(
              reduxObjectBuilder(
                res.data.data.id,
                res.data.data.documentId,
                product.data
              )
            )
          ); //this code is dispatching action to save data in redux. What dataStructure?
          // reduxObjectBuilder return an print of object
        })
        .catch((error) => console.log(error, "errorr"));
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="text-center md:text-start mx-auto md:mx-0">
      {/*I wrote mx-auto for animation of loading*/}
      {product ? (
        <>
          <h2 className="text-2xl">{product?.data.title}</h2>
          <h4 className="text-[15px] text-gray-400">
            {product?.data.category}
          </h4>
          <p className="mt-5 sm:mt-7">
            {product?.data.desciption[0].children[0].text}
          </p>
          <span className="mt-5 inline-block text-primary text-[20px] md:text-[30px]">
            {product?.price} EGP
          </span>
          <button
            className="flex gap-4 items-center justify-center mt-5 px-5 py-3 rounded-lg bg-primary hover:bg-teal-500 text-gray-600 font-bold w-full text-[15px] sm:text-[21px]"
            onClick={() => authHandler()}
          >
            <ShoppingCart />
            Add to Cart
          </button>
        </>
      ) : (
        <TextAnimation />
      )}
    </div>
  );
}

export default Details;
