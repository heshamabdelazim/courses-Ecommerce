import Link from "next/link";
import React from "react";

function Breadcrumb({ title }) {
  return (
    <div className="m-auto w-fit my-[30px] ">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-lg text-gray-600">
          <li>
            <Link href="/" className="block transition hover:text-gray-700">
              Home
            </Link>
          </li>

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
            <a href="#" className="block transition hover:text-gray-700">
              {title}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
