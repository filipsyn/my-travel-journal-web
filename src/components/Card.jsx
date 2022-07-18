import pin from "../assets/location-pin.svg"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--photo" src={props.photoUrl} alt=""/>
            <div className="card--details">
                <div className="card--location">
                    <span className="card--location-name">
                        <img className="card--location-pin" src={pin} alt="Location pin icon"/>
                        {props.location.name}
                    </span>
                    <a className="card--location-link" href={props.location.mapsLink}>View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <span className="card--travel-duration">{`${props.date.start} - ${props.date.end}`}</span>
                <p className="card--description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}