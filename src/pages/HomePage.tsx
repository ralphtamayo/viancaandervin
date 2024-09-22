import { Link } from "react-router-dom";
import CountdownTimer from "../components/Countdown";

import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homepage-container">
      <img
        src="https://images.zola.com/4d661232-838e-417a-9654-aba731cd14c9"
        className="flower flower1"
      />
      <img
        src="https://images.zola.com/808a5857-6fee-43df-afaf-d2ae4697343f"
        className="flower flower2"
      />
      <img
        src="https://images.zola.com/9b59a271-67f9-4a0f-acc0-3f523b930a23?w=1000"
        className="flower flower3"
      />
      <img
        src="https://images.zola.com/5ed53253-e3b6-4536-bd24-fee6e6879a7b?w=500"
        className="flower flower4"
      />
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
