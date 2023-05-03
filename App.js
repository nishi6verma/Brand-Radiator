import "./App.css";
import HamburgerMenu from "./components/HamburgerMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Admin from "./components/Pages/Admin";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <HamburgerMenu />
        <Home />
        <About />
        <Contact />
        <Admin />

        <div className="pages">
          <Routes>
            <Route exact path="/home" element={Home} />
            <Route path="/about" element={About} />
            <Route path="/admin" element={Admin} />
            <Route path="/contact" element={Contact} />
          </Routes>

        </div>
      </Router>
      <footer className="footer">
    <p className="text-footer">
        Copyright ©-All rights are reserved
    </p>
</footer>
    </>
  );
}

export default App;
