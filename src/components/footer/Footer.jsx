import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          <i className="bx bxs-leaf"></i> Ibrahim
        </h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="mailto:190ibrahimahmed@gmail.com"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-gmail"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ibrahim-ibrahim-937a7823a/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/190ibrahim"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169;  All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
