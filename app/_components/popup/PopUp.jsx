"use client";
import React, { useEffect, useState } from "react";
import styles from "./popup.module.css";
import { HeartHandshake, Smile } from "lucide-react";
import { arima } from "../../_utils/fonts"; //font

function PopUp() {
  let [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      console.log("testing");
    }, 2000);
  }, []);
  return (
    <div
      className={`${styles.popup} ${arima.className} `}
      style={{
        top: "15%",
        left: 0,
        transform: show ? null : "translatex(-100%)",
      }}
    >
      <p className="flex gap-1">
        <span className="text-lg sm:text-2xl">Hello</span>
        <span>
          <HeartHandshake color="red" />
        </span>
      </p>
      <p className=" text-sm sm:text-lg">
        the Data might take couple of seconds to be ready because of free deploy
        of backend. <br />I appreciate your patience. <br /> Once it is ready,
        it will be normal to experience.
      </p>
      <button
        className={`bg-secondary text-sm  sm:font-extrabold tracking-wider mt-5 rounded py-[0.2rem] px-[0.2rem] sm:py-1 sm:px-2 text-white opacity-85 hover:opacity-100 active:bg-yellow-600 hover:bg-yellow-600`}
        onClick={() => setShow(false)}
      >
        I understand
      </button>
    </div>
  );
}

export default PopUp;
