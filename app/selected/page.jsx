"use client";
import React from "react";
import Image from "next/image";
import style from "./payment.module.css";
import { GraduationCap, Trash } from "lucide-react";
import Cart from "../_utils/Cart";
import EmptyCart from "../_components/EmptyCart";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteAProduct } from "../_RTK/slices/Cart";
import { totalPrice } from "../_utils/some-functions";

function Payment() {
  let dispatch = useDispatch();
  const cart = useSelector((data) => data.cart);

  const deleteCourse = (product) => {
    Cart.deleteFromCart(product.theProductID)
      .then((res) => {
        console.log(res);
        dispatch(deleteAProduct(product));
        // // console.log(res); //deleted id product
        // setCart((old) => old.filter((ele) => ele.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const startSwal = (courseToDelete) =>
    Swal.fire({
      title: "Comfirm Delete?",
      text: courseToDelete.dataCame.title,
      imageUrl: courseToDelete.dataCame.banner[0].url,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: courseToDelete.dataCame.title,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(courseToDelete, "courseTodeelet");
        deleteCourse(courseToDelete);
        Swal.fire(courseToDelete.dataCame.title, "deleted!", "success");
      }
    });

  //========this will be used in a className of tailwind styles (many times)
  const contentStyle =
    "h-32 border-b-2 border-primary border-solid font-bold flex justify-center items-center text-[12px] sm:text-base";
  //========

  return (
    <div className="px-4 pt-3 min-h-[80vh]">
      {cart.length > 0 ? (
        <>
          <h2 className="text-2xl sm:text-4xl flex gap-2 justify-center items-center mt-6">
            <GraduationCap size={46} fill="#08d9d6" strokeWidth={1} />
            Selected Courses
          </h2>

          {/* starting grid here */}

          <div className={`${style.parent}`}>
            <h3 className=" w-11 text-[14px] sm:text-lg font-bold">No.</h3>
            <h3 className=" w-[5rem] sm:w-[6rem] text-[14px] sm:text-lg text-center font-bold ">
              Order ID
            </h3>
            <h3 className=" text-[14px] sm:text-lg text-center font-bold">
              Course Name
            </h3>
            <h3 className=" hidden sm:flex sm:text-lg text-center font-bold">
              Course Image
            </h3>
            <h3 className=" w-[3.4rem] text-[14px] sm:text-lg font-bold">
              Price
            </h3>
            <h3 className=" w-[2.4rem] sm:w-[3.4rem]"></h3>

            {/* items-center justify-center bg-blue-300 flex k */}
            {cart.map((ele, ind) => (
              <>
                <p className={`${contentStyle}`}>{ind + 1}</p>
                <p className={`${contentStyle}`}>{ele.id_of_row_in_DB}</p>
                <p className={`${contentStyle} text-center`}>
                  {ele.dataCame.title}
                </p>
                <div className="h-32 border-b-2 border-primary border-solid hidden justify-center items-center  sm:flex">
                  <Image
                    src={ele?.dataCame.banner[0].url}
                    alt="course image"
                    width={150}
                    height={100}
                    className="rounded"
                  />
                </div>
                {/* <p className="h-32 border-b-2 border-primary border-solid flex justify-center items-center text-[12px] sm:text-base"> */}
                <p className={`${contentStyle}`}>{ele?.dataCame.price}</p>
                <p
                  className={`${contentStyle} cursor-pointer hover:text-red-400 transition`}
                  onClick={() => startSwal(ele)}
                >
                  <Trash />
                </p>
              </>
            ))}
          </div>
          <strong className=" text-right text-lg my-6 block">
            Total Price: {totalPrice(cart)} EGP
          </strong>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Payment;
