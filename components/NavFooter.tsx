import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Acord from "./Acord"
import { menuSections } from "@/lib/constants"



export default function NavFooter() {
  const menuSection = menuSections;
  return (
    <div className="border-y-2 border-[#424242] py-[63px] flex justify-between px-2 flex-col-reverse xl:flex-row items-center xl:items-baseline gap-8 xl:gap-0">
      <nav className="flex xl:gap-[115px] gap-[55px] justify-between text-center xl:text-left flex-col sm:flex-row">
        {menuSection.map(({ title, links }) => (
          <div key={title}>
            <div className="hidden sm:block">
              <h3 className="pb-6 text-[22px] font-bold">{title}</h3>
              <ul className="text-[#F5F5F5] space-y-1">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Acord title={title}>
              <ul className="text-[#F5F5F5] space-y-1">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </Acord>
          </div>
        ))}
      </nav>
      <div>
        <div className="flex flex-col gap-10 pb-[43px]">
          <h3 className="uppercase text-[#F5F5F5] font-bold">Підпишись на нас</h3>
          <div className="flex gap-4">
            {["instagram", "facebook", "twitter"].map((name) => (
              <Image
                key={name}
                src={`/media/${name}.svg`}
                width="21"
                height="24"
                alt={`${name} логотип`}
                className="cursor-pointer hover:opacity-80 transition"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-[#BBBBBB] font-bold">
            Отримуйте ексклюзивні пропозиції на свою поштову скриньку
          </p>
          <form className="flex w-full items-center gap-2">
            <Input
              type="email"
              placeholder="Введіть свою пошту"
              className="border-0 bg-[#424242] h-[60px] placeholder:text-[#ADADAD] placeholder:text-lg"
            />
            <Button
              type="submit"
              className="font-bold bg-gradient-to-br to-[#FFB800] from-[#FF8A00] w-[133px] h-[60px] hover:opacity-90 transition cursor-pointer"
            >
              Підписатись
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
