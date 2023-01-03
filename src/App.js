import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <section className="body">
      <header className="hero">
        <nav className="navigation">
          <section className="navigation__wrapper">
            <section className="navigation--left">
              <img src={logo} alt="my logo" className="navigation__logo" />
            </section>
            <section className="navigation--right">
              <a href="#">Home</a>
              <a href="#">Projects</a>
              <a href="#">About Me</a>
            </section>
          </section>
        </nav>

        <section className="hero__mid">
          <section className="hero__mid--left">
            <h1>hi, i'm adaeze ikemefuna</h1>
            <aside>
              Building Scalable <br /> frontend systems
            </aside>
          </section>
          <section className="hero__mid--right">
            <ul>
              <li>Software Engineer</li>
              <li>Content Writer</li>
            </ul>
          </section>
        </section>

        <section className="hero__bottom">
          <section className="hero__bottom--left">
            <h1>email</h1>
            <aside>
              <a href="#">hamsaikemefuna@gmail.com</a>
            </aside>
          </section>
          <section className="hero__bottom--right">
            <ul>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </section>
        </section>

        <section className="bg-animation">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </header>
    </section>
  );
}

export default App;
