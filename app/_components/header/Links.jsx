"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import style from "./links.module.css";

const Links = ({ open }) => {
  useEffect(() => {
    // window.addEventListener("scroll", (e) => console.log("moving"));
    console.log(document.body.offsetWidth);
    open = document.body.offsetWidth > 770 ? true : false;
  }, []);
  const allLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "projects",
      path: "/projects",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];
  return (
    // <ul className=" flex items-center gap-3 lg:gap-6 text-sm absolute top-[100%] right-0 flex-col bg-gray-100 rounded px-7 py-4 md:relative md:flex-row md:bg-transparent w-0 ">
    <ul className={`${style.parent} ${open ? style.open : style.close}`}>
      {allLinks.map((linkObj) => (
        <li key={linkObj.name}>
          <Link
            href={linkObj.path}
            className="text-gray-500 line-clamp-1 transition hover:text-gray-500/75 font-bold"
          >
            {linkObj.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
