import { instructions } from "@/lib/constants"

export default function Instructions() {
    const instruction = instructions;
    return <section className=" py-20  bg-gradient-to-b from-[#FFCE67]/22 to-[#FDEDCA]/22">
        <div className="mx-auto max-w-8xl">
            <h2 className="text-[43px] text-[#F17228] font-bold text-center pb-[71px]">Як це працює</h2>
            <div className="flex items-center justify-center gap-8 flex-wrap ">
                {instruction.map(({ title, description, icon: Icon }) => (
                    <div key={title} className="flex flex-col text-center items-center w-[307px]">
                        <Icon size="112"  className="pb-5 text-[#FF9F00]"/>
                        <h3 className="text-[22px] font-bold text-[#434343]">{title}</h3>
                        <p className="font-sans text-[#9E9E9E]">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
}