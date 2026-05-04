import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useState } from "react";
import "react-vertical-timeline-component/style.min.css";
import EducationData from "./EducationData";
import ExperienceData from "./ExperienceDataData";
import "./qualification.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faGraduationCap,
  faStar,
} from "@fortawesome/free-solid-svg-icons";


const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: '#fff', color: 'black' },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faGraduationCap} />,
  iconStyle: { background: "#fff", color: "black" },
};

const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <VerticalTimeline lineColor=" var(--text-color)">
              {EducationData.map((element) => {
                return (
                  <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName="qualification__data"
                  icon={schoolIcon.icon}
                  iconStyle={schoolIcon.iconStyle}
                  >
                  <h3 className="qualification__title">{element.title}</h3>
                  <div className="qualification__meta">
                    <span className="qualification__meta-item">
                      <i className="uil uil-university"></i>
                      {element.link ? (
                        <a href={element.link} target="_blank" rel="noreferrer" className="qualification__link">{element.institution}</a>
                      ) : element.institution}
                    </span>
                    <span className="qualification__meta-item">
                      <i className="uil uil-map-marker"></i>
                      {element.location}
                    </span>
                  </div>
                  {element.scholarship && (
                    <span className="qualification__scholarship">
                      <i className="uil uil-award"></i>
                      {element.scholarship}
                    </span>
                  )}
                  <p className="qualification__description">{element.description}</p>
                  </VerticalTimelineElement>
                );
              })}
              <VerticalTimelineElement
                icon={starIcon.icon}
                iconStyle={starIcon.iconStyle}
                className="no-content"
              />
            </VerticalTimeline>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <VerticalTimeline lineColor=" var(--text-color)">
              {ExperienceData.map((element) => {
                return (
                  <VerticalTimelineElement
                    key={element.id}
                    date={element.date}
                    dateClassName="qualification__data"
                    icon={workIcon.icon}
                    iconStyle={workIcon.iconStyle}
                  >
                    <h3 className="qualification__title">{element.title}</h3>
                    <div className="qualification__meta">
                      <span className="qualification__meta-item">
                        <i className="uil uil-briefcase-alt"></i>
                        {element.link ? (
                          <a href={element.link} target="_blank" rel="noreferrer" className="qualification__link">{element.institution}</a>
                        ) : element.institution}
                      </span>
                      <span className="qualification__meta-item">
                        <i className="uil uil-map-marker"></i>
                        {element.location}
                      </span>
                    </div>
                    <p className="qualification__description">{element.description}</p>
                  </VerticalTimelineElement>
                );
              })}
              <VerticalTimelineElement
                icon={starIcon.icon}
                iconStyle={starIcon.iconStyle}
                className="no-content"
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
