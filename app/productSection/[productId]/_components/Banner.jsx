import ImageAnimation from "../../../_components/animations/ImageAnimation";
import Image from "next/image";
import React from "react";

function Banner({ product }) {
  return (
    <div className="mx-auto">
      {product ? (
        <Image
          className="rounded-xl"
          src={product?.banner[0].url}
          alt="product image banner"
          width={500}
          height={400}
        />
      ) : (
        <ImageAnimation />
        // <h1>beso beso</h1>
      )}
    </div>
  );
}

export default Banner;
