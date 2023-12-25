import "./App.css";
import FifthBlock from "./components/Skills";
import FirstBlock from "./components/Home";
import Footer from "./components/Footer";
import FourthBlock from "./components/Experience";
import NavBar from "./components/NavBar";
import SecondBlock from "./components/About";
import SixthBlock from "./components/Contact";
import ThirdBlock from "./components/Sevices";
import Portfolio from "./components/Portfolio";
import TypingAnimation from "./components/Animation";

function App() {
  return (
    <>
      <NavBar />
      <FirstBlock />
      {/* <TypingAnimation /> */}
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock />
      <Portfolio />
      <SixthBlock />
      <Footer />
    </>
  );
}

export default App;
