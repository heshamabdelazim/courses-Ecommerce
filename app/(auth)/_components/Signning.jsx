"use client";
import { SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";
// import Logo from "./header/Logo";
import dynamic from "next/dynamic";

export default function Signning({ button = "logging" }) {
  const Logo = dynamic(() => import("../../_components/header/Logo"), {
    ssr: false,
  });

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="image of intro"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
            fill
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Logo />
            <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              {button.toUpperCase()} E-Commerce of Courses.
            </h2>

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <div className="w-fit mx-auto mt-4">
              {button == "logging" ? (
                <>
                  <SignIn />
                </>
              ) : (
                <>
                  <SignUp />
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
