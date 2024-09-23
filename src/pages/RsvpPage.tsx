import { useCallback, useState } from "react";
import { useCreateRsvpMutation } from "../redux/rsvp.service";
import Modal from "react-modal";

import "./RsvpPage.scss";
import Spinner from "../components/Spinner";

Modal.setAppElement("#root");

function RsvpPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [decision, setDecision] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [createRsvp, { isLoading }] = useCreateRsvpMutation();

  const handleSubmit = useCallback(async () => {
    if (!firstName || !lastName) {
      setHasError(true);
      setErrorMessage("Please input your complete name.");
      setIsOpen(true);

      return;
    }

    const rsvpResponse = await createRsvp({ firstName, lastName, decision });
    const status = rsvpResponse?.data?.status;

    if (status === "success") {
      // Clear
      setFirstName("");
      setLastName("");

      setHasError(false);
      setIsOpen(true);
    } else {
      setHasError(true);
      setErrorMessage(
        "An issue was encountered during your RSVP. Please try again."
      );
    }
  }, [createRsvp, firstName, lastName, decision]);

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
        {isLoading ? (
          <>
            <Spinner />
            <p style={{ margin: 0 }}>
              {decision === "Accept"
                ? "Thanks for RSVPing! We're saving your spot..."
                : "Thank you for letting us know! Processing your RSVP..."}
            </p>
          </>
        ) : (
          <>
            <strong>
              <span>Please enter your first name and last name.</span>
              <p>
                You'll be able to RSVP for other guests in your party as well.
              </p>
            </strong>
            <div className="row">
              <div className="six columns">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="u-full-width"
                  type="text"
                  placeholder="Input your first name"
                  id="firstName"
                  value={firstName}
                  onChange={(evt) => setFirstName(evt.target.value)}
                />
              </div>
              <div className="six columns">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="u-full-width"
                  type="text"
                  placeholder="Input your last name"
                  id="lastName"
                  value={lastName}
                  onChange={(evt) => setLastName(evt.target.value)}
                />
              </div>
              <div className="twelve columns" style={{ marginTop: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <label>
                    <input
                      type="radio"
                      id="accept"
                      name="decision"
                      value="Accept"
                      onChange={(e) => setDecision(e.target.value)}
                      checked={decision === "Accept"}
                    />
                    <span> Accepts Gladly</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="decline"
                      name="decision"
                      value="Decline"
                      onChange={(e) => setDecision(e.target.value)}
                      checked={decision === "Decline"}
                    />
                    <span> Declines Regretfully</span>
                  </label>
                </div>
              </div>
              <label className="example-send-yourself-copy"></label>
              <div className="twelve columns" style={{ marginTop: "20px" }}>
                <button className="primary-button" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Modal
        isOpen={isOpen}
        style={{
          content: {
            padding: 0,
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "#FAE7D3",
          },
        }}
      >
        {hasError ? (
          <p style={{ padding: "20px", margin: 0 }}>{errorMessage}</p>
        ) : (
          <img src="/popup.png" width={400} />
        )}
        <div style={{ textAlign: "center", padding: "10px" }}>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default RsvpPage;
