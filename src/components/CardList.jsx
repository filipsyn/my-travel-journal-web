import Card from "./Card";
import data from "../data/data"

export default function CardList() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <section className="card-list">
            {cards}
        </section>
    )
}