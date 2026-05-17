import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./header.css";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const { t } = useTranslation();

  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const items = [
    { href: "#home", icon: "uil-estate", label: t("nav.home") },
    { href: "#qualification", icon: "uil-graduation-cap", label: t("nav.education") },
    { href: "#experience", icon: "uil-briefcase-alt", label: t("nav.experience") },
    { href: "#portfolio", icon: "uil-scenery", label: t("nav.portfolio") },
    { href: "#skills", icon: "uil-file-alt", label: t("nav.skills") },
    { href: "#contact", icon: "uil-message", label: t("nav.contact") },
  ];

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <i className="bx bxs-leaf"></i> Ibrahim
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {items.map((item) => (
              <li key={item.href} className="nav__item">
                <a
                  href={item.href}
                  onClick={() => setActiveNav(item.href)}
                  className={
                    activeNav === item.href ? "nav__link active-link" : "nav__link"
                  }
                >
                  <i className={`uil ${item.icon} nav__icon`}></i> {item.label}
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <LanguageToggle />

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
