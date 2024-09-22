import "./DressPage.scss";

function DressPage() {
  return (
    <div className="dress-container">
      <div className="dress-desc">
        <p>
          We'd love to see our family and friends get dressed up for our big
          day. Dress code is cocktail attire and our color theme is sunset rust.
        </p>
        <strong>LADIES: </strong>
        <p>
          Ladies you can wear midi or floor length dresses. Get inspired by
          these beautiful sunset tones.
        </p>
        <strong>GENTLEMEN: </strong>
        <p>
          Gents - we may be fans of variety but there's absolutely nothing like
          seeing a group of groomsmen in that classic tux.
        </p>
        <p>
          We can't wait to capture everlasting moments with you in your fabulous
          outfits.
        </p>
      </div>
      <img src="/dress-color.png" className="dress-color" />
      <img src="/dress.png" className="dress-code" />
    </div>
  );
}

export default DressPage;
