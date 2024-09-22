import { Link } from "react-router-dom";

import "./HomePage.scss";
import "flipdown";

import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    const unixDate = Math.floor(new Date("June 12, 2025").getTime() / 1000);
    // @ts-expect-error: FlipDown has no esmodule
    new FlipDown(unixDate).start();
  }, []);

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
        {/* <CountdownTimer /> */}
        <div
          id="flipdown"
          className="flipdown"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "40px 0px",
            zIndex: -999,
          }}
        ></div>

        <Link to="rsvp">
          <button className="primary-button">RSVP</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
