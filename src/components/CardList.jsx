import Card from "./Card";
import data from "../data/data"
import {useState, useEffect} from "react";

export default function CardList() {
    const apiUrl = "https://localhost:7258/api/journal"

    const [cardDataArray, setCardDataArray] = useState([
            {
                id: 0,
                title: "",
                description: "",
                location: "",
                start: "",
                end: "",
            }
        ]
    )

    useEffect(() => {
       fetch(apiUrl)
           .then(res => res.json())
           .then(data => {
               console.log(data)
           })
    }, [])

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