import "./WeddingTransportPage.scss";

function WeddingTransportPage() {
  return (
    <div className="transport-container">
      <div className="transport-desc">
        <p>
          Hi! We're so excited to see you soon! To help make your arrival,
          wedding day, and departure go smoothly, we've put together a simple
          schedule for all your transfers and key times.
        </p>
        <p>
          Please take a look at the images below — you'll find your pick-up
          group and everything you need to know for <strong>June 11-13</strong>.
          We'll also message you soon with your assigned group and your point
          person.
        </p>
      </div>
      <img src="/transport.png" className="main-image" />
      {/* <MagnifierContainer autoInPlace={true}>
        <GlassMagnifier
          className="input-position"
          imageSrc="/transport.png"
          largeImageSrc={width < 480 ? "/transport.png" : "/transport.png"}
          allowOverflow={true}
          magnifierSize={width < 480 ? "70%" : "50%"}
          square={true}
          style={{
            zIndex: isOverlayDisplayed ? "-1" : "0",
          }}
        />
      </MagnifierContainer> */}
    </div>
  );
}

export default WeddingTransportPage;
