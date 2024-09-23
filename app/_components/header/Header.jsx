"use client";
import React, { useContext, useEffect, useState } from "react";
import Links from "./Links";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { CartContext } from "../../_context/CartContext";
import ModifyProduct from "../header/ModifyProduct";
import Cart from "../../_utils/Cart";
import Logo from "../header/Logo";

function Header() {
  const { user } = useUser();
  const { cart, setCart } = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);
  const [openLinks, setOpenLinks] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => handleClick(e));
    // User press anywhere else then the list close. HOW? if the compiler that clicked one doesn't has cart it will false
    //also I added to the component many cart inside DOMs

    document.body.offsetWidth > 770 && setOpenLinks(true);
    // suppose the user enter on his phone openLinks will be by default false, to see links click on the icon
    //if from laptop it will be true so you will see the links in the header

    document.body.addEventListener("scroll", (e) => console.log("moving"));
  }, []);

  useEffect(() => {
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
          console.log(res.data.data);
          res.data.data.forEach((ele) => {
            setCart((old) => [
              ...old,
              {
                id: ele.documentId,
                product: ele.products[0],
              },
            ]);
          });
        })
        .catch((err) => console.log(err, "this is damn error"));
    }
  };

  console.log(cart);
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
              <div className="sm:flex sm:gap-4">
                <Link
                  className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500"
                  href="/sign-in"
                >
                  Login
                </Link>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-1 md:gap-2 ">
                  <div className="w-[75px] sm:w-auto hidden md:block">
                    welcome {user.firstName}
                  </div>
                  {<UserButton />}
                </div>
                <div className="cart h-[60px] flex items-center">
                  <h3
                    className="cart flex gap-0.5 cursor-pointer"
                    onClick={() => setOpenCart((old) => !old)}
                  >
                    <ShoppingBag />({cart?.length})
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
