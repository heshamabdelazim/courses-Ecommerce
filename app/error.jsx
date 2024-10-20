"use client";
import React from "react";

function error() {
  return (
    <section className="flex justify-center items-center min-h-[85vh] p-2 ">
      <h1 className="text-3xl  text-center">
        Connection failed, You need to refresh the website.
      </h1>
    </section>
  );
}

export default error;
