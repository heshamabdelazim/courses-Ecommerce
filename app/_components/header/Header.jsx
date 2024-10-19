"use client";
import React, { useContext, useEffect, useState } from "react";
import Links from "./Links";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import ModifyProduct from "../header/ModifyProduct";
import Cart from "../../_utils/Cart";
import Logo from "../header/Logo";
import { useDispatch, useSelector } from "react-redux";
import { addingData } from "../../_RTK/slices/Cart";
import { reduxObjectBuilder } from "../../_utils/some-functions";

function Header() {
  const { user } = useUser();
  const [openCart, setOpenCart] = useState(false);
  const [openLinks, setOpenLinks] = useState(false);

  // Redux work
  const cartContent = useSelector((data) => data.cart);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    document.body.addEventListener("click", (e) => handleClick(e));
    // User press anywhere else then the list close. HOW? if the compiler that clicked one doesn't has cart it will false
    //also I added to the component many cart inside DOMs

    document.body.offsetWidth > 770 && setOpenLinks(true);
    // suppose the user enter on his phone openLinks will be by default false, to see links click on the icon
    //if from laptop it will be true so you will see the links in the header
  }, []);

  useEffect(() => {
    //whenever sign-in this will function
    data();
  }, [user]); //Note you must write inside [user] because the function will not work why? the user authentication will take time

  const handleClick = (e) => {
    if (!e.target.parentNode.classList.contains("cart")) {
      setOpenCart(false);
    }
  };

  const data = () => {
    if (user) {
      Cart.getFromCart(user.primaryEmailAddress.emailAddress)
        .then((res) => {
          res.data.data.map(
            (ele) =>
              dispatch(
                addingData(
                  reduxObjectBuilder(ele.id, ele.documentId, ele.products[0]) //we create a new print of an redux object to dispatch the same structure of data
                )
              )
            //id_of_row_in_DB this is increasing in data base like this 1 , 2 ,3 ,4 ,5 ,6 for any queries use made
          );

          // dispatch(addingData(res.data.data.product));
        })
        .catch((err) => console.log(err, "this is damn error"));
    }
  };

  return (
    <header className="bg-white shadow-md relative test">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex flex-1 items-center justify-end md:justify-between ">
          {/* <nav aria-label="Global" className="hidden md:block"> */}
          <nav aria-label="Global">
            <Links open={openLinks} />
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            {!user ? (
              <div className="flex gap-2 sm:gap-4">
                <Link
                  className="block rounded-md bg-primary text-center px-2 sm:px-5 py-2.5 text-[13px] font-medium text-white transition hover:bg-teal-500"
                  href="/sign-up"
                >
                  Sign Up
                </Link>
                <Link
                  className="block rounded-md bg-secondary text-center px-2 sm:px-5 py-2.5 text-[13px] sm:text-sm font-medium text-white transition hover:bg-teal-500"
                  href="/sign-in"
                >
                  Sign In
                </Link>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-1 md:gap-2 ">
                  <div className="w-[75px] sm:w-auto hidden md:block">
                    welcome{" "}
                    <span className="text-secondary font-bold">
                      {user.firstName}
                    </span>
                  </div>
                  {<UserButton />}
                </div>
                <div className="cart h-[60px] flex items-center">
                  <h3
                    className="cart flex gap-0.5 cursor-pointer"
                    onClick={() => setOpenCart((old) => !old)}
                  >
                    <ShoppingBag />({cartContent?.length})
                  </h3>
                  {openCart && <ModifyProduct />}
                </div>
              </>
            )}

            <button
              className="block rounded hover:bg-gray-100 p-2.5 hover:text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={() => setOpenLinks((old) => !old)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
