import Link from "next/link";
import React from "react";

function Breadcrumb({ title }) {
  const textStyle = "block transition hover:text-gray-700 font-bold";

  return (
    <div className="m-auto w-fit my-[30px] ">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-lg text-gray-600">
          <li>
            <Link href="/" className={textStyle}>
              Home
            </Link>
          </li>

          {/* -----------previous was the arrow svg----------------- */}
          {/* <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li> */}
          {/* -----------previous was the arrow svg----------------- */}

          {/* <li>
            <Link href="" className="block transition hover:text-gray-700 ">
              {path.split("/")[1]}
            </Link>
          </li> */}
          {/* the following <li> is the arrow  */}
          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className={textStyle}>
              {title}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
