import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
//import Nav from "./components/Nav";

function App() {
  return (
    <div className="px-16">
      <Header />
      <div className="w-full px-24 pt-24">
        <Home />
      </div>
    </div>
  );
}

export default App;
