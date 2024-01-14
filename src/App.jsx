import "./App.css";
import FifthBlock from "./components/Skills";
import FirstBlock from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SecondBlock from "./components/About";
import SixthBlock from "./components/Contact";
import ThirdBlock from "./components/Sevices";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <>
      <NavBar />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FifthBlock />
      <Portfolio />
      <SixthBlock />
      <Footer />
    </>
  );
}

export default App;
