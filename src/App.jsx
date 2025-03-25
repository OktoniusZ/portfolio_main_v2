import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Footer from "./pages/Footer";
import About from "./pages/About";
import CurrentProject from "./pages/CurrentProject";

// import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Project />
        <CurrentProject />
        <Footer />
      </div>
    </>
  );
}

export default App;
