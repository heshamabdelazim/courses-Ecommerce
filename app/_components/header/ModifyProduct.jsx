"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

function ModifyProduct() {
  const router = useRouter();
  const cart = useSelector((data) => data.cart);
  console.log(cart);
  return (
    <div className="cart absolute top-[100%] left-[10%] right-[10%]  md:left-[60%] flex flex-col justify-between md:min-h-[10rem] md:w-[250px] lg:w-[350px] p-4 bg-gray-300">
      {cart.length > 0 ? (
        <ul className=" cart flex md:flex-col pb-4 gap-2 md:gap-7 mb-4 md:h-[200px] overflow-auto">
          {cart.map((ele) => (
            <li key={ele.id} className="flex gap-6 min-w-[170px] ">
              <div className="cart relative hidden lg:block  md:w-[110px] md:h-[90px]">
                <Image
                  src={ele?.dataCame.banner[0].url}
                  className="rounded"
                  fill
                />
              </div>
              <div className="cart flex-[2] flex flex-col justify-around ">
                <h4 className="text-base md:text-lg line-clamp-1 ">
                  {ele?.dataCame.title}
                </h4>
                <p className="text-[12px] text-gray-800">
                  {ele?.dataCame.category}
                </p>
                <p className="text-[12px] text-gray-800">
                  Price: {ele?.dataCame.price} EGP
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="flex-1 flex justify-center items-center text-[3rem] text-gray-100">
          Empty
        </h3>
      )}

      <button
        className="text-center w-[100%] bg-teal-400 text-white font-bold py-2"
        onClick={() => router.push("/selected")}
      >
        More Details
      </button>
    </div>
  );
}

export default ModifyProduct;
