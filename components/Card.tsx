import Image from "next/image";
import { Button } from "./ui/button";

type Card = {
    title: string,
    name: string,
    text: string,
    photo: string,
    reverse: boolean,
}

export default function Card({ title, name, text, photo, reverse }: Card) {
    const rev = reverse ? "xl:flex-row-reverse" : "";
    const roundedRev =  reverse ? "xl:rounded-l-2xl" : "xl:rounded-r-2xl";
    return <div className={`w-full flex mb-20 ${rev} flex-col xl:flex-row items-center gap-5 xl:shadow-2xl xl:rounded-2xl`}>
        <div className="xl:p-[56px] flex flex-col flex-1/3 items-center xl:items-start text-center xl:text-left">
            <h3 className="text-[43px] font-bold text-[#353535] ">{title} <span className="text-[#FFB30E]">{name}</span></h3>
            <p className="text-[#616161]/61 font-semibold pb-[40px] xl:pb-[80px]">{text}</p>
            <Button className="text-white font-black uppercase bg-gradient-to-br from-[#FFB800] to-[#FF8A00] px-[48px] py-[21px] cursor-pointer hover:opacity-90 ">Приступайте до замовлення</Button>
        </div>
        <div className="">
            <Image src={photo} width="961" height="512" alt={text} className={roundedRev} />
        </div>
    </div>
}