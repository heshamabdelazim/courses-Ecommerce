"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, CircleDollarSign } from "lucide-react";
import { useEffect, useRef } from "react";
import ImageAnimation from "../animations/ImageAnimation";

function ProductList({ products }) {
  return (
    <div className="grid gap-9 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
      {products
        ? products.map((obj) => (
            <Link
              key={obj.id}
              href={`/productSection/${obj.documentId}`}
              className="m-auto p-1 hover:border hover:border-primary hover:shadow-md hover:cursor-pointer rounded-lg"
            >
              <Image
                src={obj?.banner[0].url}
                alt="Banner-Pic"
                width={400}
                height={350}
                className="rounded-t-lg h-[170px] object-cover"
              />
              <div className="p-4  rounded-b-lg bg-gray-100">
                <strong className="text-[14px] font-bold text-lg line-clamp-1 ">
                  {obj?.title}
                </strong>
                <div className="flex justify-between flex-col lg:flex-row font-bold">
                  <h4 className="text-[13px] text-gray-600 flex gap-1 mt-3 items-center">
                    <BookOpen />
                    {obj?.category}
                  </h4>
                  <h4 className="text-[13px] text-primary flex gap-1 mt-3 items-center">
                    <CircleDollarSign />
                    {obj?.price} EGP
                  </h4>
                </div>
              </div>
            </Link>
          ))
        : ["1", "2", "3"].map((obj) => <ImageAnimation key={obj.id} />)}
    </div>
  );
}

export default ProductList;
