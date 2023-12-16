import "./App.css";
import About from "./components/About";
// import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="relative font-roboto">
      <Nav />
      <div className="w-full px-24 pt-24">
        <About/>
      </div>
    </div>
  );
}

export default App;
