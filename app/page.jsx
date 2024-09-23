import Image from "next/image";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection/productSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductSection />
    </div>
  );
}
