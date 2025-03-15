import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Footer from "./pages/Footer";

// import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Experience />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
