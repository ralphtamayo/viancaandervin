import useWindowDimensions from "../hooks/useWindowDimensions";
import "./WelcomeDinnerPage.scss";

function WelcomeDinnerPage() {
  const { width } = useWindowDimensions();

  return (
    <div className="container">
      <div className="row">
        <div className={width <= 1024 ? "twelve columns" : "six columns"}>
          <img
            src="/dinner-cover.jpeg"
            className="invitation-image first-image"
          />
        </div>
        <div className={width <= 1024 ? "twelve columns" : "six columns"}>
          <img
            src="/dinner-attire.jpeg"
            className="invitation-image second-image"
          />
        </div>
      </div>
    </div>
  );
}

export default WelcomeDinnerPage;
