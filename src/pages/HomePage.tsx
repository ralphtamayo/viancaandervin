import { Link } from "react-router-dom";
import CountdownTimer from "../components/Countdown";

import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homepage-container">
      <div>
        <h1 style={{ fontSize: "5em" }}>VIANCA</h1>
        <h1 style={{ fontSize: "5em" }}>&</h1>
        <h1 style={{ fontSize: "5em" }}>ERVIN</h1>
      </div>
      <div>
        <h3 style={{ letterSpacing: "4px" }}>JUNE 12, 2025</h3>
        <h4>ABBAZIA SAN PIETRO IN VALLE, FERENTILLO, ITALY</h4>
        <CountdownTimer />

        <Link to="rsvp">
          <button className="primary-button">RSVP</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
