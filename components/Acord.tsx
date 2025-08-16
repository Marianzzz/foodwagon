import { ReactNode } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Acord = {
  children: ReactNode,
  title: string,
}

export default function Acord({children, title}:Acord) {
  return <Accordion type="single" collapsible className="block sm:hidden w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-[22px]">{title}</AccordionTrigger>
      <AccordionContent className="text-lg">
      {children}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
}
