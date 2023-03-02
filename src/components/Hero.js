import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function Hero() {
  return (
    <>
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
          <button className="btn__header">
            <a href="google.com">download my resume</a>
          </button>
          <button className="btn__header">
            <a href="google.com">send an email</a>
          </button>
        </section>
        <section className="hero__bottom--right">
          <ul>
            <li>
              <a href="google.com">Github</a>
            </li>
            <li>
              <a href="google.com">Twitter</a>
            </li>
            <li>
              <a href="google.com">LinkedIn</a>
            </li>
          </ul>
        </section>
      </section>
      <aside className="arrow__icon">
        <IoIosArrowDropdownCircle color="#a7a7a7" size={60} />
      </aside>
    </>
  );
}
