import "./WelcomeDinnerPage.scss";
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";
import { useState } from "react";

function WelcomeDinnerPage() {
  const [images] = useState([
    { original: "/dinner-cover.jpeg" },
    { original: "/dinner-attire.jpeg" },
  ]);
  return (
    <div className="dinner-container">
      <div className="dinner-desc">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default WelcomeDinnerPage;
