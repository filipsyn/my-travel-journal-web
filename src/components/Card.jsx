import pin from "../assets/location-pin.svg"
import mountFuji from "../assets/mount-fuji.jpeg"

export default function Card() {
    return (
        <div className="card">
            <img className="card--photo" src={mountFuji} alt=""/>
            <div className="card--details">
                <div className="card--location">
                    <span className="card--location-name">
                        <img className="card--location-pin" src={pin} alt="Location pin icon"/>
                        Location
                    </span>
                    <a className="card--location-link" href="#">View on Google Maps</a>
                </div>
                <h2 className="card--title">Title</h2>
                <span className="card--travel-duration">26.4.2022 - 1.5.2022</span>
                <p className="card--description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at commodi cum cumque, doloribus
                    expedita nesciunt officia possimus praesentium, quae rem repudiandae sint, voluptate. Labore optio
                    placeat reprehenderit similique voluptatibus?
                </p>
            </div>
        </div>
    )
}