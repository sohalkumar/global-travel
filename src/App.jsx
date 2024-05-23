import { useEffect } from "react";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavigationBar from "./components/Navbar/NavigationBar";
import Travel from "./components/Travel/Travel";

function App() {
  useEffect(() => {
    document.re;
  }, []);

  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Travel />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
