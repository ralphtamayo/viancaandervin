import { GlassMagnifier, MagnifierContainer } from "react-image-magnifiers";
import "./DressPage.scss";
import useWindowDimensions from "../hooks/useWindowDimensions";

function DressPage({ isOverlayDisplayed }: { isOverlayDisplayed: boolean }) {
  const { width } = useWindowDimensions();

  return (
    <div className="dress-container">
      <div className="dress-desc">
        <p>
          We'd love to see our family and friends get dressed up for our big
          day. Dress code is cocktail attire and our color theme is sunset rust.
        </p>
        <strong>LADIES: </strong>
        <p>
          We invite you to draw inspiration from sunset hues—think warm oranges,
          dusty pinks and golden yellows. Opt for luminous silks, floaty
          chiffons, and other soft flowing textures. Or reach for joyful prints,
          romantic ruffles and shimmering details for an elevated statement.
        </p>
        <p>
          As our venue features grassy areas, we kindly request that you avoid
          stilettos. Instead, opt for sturdy block heels, wedges or consider
          using heel stoppers for added stability and comfort.
        </p>
        <p>We can't wait to celebrate this special day with you in style!</p>
        <strong>GENTLEMEN: </strong>
        <p>
          We may be fans of variety but there's absolutely nothing like seeing a
          group of men in that classic tux.
        </p>
      </div>
      <img src="/dress-color.png" className="dress-color" />
      <MagnifierContainer autoInPlace={true}>
        <GlassMagnifier
          className="input-position dress-code"
          imageSrc="/dress.png"
          allowOverflow={true}
          magnifierSize={width < 480 ? "70%" : "50%"}
          square={true}
          style={{
            zIndex: isOverlayDisplayed ? "-1" : "0",
          }}
        />
      </MagnifierContainer>
    </div>
  );
}

export default DressPage;
