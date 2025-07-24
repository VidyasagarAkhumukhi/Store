import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap25 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-5xl tracking-tight sm:text-6xl">
          We are changing the way you shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          From discovering your new favorite item to unboxing it at your door,
          we have designed every step to be seamless and inspiring. Experience a
          smarter, simpler, and more enjoyable way to get the products you love
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Out Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
