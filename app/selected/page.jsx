"use client";
import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import Image from "next/image";
import style from "./payment.module.css";
import { GraduationCap, Key, Trash } from "lucide-react";
import Cart from "../_utils/Cart";
import EmptyCart from "../_components/EmptyCart";
import Swal from "sweetalert2";

function Payment() {
  const { cart, setCart } = useContext(CartContext);

  const deleteCourse = (id) => {
    Cart.deleteFromCart(id)
      .then((res) => {
        // console.log(res); //deleted id product
        console.log(cart);
        setCart((old) => old.filter((ele) => ele.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const totalPrice = () => {
    let total = 0;
    cart.map((ele) => (total = total + ele.product.price));
    return total.toFixed(2);
  };

  const startSwal = (courseToDelete) =>
    Swal.fire({
      title: "Comfirm Delete?",
      text: courseToDelete.product.title,
      imageUrl: courseToDelete.product.banner[0].url,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: courseToDelete.product.title,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCourse(courseToDelete.id);
        Swal.fire(courseToDelete.product.title, "deleted!", "success");
      }
    });

  return (
    <div className="px-4 pt-3 min-h-[80vh]">
      {cart.length > 0 ? (
        <>
          <h2 className="text-2xl sm:text-4xl flex gap-2 justify-center items-center mt-6">
            <GraduationCap size={46} fill="#08d9d6" />
            Selected Courses
          </h2>

          {/* starting grid here */}

          <div className={`${style.parent}`}>
            <h3 className="bg-primary flex items-center justify-center h-10 w-11 text-[14px] sm:text-lg  ">
              No.
            </h3>
            <h3 className="bg-primary flex items-center justify-center h-10 w-[5rem] sm:w-[6rem] text-[14px] sm:text-lg text-center ">
              Product ID
            </h3>
            <h3 className="bg-primary flex items-center justify-center h-10 text-[14px] sm:text-lg text-center">
              Course Name
            </h3>
            <h3 className="bg-primary  items-center justify-center h-10 hidden sm:flex sm:text-lg text-center">
              Course Image
            </h3>
            <h3 className="bg-primary flex items-center justify-center h-10 w-[3.4rem] text-[14px] sm:text-[lg]">
              Price
            </h3>
            <h3 className="bg-primary flex items-center justify-center h-10 w-[2.4rem] sm:w-[3.4rem]"></h3>

            {/* items-center justify-center bg-blue-300 flex k */}
            {cart.map((ele, ind) => (
              <>
                <p className="h-32 border-b-2 border-primary border-solid flex justify-center items-center text-[12px] sm:text-base">
                  {ind + 1}
                </p>
                <p className="h-32 border-b-2 border-primary border-solid flex justify-center items-center text-[12px] sm:text-base">
                  {ele.product.id}
                </p>
                <p className="h-32 border-b-2 border-primary border-solid flex justify-center items-center text-center text-[12px] sm:text-base">
                  {ele.product.title}
                </p>
                <div className="h-32 border-b-2 border-primary border-solid justify-center items-center hidden sm:flex">
                  <Image
                    src={ele?.product.banner[0].url}
                    alt="course image"
                    width={150}
                    height={100}
                    className="rounded"
                  />
                </div>
                <p className="h-32 border-b-2 border-primary border-solid flex justify-center items-center text-[12px] sm:text-base">
                  {ele?.product.price}
                </p>
                <p
                  className="h-32 border-b-2 border-primary border-solid flex justify-center items-center text-[12px] sm:text-base cursor-pointer hover:text-red-400 transition"
                  onClick={() => startSwal(ele)}
                >
                  <Trash />
                </p>
              </>
            ))}
          </div>
          <stron className=" text-right text-lg my-6 block">
            Total Price: {totalPrice()} EGP
          </stron>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Payment;

/*
/*
src={ele.product.banner.data.attributes.url}

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="px-4 py-2">
                    <input
                      type="checkbox"
                      id="SelectAll"
                      className="size-5 rounded border-gray-300"
                    />
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date of Birth
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Role
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Salary
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2">
                    <label className="sr-only" htmlFor="Row1">
                      Row 1
                    </label>

                    <input
                      className="size-5 rounded border-gray-300"
                      type="checkbox"
                      id="Row1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    John Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Developer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $120,000
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2">
                    <label className="sr-only" htmlFor="Row2">
                      Row 2
                    </label>

                    <input
                      className="size-5 rounded border-gray-300"
                      type="checkbox"
                      id="Row2"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Jane Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    04/11/1980
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Designer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $100,000
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2">
                    <label className="sr-only" htmlFor="Row3">
                      Row 3
                    </label>

                    <input
                      className="size-5 rounded border-gray-300"
                      type="checkbox"
                      id="Row3"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Gary Barlow
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Singer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $20,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          */
