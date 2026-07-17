import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1800,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section light-background">
      <img src="/images/hero.jpg" alt="Hero background" />

      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <h2>Kan Sokhavathana</h2>
        <p>
          I&apos;m <span ref={typedElement} className="typed"></span>
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          ></span>
        </p>

        <div className="social-links">
          <a href="#">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#">
            <i className="bi bi-skype"></i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
