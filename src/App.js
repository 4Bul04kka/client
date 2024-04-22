import Header from './components/header/Header'
import Dev_block from './components/main_page/Dev_block';
import News_block from './components/main_page/News_block';
import Pluses from './components/main_page/Pluses';
import About_us from './components/main_page/About_us';
import Footer from './components/footer/Footer'

import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Communication from './components/communication/Communication'
import Events from './components/events/Events'


import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={[<Dev_block/>,<News_block/>,<Pluses/>,<About_us/>]}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/communication" element={<Communication/>}/>
          <Route path="/events" element={<Events/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;