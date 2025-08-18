import { deals } from "@/lib/constants"
import FlashDeal from "./FlashDeal";
import Slider from "./Slider";
import {
    CarouselItem,
} from "@/components/ui/carousel";
export default function FlashDeals() {
    const flashDeals = deals;
    return (
        <section className="mx-auto max-w-8xl sm:pt-20 sm:pb-10 pt-10">
            <div className="flex-1/4 lg:flex-1 flex-wrap justify-center hidden md:flex">
                {flashDeals.map((deal) => (
                    <FlashDeal key={deal.id} discount={deal.discount} title={deal.title} day={deal.day} photo={deal.photo} />
                ))}
            </div>
            <Slider>
                {flashDeals.map((deal) => (
                    <CarouselItem
                        key={deal.id}
                        className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex justify-center items-center pb-5"
                    >
                        <FlashDeal discount={deal.discount} title={deal.title} day={deal.day} photo={deal.photo} />
                    </CarouselItem>
                ))}
            </Slider>
        </section>
    )
}