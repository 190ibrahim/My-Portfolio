import { useState } from "react";
import "./portfolio.css";
import PortfolioData from "./portfolioData ";
const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div className="services__container container grid">
        {PortfolioData.map((item, index) => (
          <div className="services__content" key={index}>
            <div>
              <i className={`uil ${item.icon} services__icon`}></i>
              <h3
                className="services__title"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
            </div>

            <span
              className="services__button"
              onClick={() => toggleTab(index + 1)}
            >
              More details
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === index + 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">{item.project}</h3>
                <p className="services__modal-description">
                  {item.description}
                </p>
                <ul className="services__modal-services grid">
                  {item.features.map((feature, featureIndex) => (
                    <li className="services__modal-service" key={featureIndex}>
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="project__buttons">
                  <a
                    href={item.repository}
                    className="project__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                    <i className="uil uil-external-link-alt services__button-icon"></i>
                  </a>
                  {item.demoURL && (
                    <a
                      href={item.demoURL}
                      className="project__button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Demo
                      <i className="uil uil-external-link-alt services__button-icon"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
