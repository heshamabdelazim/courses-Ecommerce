"use client";
import { useUser } from "@clerk/nextjs";
import TextAnimation from "../../../_components/animations/TextAnimation";
import { ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Cart from "../../../_utils/Cart";
import { CartContext } from "../../../_context/CartContext";

/*
{ 
  "data": {
    "Name": "Restaurant D",
    "Description": [ // uses the "Rich text (blocks)" field type
      {
        "type": "paragraph",
        "children": [
          {
            "type": "text",
            "text": "A very short description goes here."
          }
        ]
      }
    ]
  }
}
*/

function Details({ product }) {
  const { cart, setCart } = useContext(CartContext);
  console.log(product);

  const router = useRouter();
  const { user } = useUser();
  const authHandler = () => {
    if (user) {
      // if user authenticated it will does 2 things (update DB) + (update global state)
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: product.documentId,
        },
      };
      Cart.postToCart(data)
        .then((res) => {
          //so after posting data. What next? then update useContext to re-render in the header
          console.log(res.data.data); //this is the data went to strapi
          setCart((old) => [
            ...old,
            { id: res.data.data.documentId, product: product },
          ]);
        })
        .catch((error) => console.log(error, "errorr"));
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="text-center md:text-start mx-auto">
      {/*I wrote mx-auto for animation of loading*/}
      {product ? (
        <>
          <h2 className="text-2xl">{product?.title}</h2>
          <h4 className="text-[15px] text-gray-400">{product?.category}</h4>
          <p className="mt-5 sm:mt-7">
            {product?.desciption[0].children[0].text}
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
