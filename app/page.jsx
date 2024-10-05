import { Suspense } from "react";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection/productSection";
import Loading from "./_components/animations/Loading";

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Loading />}>
        <ProductSection />
      </Suspense>
    </div>
  );
}
