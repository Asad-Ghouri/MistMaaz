import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import { HomePage } from './Pages/HomePage/HomePage';
import AOS from "aos";
AOS.init();

function App() {
  return (
    <div className="App">
     <Header/>
      <HomePage/>
     <Footer/>
    </div>
  );
}

export default App;
