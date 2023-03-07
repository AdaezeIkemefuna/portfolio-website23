import logo from "../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";
export default function Navigation() {
  const menuRef = useRef();

  const toggleMenu = () => {
    menuRef.current.classList.toggle("mobile");
  };
  return (
    <>
      <nav className="navigation">
        <section className="navigation__wrapper" ref={menuRef}>
          <section className="navigation--left">
            <img src={logo} alt="my logo" className="navigation__logo" />
          </section>

          <section className="navigation--right">
            <a href="/">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About Me</a>
          </section>

          <section className="menu__open" onClick={toggleMenu}>
            <AiOutlineClose size={20} className="menu__close" />
            <BiMenuAltRight size={20} />
          </section>
        </section>
      </nav>
    </>
  );
}
