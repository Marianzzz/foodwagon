import Image from "next/image";

export default function InstallApp() {
    return <section className="w-full bg-[#FEEFD0] h-[295px] xl:h-[589px] flex xl:items-end items-center ">
        <div className="max-w-8xl mx-auto flex justify-center gap-36">
            <div className="hidden xl:block">
                <Image src="/app/phone.png" width="603" height="527" alt="телефони" />
            </div>
            <div className="flex flex-col items-center xl:items-start ">
                <div className="pl-0 xl:pl-4 flex flex-col items-center xl:items-start">
                    <h2 className=" text-[44px] sm:text-[68px] bg-gradient-to-br  bg-clip-text text-transparent from-[#FFB800] to-[#FF8A00] font-bold text-center xl:text-left">Встанови додаток</h2>
                    <p className="font-sans md:w-[429px] text-[#827E7E] text-center xl:text-left">Замовити їжу ще ніколи не було так просто. Шукайте найкращі знижки, і ви поринете у світ вишуканої їжі.</p>
                </div>
                <div className="w-[203px] h-[60px] ">
                    <Image src="/app/Button.png" width={203} height={60} alt="Google Play посилання" />
                </div>
            </div>
        </div>
    </section>
}