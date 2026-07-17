import { useEffect } from "react";
import AOS from "aos";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="app-shell">
      <Sidebar />
      <Hero />
    </div>
  );
}

export default App;
