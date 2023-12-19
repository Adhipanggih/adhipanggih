import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
// import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="relative font-roboto">
      <Nav />
      <div className="w-full lg:px-72 pt-24">
        <div className="w-full lg:h-[1px] bg-black lg:mb-8"></div>
        <Home />
        <div className="w-full lg:h-[1px] bg-black mb-8 lg:mt-8"></div>
        <About />
      </div>
    </div>
  );
}

export default App;
