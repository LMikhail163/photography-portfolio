import './App.css';
import About from './components/About/About';
import Exhibitions from './components/Exhibitions/Exhibitions';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <About/>
      <Gallery/>
      <Exhibitions/>
      <Footer/>
    </div>
  );
}

export default App;
