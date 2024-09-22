import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useCallback, useState } from "react";

import "./Navbar.scss";

function Navbar() {
  const { pathname: currentPath } = useLocation();
  const [isOverlayDisplayed, setIsOverlayDisplayed] = useState(false);

  const isActive = useCallback(
    (path: string) => currentPath === path,
    [currentPath]
  );

  const handleToggleOverlay = useCallback(
    () => setIsOverlayDisplayed(!isOverlayDisplayed),
    [isOverlayDisplayed]
  );

  return (
    <div className="navbar">
      <div className="navbar-large">
        <h1 className="header-text">We Do</h1>
        <div className="navbar-links">
          <Link to="" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
          <Link to="venue" className={isActive("/venue") ? "active" : ""}>
            Venue
          </Link>
          <Link to="rsvp" className={isActive("/rsvp") ? "active" : ""}>
            RSVP
          </Link>
          <Link to="dress" className={isActive("/dress") ? "active" : ""}>
            Dress Code
          </Link>
          <Link to="registry" className={isActive("/registry") ? "active" : ""}>
            Registry
          </Link>
          <Link to="faq" className={isActive("/faq") ? "active" : ""}>
            FAQs
          </Link>
        </div>
      </div>
      <div className="navbar-small">
        <h3 className="navbar-small-header">Vianca & Ervin</h3>
        <div className="navbar-hamburger">
          <Hamburger
            onToggle={handleToggleOverlay}
            toggled={isOverlayDisplayed}
          />
        </div>
        <div
          id="overlay"
          style={{ display: isOverlayDisplayed ? "block" : "none" }}
        >
          <div className="navbar-hamburger-links">
            <Link
              to=""
              className={isActive("/") ? "active" : ""}
              onClick={handleToggleOverlay}
            >
              Home
            </Link>
            <Link
              to="venue"
              className={isActive("/venue") ? "active" : ""}
              onClick={handleToggleOverlay}
            >
              Venue
            </Link>
            <Link
              to="rsvp"
              className={isActive("/rsvp") ? "active" : ""}
              onClick={handleToggleOverlay}
            >
              RSVP
            </Link>
            <Link
              to="dress"
              className={isActive("/dress") ? "active" : ""}
              onClick={handleToggleOverlay}
            >
              Dress Code
            </Link>
            <Link
              to="registry"
              className={isActive("/registry") ? "active" : ""}
              onClick={handleToggleOverlay}
            >
              Registry
            </Link>
            <Link
              to="faq"
              className={isActive("/faq") ? "active" : ""}
              onClick={handleToggleOverlay}
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
