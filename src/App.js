import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/footer/Footer";

import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Communication from "./components/communication/Communication";
import Events from "./components/events/Events";

import Corp_site from "./components/services/Corp_site";
import Marketplace from "./components/services/Marketplace";
import Landing from "./components/services/Landing";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={[<Homepage />]} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/events" element={<Events />} />
        <Route path="/corp_site" element={<Corp_site />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
