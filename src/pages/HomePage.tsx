import { Link } from "react-router-dom";
import CountdownTimer from "../components/Countdown";

function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "20px", marginTop: "50px" }}>
      <div>
        <h1 style={{ fontSize: "80px" }}>VIANCA</h1>
        <h1 style={{ fontSize: "80px" }}>&</h1>
        <h1 style={{ fontSize: "80px" }}>ERVIN</h1>
      </div>
      <div>
        <h3 style={{ letterSpacing: "4px" }}>JUNE 12, 2025</h3>
        <h4>ABBAZIA SAN PIETRO IN VALLE, FERENTILLO, ITALY</h4>
        <h5>
          <CountdownTimer />
        </h5>

        <Link to="rsvp">
          <button className="primary-button">RSVP</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
