import "./css/App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import UpcomingEvents from "./pages/UpcomingEvents";
import PastEvents from "./pages/PastEvents";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
