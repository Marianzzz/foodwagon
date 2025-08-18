import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { popularItems } from "@/lib/constants";
import Image from "next/image";
import { Button } from "./ui/button";
import { MapPin } from "lucide-react";

export default function PopularItems() {
  const items = popularItems;

  const showNavigation = items.length > 5;

  return (
    <section className="max-w-8xl mx-auto flex flex-col items-center justify-center py-[40px] md:py-[80px] px-4">
      <h2 className="pb-[44px] md:pb-[88px] text-[43px] font-bold text-center">Популярні товари</h2>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {items.map(({ photo, place, price, name }) => (
            <CarouselItem
              key={name}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <div className="flex flex-col w-full max-w-[284px] h-[469px] mx-auto">
                <Image
                  src={photo}
                  alt={name}
                  width={284}
                  height={283}
                  className="rounded-2xl w-full h-auto"
                />
                <h3 className="font-bold text-[22px] text-[#424242]">{name}</h3>
                <div className="flex items-center justify-start gap-2.5 text-[#FFB30E] text-[22px]"><MapPin />{place}</div>
                <p className="font-bold text-[22px]">{price}</p>
                <Button className="mt-5 w-full h-[60px] bg-[#F17228] text-lg font-bold hover:bg-[#F17228]/80 cursor-pointer">
                  Замовити зараз
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {showNavigation && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </section>
  );
}
