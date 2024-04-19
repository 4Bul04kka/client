import Header from './components/header/Header'
import Dev_block from './components/main_page/Dev_block';
import News_block from './components/main_page/News_block';
import Pluses from './components/main_page/Pluses';
import About_us from './components/main_page/About_us';
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Dev_block/>
      <News_block/>
      <Pluses/>
      <About_us/>
      <Footer/>
    </div>
  );
}

export default App;