import React from "react";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const carouselImages = [hero4, hero2, hero3, hero1];

const HeroCarousel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel className="mx-3">
        <CarouselContent>
          {carouselImages.map((img, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-4">
                    <Image
                      src={img}
                      alt="hero"
                      className="w-fit h-[24rem] rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="mx-8" />
        <CarouselNext className="mx-8" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
