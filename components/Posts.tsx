import Image from "next/image";

export default function Posts() {
    return <section className="w-full bg-[#FEEFD0] pt-[80px]  lg:pt-[130px]">
        <div className="max-w-8xl mx-auto flex justify-center items-center p-2">
            <div className="bg-white max-w-[1230px] rounded-4xl shadow-[#FFAE00] shadow-lg flex items-center p-[25px] xl:p-[55px] flex-col xl:flex-row gap-4">
                <div className="flex gap-7.5 text-center items-center">
                    <Image src="/posts/discount.svg" alt="знижка" width="136" height="136" />
                    <div className="font-bold text-[35px] w-[151px] bg-gradient-to-bl from-[#FB3C00] to-[#FFB800] bg-clip-text text-transparent text-center xl:text-left">Щоденні знижки</div>
                </div>
                <div className="h-24 w-[2px] bg-[#CFCFCF] mx-[55px] hidden xl:block" />

                <div className="flex gap-7.5 text-center items-center ">
                    <Image src="/posts/tracing.svg" alt="відстежння" width="136" height="136" />
                    <div className="font-bold text-[35px]  w-[151px] bg-gradient-to-bl from-[#FB3C00] to-[#FFB800] bg-clip-text text-transparent text-center xl:text-left">Онлайн стеження</div>
                </div>
                <div className="h-24 w-[2px] bg-[#CFCFCF] mx-[55px] hidden xl:block" />

                <div className="flex gap-7.5 text-center items-center">
                    <Image src="/posts/quick.svg" alt="відстежння" width="136" height="136" />
                    <div className="font-bold text-[35px]  w-[151px] bg-gradient-to-bl from-[#FB3C00] to-[#FFB800] bg-clip-text text-transparent text-center xl:text-left">Швидка доставка</div>
                </div>            </div>
        </div>
    </section>
}