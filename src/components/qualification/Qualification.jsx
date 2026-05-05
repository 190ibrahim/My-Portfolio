import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
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
  return (
    <>
      {/* Education */}
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Education</h2>
        <span className="section__subtitle">My academic background</span>

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
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">My professional journey</span>

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
