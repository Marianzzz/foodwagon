import { featuredRestaurans } from "@/lib/constants"
import { Tag } from "lucide-react";
import { Clock } from "lucide-react";
import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function FeaturedRestaurants() {
    const restauranst = featuredRestaurans;
    return <div className="mx-auto max-w-8xl pb-[80px]">
        <h2 className="pb-[88px] text-[43px] font-bold text-center ">
            Популярні ресторани
        </h2>
        <div className="flex items-center justify-center gap-4 flex-wrap pb-[44px]  md:pb-[88px]">
            {restauranst.map(({ photo, title, rating, logo, status, discount }) => (
                <div className="flex flex-col w-[357px] h-[463px] items-start" key={title}>
                    <div className="relative pb-6">
                        <Image src={photo} alt={title} width="357" height="301" className="rounded-2xl" />
                        <div className="flex gap-2 absolute top-6 left-4">
                            <div className="bg-[#F17228] w-[134px] h-[42px] rounded-2xl  flex items-center justify-center">
                                <p className="text-white font-bold text-[22px] flex items-center justify-center gap-2"><Tag />Від {discount}%</p>
                            </div>
                            <div className="text-white font-bold text-[22px] bg-[#FFB30E] w-[120px] h-[42px] rounded-2xl flex items-center justify-center gap-2"><Clock />Швидко</div>
                        </div>
                    </div>
                    <div className="flex gap-6.5 pb-8">
                        <Image src={logo} alt={title} width="64" height="64" />
                        <div>
                            <h3 className="text-[22px] text-[#424242] font-bold">{title}</h3>
                            <span className="text-[#FFB30E] text-[22px] flex items-center gap-2"><Star />{rating}</span>
                        </div>
                    </div>
                    {status === "open" ? <div className="h-[42px] w-[132px] bg-[#79B93C]/20 rounded-2xl flex items-center justify-center px-4 py-2">
                        <p className="text-[#79B93C] text-[22px] font-bold">Відкрито</p>
                    </div> : <div className="h-[42px] w-[240px] bg-[#F17228]/20 rounded-2xl flex items-center justify-center  py-2">
                        <p className="text-[#F17228] text-[22px] font-bold">Відкривається завтра</p>
                    </div>}
                </div>
            ))}
        </div>
        <div className="w-full flex justify-center">
            <Button variant="ghost" className="text-white font-bold w-[178px] h-[60px]  bg-gradient-to-b to-[#FFBA26] from-[#FF9A0E] text-lg flex items-center hover:opacity-90 hover:text-none cursor-pointer rounded-2xl">Переглянути всі<ArrowRight /></Button>
        </div>
    </div>
}