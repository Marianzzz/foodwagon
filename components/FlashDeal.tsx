import Image from "next/image";

type Deal = {
    discount: number,
    title: string,
    day: number,
    photo: string
}

export default function FlashDeal({ discount, title, day, photo }: Deal) {
    return <div className="flex flex-col w-[357px] h-[415px] px-2">
        <div className="relative">
            <Image src={photo} alt={title} width="357" height="301" className="rounded-2xl" />
            <div className="text-white font-bold text-[68px] w-[140px] h-[83px] bg-[#FFB30E] rounded-tr-2xl rounded-bl-2xl flex justify-center items-center absolute bottom-0">
               <div className="flex gap-1"> <span>{discount}</span> <span className="flex flex-col gap-0"> <span className=" text-[35px] ">%</span> <span className="text-[22px] font-normal">Від</span></span></div>
            </div>
        </div>
        <div>
            <p className="text-[#424242] text-[22px] font-bold pb-3.5">{title}</p>
            <span className="text-[22px] text-[#F17228] bg-[#F17228]/20 p-2 rounded-md">{day} днів залишилось</span>
        </div>
    </div>
}