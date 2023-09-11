import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <h1 className="text-2xl"></h1>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
