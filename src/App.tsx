import "./App.scss";
import Navbar from "./components/Navbar";

import { Outlet, Route, Routes } from "react-router-dom";
import VenuePage from "./pages/VenuePage";
import HomePage from "./pages/HomePage";
import RsvpPage from "./pages/RsvpPage";
import DressPage from "./pages/DressPage";
import RegistryPage from "./pages/RegistryPage";
import FaqPage from "./pages/FaqsPage";
import OrderOfTheDayPage from "./pages/OrderOfTheDayPage";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isOverlayDisplayed, setIsOverlayDisplayed] = useState(false);

  return (
    <div className="app-container">
      <ScrollToTop />
      <div className="container">
        <img src="/top-flowers.png" className="flowers top-flowers" />
        <div className="row">
          <div className="twelve column">
            <Navbar
              isOverlayDisplayed={isOverlayDisplayed}
              setIsOverlayDisplayed={setIsOverlayDisplayed}
            />
          </div>
        </div>
        <div className="row">
          <div className="twleve columns">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="venue"
                element={<VenuePage isOverlayDisplayed={isOverlayDisplayed} />}
              />
              <Route path="rsvp" element={<RsvpPage />} />
              <Route path="dress" element={<DressPage />} />
              <Route path="order" element={<OrderOfTheDayPage />} />
              <Route path="registry" element={<RegistryPage />} />
              <Route path="faq" element={<FaqPage />} />
            </Routes>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
