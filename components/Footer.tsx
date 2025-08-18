import Cities from "./Cities";
import NavFooter from "./NavFooter";

export default function Footer() {
    return <footer className="bg-[#212121] pt-[44px] lg:pt-[99px] pb-[20px] sm:pb-[70px] text-[#F5F5F5]">
        <div className="flex flex-col max-w-8xl mx-auto">
            <div className="flex flex-col lg:gap-[99px] gap-[44px] pb-4">
                <Cities />
                <NavFooter />
            </div>
            <div className="text-[#F5F5F5] text-[15px] flex items-center sm:justify-between flex-col sm:flex-row">
                <p>Всі права захищено</p>
                <p>Розроблено <span className="font-bold">Мар’яном Цивінським</span></p>
            </div>
        </div>

    </footer>
}