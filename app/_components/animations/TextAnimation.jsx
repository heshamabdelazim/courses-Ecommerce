import React from "react";

function TextAnimation() {
  return (
    <>
      <div className="h-[20px] w-[300px] animate-pulse bg-gray-300 mx-auto md:mx-0" />
      <div className="h-[15px] w-[100px] animate-pulse bg-gray-300 mx-auto md:mx-0 my-2 " />
      <div className="h-[20px] w-[350px] lg:w-[400px] animate-pulse bg-gray-300 mx-auto md:mx-0 mt-5 sm:mt-7" />
      <div className="h-[20px] w-[100px] animate-pulse bg-gray-300 mx-auto md:mx-0 mt-5  " />
    </>
  );
}
export default TextAnimation;
