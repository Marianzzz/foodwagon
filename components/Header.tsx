import { Button } from "./ui/button"
import { MapPin } from "lucide-react"
import { Search } from "lucide-react"
import { UserRound } from "lucide-react"
import Image from "next/image"
import { Input } from "./ui/input"
import SearchMobile from "./SearchMobile"

export default function Header() {
    return <div className="max-w-8xl  mx-auto h-[72px] flex items-center justify-between">
        <h1 className="text-[#F17228] font-bold text-3xl flex gap-2.5 pl-0.5">
            <Image src="./logo.svg" alt="Логотип" width="28" height="30" /> <span>food<span className="text-[#FFB30E]">wagon</span></span>
        </h1>
        <div className="hidden md:flex gap-2 text-[#424242]">
            <span className="font-bold">Доставим до:</span><MapPin className="text-[#FFB30E]" /> <span className="cursor-pointer hover:underline">Ваша локація</span>
        </div>
        <div className="flex items-center gap-7.5">
            <div className="flex items-center gap-2">
                <Search className="text-[#FFB30E] hidden  md:block" />
                <SearchMobile />
                <Input className="font-bold text-[#424242] border-none shadow-none w-[90px] hidden md:block" placeholder="Пошук їжі" />
                <UserRound className="text-[#FFB30E] hover:opacity-60 cursor-pointer md:cursor-default md:hover:opacity-100 block md:hidden" />
            </div>
            <Button variant="secondary" className="text-[#FF8A00] font-bold shadow-[#F17228] shadow-2xl bg-white cursor-pointer hidden md:flex"><UserRound />Login</Button>
        </div>
    </div>
}