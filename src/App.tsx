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

function App() {
  return (
    <>
      <img src="/flowers/1.png" className="flowers flower1" />
      <img src="/flowers/2.png" className="flowers flower2" />
      <img src="/flowers/3.png" className="flowers flower3" />
      <img src="/flowers/4.png" className="flowers flower4" />
      <img src="/flowers/5.png" className="flowers flower5" />
      {/* <img src="/flowers/6.png" className="flowers flower6" /> */}
      <div className="container">
        <img src="/top-flowers.png" className="flowers top-flowers" />
        <div className="row">
          <div className="twelve column">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="twleve columns">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="venue" element={<VenuePage />} />
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
    </>
  );
}

export default App;
