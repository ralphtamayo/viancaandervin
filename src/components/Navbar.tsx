import { Link, useLocation } from "react-router-dom";

import "./Navbar.scss";
import { useCallback } from "react";

function Navbar() {
  const { pathname: currentPath } = useLocation();

  const isActive = useCallback(
    (path: string) => currentPath === path,
    [currentPath]
  );

  return (
    <div className="navbar">
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
  );
}

export default Navbar;
