import { cards } from "@/lib/constants"
import Card from "./Card"
export default function Cards(){
    const card = cards;
    return <section className="pt-[74px] xl:pt-[138px] xl:pb-[80px]">
        <div className="max-w-8xl mx-auto">
            {card.map(({title, text, name, photo, reverse})=>(
            <Card title={title} text={text} name={name} photo={photo} key={title} reverse={reverse} />
            ))}
        </div>
    </section>
}