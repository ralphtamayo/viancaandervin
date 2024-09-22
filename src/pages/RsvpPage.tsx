import { useCallback } from "react";
import "./RsvpPage.scss";

function RsvpPage() {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <div className="rsvp-container">
      <div className="rsvp-desc">
        <p>
          We completely understand the cost to travel and take time off work may
          not be achievable for some. Please join us if you are able, but we
          will gladly accept your warm wishes from afar!
        </p>
        <p>
          For those celebrating with us in Umbria on our wedding day,
          accomodation on the 11th and 12th of June will be shouldered by the
          couple as our way of saying thank you for gracing us with your
          presence.
        </p>

        <strong>RSVP Deadline Date: October 25, 2024</strong>
      </div>
      <div className="rsvp-form">
        <strong>
          <span>Please enter your first name and last name.</span>
          <p>You'll be able to RSVP for other guests in your party as well.</p>
        </strong>
        <div className="row">
          <div className="six columns">
            <label htmlFor="firstName">First Name</label>
            <input
              className="u-full-width"
              type="text"
              placeholder="Input your first name"
              id="firstName"
            />
          </div>
          <div className="six columns">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="u-full-width"
              type="text"
              placeholder="Input your last name"
              id="lastName"
            />
          </div>
          <div className="twelve columns" style={{ marginTop: "20px" }}>
            <button className="primary-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RsvpPage;
