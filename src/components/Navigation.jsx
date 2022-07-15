import globeIcon from "../assets/globe.svg"
export default function Navigation() {
    return (
        <nav>
            <img src={globeIcon} alt="Globe icon"/>
            <h1 className="nav--title">My travel journal</h1>
        </nav>
    )
}