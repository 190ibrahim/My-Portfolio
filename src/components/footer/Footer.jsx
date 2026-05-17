import "./footer.css";
import { useTranslation } from "react-i18next";
import { trackEvent } from "../../utils/track";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          <i className="bx bxs-leaf"></i> Ibrahim
        </h1>

        <ul className="footer__list">
          <li>
            <a href="#experience" className="footer__link">
              {t("footer.experience")}
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
            onClick={() => trackEvent("outbound-email", "Email clicked from footer")}
          >
            <i className="bx bxl-gmail"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ibrahim-ibrahim-937a7823a/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("outbound-linkedin", "LinkedIn clicked from footer")}
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/190ibrahim"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("outbound-github", "GitHub clicked from footer")}
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          {t("footer.copyright")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
