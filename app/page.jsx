import { Suspense } from "react";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection/productSection";
import Loading from "./_components/animations/Loading";
import Popup from "./_components/popup/PopUp";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Popup />
      <Suspense fallback={<Loading />}>
        <ProductSection />
      </Suspense>
    </div>
  );
}
