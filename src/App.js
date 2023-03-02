import "./App.scss";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BgAnimation from "./components/BgAnimation";

function App() {
  return (
    <section className="body">
      <header className="hero">
        <Navigation />
        <Hero />
        <BgAnimation />
      </header>

      <div id="projects">projects</div>
      <div id="about">about</div>
    </section>
  );
}

export default App;
