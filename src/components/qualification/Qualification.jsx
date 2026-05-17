import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useTranslation } from "react-i18next";
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

// Pick the right localized value for fields stored as { en, de }
const tr = (val, lang) => {
  if (val && typeof val === "object" && (val.en || val.de)) {
    return val[lang] ?? val.en;
  }
  return val;
};


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
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("de") ? "de" : "en";

  return (
    <>
      {/* Education */}
      <section className="qualification section" id="qualification">
        <h2 className="section__title">{t("qualification.education.title")}</h2>
        <span className="section__subtitle">{t("qualification.education.subtitle")}</span>

        <div className="qualification__container container">
          <div className="qualification__sections">
            <div className="qualification__content qualification__content-active">
              <VerticalTimeline lineColor="var(--text-color)">
                {EducationData.map((element) => (
                  <VerticalTimelineElement
                    key={element.id}
                    date={element.date}
                    dateClassName="qualification__data"
                    icon={schoolIcon.icon}
                    iconStyle={schoolIcon.iconStyle}
                  >
                    <h3 className="qualification__title">{tr(element.title, lang)}</h3>
                    <div className="qualification__meta">
                      <span className="qualification__meta-item">
                        <i className="uil uil-university"></i>
                        {element.link ? (
                          <a href={element.link} target="_blank" rel="noreferrer" className="qualification__link">{tr(element.institution, lang)}</a>
                        ) : tr(element.institution, lang)}
                      </span>
                      <span className="qualification__meta-item">
                        <i className="uil uil-map-marker"></i>
                        {tr(element.location, lang)}
                      </span>
                    </div>
                    {element.scholarship && (
                      <span className="qualification__scholarship">
                        <i className="uil uil-award"></i>
                        {tr(element.scholarship, lang)}
                      </span>
                    )}
                  {Array.isArray(element.description) ? (
                    <ul className="qualification__description">
                      {element.description.map((point, i) => <li key={i}>{tr(point, lang)}</li>)}
                    </ul>
                  ) : (
                    <p className="qualification__description">{tr(element.description, lang)}</p>
                  )}
                  </VerticalTimelineElement>
                ))}
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

      {/* Experience */}
      <section className="qualification section" id="experience">
        <h2 className="section__title">{t("qualification.experience.title")}</h2>
        <span className="section__subtitle">{t("qualification.experience.subtitle")}</span>

        <div className="qualification__container container">
          <div className="qualification__sections">
            <div className="qualification__content qualification__content-active">
              <VerticalTimeline lineColor="var(--text-color)">
                {ExperienceData.map((element) => (
                  <VerticalTimelineElement
                    key={element.id}
                    date={element.date}
                    dateClassName="qualification__data"
                    icon={workIcon.icon}
                    iconStyle={workIcon.iconStyle}
                  >
                    <h3 className="qualification__title">{tr(element.title, lang)}</h3>
                    <div className="qualification__meta">
                      <span className="qualification__meta-item">
                        <i className="uil uil-briefcase-alt"></i>
                        {element.link ? (
                          <a href={element.link} target="_blank" rel="noreferrer" className="qualification__link">{tr(element.institution, lang)}</a>
                        ) : tr(element.institution, lang)}
                      </span>
                      <span className="qualification__meta-item">
                        <i className="uil uil-map-marker"></i>
                        {tr(element.location, lang)}
                      </span>
                    </div>
                  {Array.isArray(element.description) ? (
                    <ul className="qualification__description">
                      {element.description.map((point, i) => <li key={i}>{tr(point, lang)}</li>)}
                    </ul>
                  ) : (
                    <p className="qualification__description">{tr(element.description, lang)}</p>
                  )}
                  </VerticalTimelineElement>
                ))}
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
    </>
  );
};

export default Qualification;
