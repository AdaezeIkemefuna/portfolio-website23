import logo from "../assets/logo.png";

export default function Navigation() {
  return (
    <>
      <nav className="navigation">
        <section className="navigation__wrapper">
          <section className="navigation--left">
            <img src={logo} alt="my logo" className="navigation__logo" />
          </section>
          <section className="navigation--right">
            <a href="/">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About Me</a>
          </section>
        </section>
      </nav>
    </>
  );
}
