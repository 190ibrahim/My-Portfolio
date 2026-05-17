import { useTranslation } from "react-i18next";
import "./skills.css";
import { skillCategories } from "./skillsData";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t("skills.title")}</h2>
      <span className="section__subtitle">{t("skills.subtitle")}</span>

      <div className="skills__container container">
        {skillCategories.map((cat) => (
          <article className="skills__card" key={cat.key}>
            <header className="skills__card-header">
              <h3 className="skills__card-title">{t(`skills.categories.${cat.key}.title`)}</h3>
              <p className="skills__card-note">{t(`skills.categories.${cat.key}.note`)}</p>
            </header>
            <div className="skills__chips">
              {cat.skills.map((name) => (
                <span className="skill-chip" key={name}>
                  {name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
