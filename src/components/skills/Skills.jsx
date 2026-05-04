import "./skills.css";
import { skillCategories } from "./skillsData";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Grouped by how I use them</span>

      <div className="skills__container container">
        {skillCategories.map((cat) => (
          <article className="skills__card" key={cat.title}>
            <header className="skills__card-header">
              <h3 className="skills__card-title">{cat.title}</h3>
              {cat.note && <p className="skills__card-note">{cat.note}</p>}
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
