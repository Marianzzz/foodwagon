import { deals } from "@/lib/constants"
import FlashDeal from "./FlashDeal";
export default function FlashDeals() {
    const flashDeals = deals;
    return (
        <section className="mx-auto max-w-8xl sm:pt-20 sm:pb-10 pt-10">
            <div className="flex flex-1/4 lg:flex-1 flex-wrap justify-center">
            {flashDeals.map((deal) => (
                <FlashDeal key={deal.id} discount={deal.discount} title={deal.title} day={deal.day} photo={deal.photo} />
            ))}
            </div>
        </section>
    )
}