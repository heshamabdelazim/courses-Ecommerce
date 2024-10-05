import React from "react";

import ImageAnimation from "./ImageAnimation";
import TextAnimation from "./TextAnimation";

function LoadingAProduct() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-7 py-20">
      <ImageAnimation />
      <TextAnimation />
    </div>
  );
}

export default LoadingAProduct;
