import { Button } from "./ui/button";
import { Truck } from "lucide-react";
import { Handbag } from "lucide-react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import Image from "next/image";


export default function Delivery() {
    const styleButton = "border-none shadow-none text-[#757575] font-bold bg-white focus:bg-[#F17228]/10 focus:text-[#F17228] hover:bg-[#F17228]/10 hover:text-[#F17228] cursor-pointer";
    return <section className="h-[620px] bg-[#FFB30E]">
        <div className="flex justify-center pt-20 mx-auto lg:pt-40 2xl:justify-between max-w-8xl">
            <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-white text-[44px] md:text-[88px] font-bold text-center 2xl:text-left">
                    Ви голодні?
                </h2>
                <p className="text-[#504F4F] text-[18px] md:text-[22px] text-center 2xl:text-left">
                    За кілька кліків знайдіть страви, які доступні поруч із вами
                </p>
                <div className="pt-[37px]">
                    <div className="flex gap-2 items-center w-[350px] lg:w-[856px] justify-center  lg:justify-start h-[86px] bg-white rounded-t-2xl border-b-1 pl-0 lg:pl-6">
                        <Button className={styleButton}><Truck />Доставка</Button>
                        <Button className={styleButton}><Handbag />Самовивіз</Button>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center bg-white rounded-b-2xl gap-4 p-4 lg:pl-6 w-[350px] lg:w-[856px] h-auto lg:h-[108px]">
                        <Input
                            className="w-full lg:w-[593px] h-[49px] placeholder:text-lg bg-[#F5F5F5]"
                            placeholder="Уведіть свою адресу"
                        />
                        <Button className="font-bold w-full lg:w-[160px] h-[50px] lg:h-[60px] mt-2 lg:mt-0 bg-[#F65900] hover:bg-[#F65900]/80 cursor-pointer">
                            <Search className="text-white" />Пошук їжі
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hidden 2xl:block">
                <Image src="/ramen.png" alt="Рамен" width="497" height="497" className="pt-5" />
            </div>
        </div>
    </section>
}