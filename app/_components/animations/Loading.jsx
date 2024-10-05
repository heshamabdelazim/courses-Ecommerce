import React from "react";
import ImageAnimation from "./ImageAnimation";

function loading() {
  return (
    <div className="grid gap-9 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
      {[1, 2, 3].map((ele) => (
        <ImageAnimation key={ele} />
      ))}
    </div>
  );
}

export default loading;
