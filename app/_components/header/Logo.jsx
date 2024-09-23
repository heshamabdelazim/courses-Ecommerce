import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="block text-teal-600 " href="/">
      <Image src="/logo.svg" alt="logo" width={130} height={50} />
    </Link>
  );
};

export default Logo;
