import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";
import { ReactNode } from "react";

export default function Slider({ children }: { children: ReactNode }) {
  return (
    <Carousel opts={{ align: "start" }} className="w-full md:hidden">
      <CarouselContent>
        {children}
      </CarouselContent>
    </Carousel>
  );
}
