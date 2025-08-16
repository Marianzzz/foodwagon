import { cities } from "@/lib/constants";
import CityList from "./CityList";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function chunkArray(array: string[], size: number) {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
        array.slice(index * size, index * size + size)
    );
}
export default function Cities() {

    const city = cities;
    const groupedCities = chunkArray(city, 5);

    return <div className="p-2">
        <h3 className="text-white font-bold text-[22px] sm:pb-10 text-center md:text-left hidden sm:block">Наші топові місця</h3>
        <div className="hidden sm:flex justify-center sm:justify-between flex-wrap gap-y-6 gap-x-2">
            <CityList grouped={groupedCities} />
        </div>
        <Accordion type="single" collapsible className="block sm:hidden">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-white font-bold text-[22px]">Наші топові місця</AccordionTrigger>
                <AccordionContent>
                    <CityList grouped={groupedCities} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
}