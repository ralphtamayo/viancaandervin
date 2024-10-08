import { GlassMagnifier, MagnifierContainer } from "react-image-magnifiers";

import "./VenuePage.scss";
import useWindowDimensions from "../hooks/useWindowDimensions";

function VenuePage({ isOverlayDisplayed }: { isOverlayDisplayed: boolean }) {
  const { width } = useWindowDimensions();

  return (
    <div className="venue-container">
      <MagnifierContainer autoInPlace={true}>
        <GlassMagnifier
          className="input-position"
          imageSrc="/venue.png"
          largeImageSrc={width < 480 ? "/venue-large.png" : "/venue-large2.png"}
          allowOverflow={true}
          magnifierSize={width < 480 ? "70%" : "50%"}
          square={true}
          style={{
            zIndex: isOverlayDisplayed ? "-1" : "0",
          }}
        />
      </MagnifierContainer>
      {/* <img src="/venue.png" className="venue-map" /> */}

      <div className="venue-desc">
        <p>
          Àbbazia San Pietro is situated in Umbria, Italy. Often called the
          country's green heart, Umbria is known for its medieval hill towns,
          dense forests and local cuisine, particularly foraged truffles and
          wines.
        </p>

        <p>
          Between the Marmore Falls and Spoleto, amidst centuries-old forests
          and olive groves, hills and ancient forgotten villages, lies the
          Àbbazia San Pietro in Ferentillo.
        </p>

        <p>
          It was built in the 8th century by Faroaldo II, Duke of Spoleto, in
          the places where the hermits Lazzaro and Giovanni are said to have
          lived. According to a legend, the Duke of Spoleto saw in a dream the
          same Saint Peter who invited him to build a Benedictine monastery in
          the place of the present abbey.
        </p>

        <p>
          This beautiful abbey now houses a luxury hotel where Ervin and Vianca
          will celebrate the start of their forever.
        </p>
      </div>
    </div>
  );
}

export default VenuePage;
