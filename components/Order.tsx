import Image from "next/image";
import { Button } from "./ui/button";

export default function Order() {
    return <div className="relative w-full h-[400px] overflow-hidden flex items-center justify-center">
        <Image src="/bg-for-order.jpg" alt="задній фон" fill className="object-cover" priority />
        <div className="relative z-10 text-center max-w-[728px]">
            <h2 className="font-black text-[43px] sm:text-[57px] text-white pb-[30px]">Ви готові замовити за найкращими пропозиціями?</h2>
            <Button className="py-[21px] px-[48px] bg-gradient-to-br from-[#F17228] to-[#F15E28] hover:opacity-90 cursor-pointer">Приступайте до замовлення</Button>
        </div>
    </div>
}