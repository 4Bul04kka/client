import Header from "./components/ui/header/Header";
import Homepage from "./components/pages/homepage/Homepage";
import Footer from "./components/ui/footer/Footer";

import Services from "./components/pages/services/Services";
import Portfolio from "./components/pages/portfolio/Portfolio";
import About from "./components/pages/about/About";
import Communication from "./components/pages/communication/Communication";
import Events from "./components/pages/events/Events";

import Corp_site from "./components/services/Corp_site";
import Marketplace from "./components/services/Marketplace";
import Landing from "./components/services/Landing";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={[<Homepage />]} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/communication' element={<Communication />} />
        <Route path='/events' element={<Events />} />
        <Route path='/corp_site' element={<Corp_site />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
