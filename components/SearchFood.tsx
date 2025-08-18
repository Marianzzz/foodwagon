import { ArrowRight } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { food } from "@/lib/constants";

export default function SearchFood() {
    const foods = food;
    const showNavigation = foods.length > 6;

    return <section className="w-full bg-[#FEFAF1] pb-[62px] md:pt-[88px] pt-[44px]">
        <div className="mx-auto max-w-8xl">
            <div className="flex justify-between items-center flex-col lg:flex-row pb-[88px]">
                <h2 className="text-[43px] font-bold text-[#212121]">Пошук Їжі</h2>
                <div className="flex">
                    <p className="text-[#FFB30E] font-bold flex items-center gap-2 group cursor-pointer"><span className="inline-flex items-center gap-2 border-b border-transparent group-hover:border-[#FFB30E]">
                        Переглянути всі
                        <ArrowRight />
                    </span></p>
                </div>
            </div>
            <div>
                <Carousel opts={{ align: "start" }} className="w-full">
                    <CarouselContent>
                        {foods.map(({ photo, title }) => (
                            <CarouselItem
                                key={title}
                                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/6"
                            >
                                <div className="flex flex-col items-center gap-7.5 w-full max-w-[218px] h-[290px] mx-auto">
                                    <Image
                                        src={photo}
                                        alt={title}
                                        width={218}
                                        height={218}
                                        className="rounded-full w-full h-auto"
                                    />
                                    <h3 className="font-bold text-[22px] text-[#424242]">{title}</h3>
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
            </div>
        </div>
    </section>
}