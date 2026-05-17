import { useTranslation } from "react-i18next";
import MediaPreview from "./MediaPreview";

const tr = (val, lang) => {
  if (val && typeof val === "object" && (val.en || val.de)) {
    return val[lang] ?? val.en;
  }
  return val;
};

const WorkItems = ({ item, onOpen }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("de") ? "de" : "en";
  const title = tr(item.title, lang);
  const projectName = tr(item.project, lang);
  return (
    <article className="work__card">
      <button
        type="button"
        className="work__media-wrap"
        onClick={() => onOpen(item)}
        aria-label={`Open details for ${projectName}`}
      >
        <MediaPreview media={item.media} alt={projectName} />
        {item.featured && <span className="work__badge">{t("work.featured")}</span>}
      </button>

      <div className="work__body">
        <h3
          className="work__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <ul className="work__stack" aria-label="Tech stack">
          {item.stack.slice(0, 4).map((tech) => (
            <li key={tech} className="work__chip">
              {tech}
            </li>
          ))}
          {item.stack.length > 4 && (
            <li className="work__chip work__chip--more">
              +{item.stack.length - 4}
            </li>
          )}
        </ul>

        <div className="work__actions">
          <button
            type="button"
            className="work__btn work__btn--primary"
            onClick={() => onOpen(item)}
          >
            {t("work.details")}
            <i className="uil uil-arrow-right"></i>
          </button>
          <a
            href={item.repository}
            className="work__btn work__btn--ghost"
            target="_blank"
            rel="noreferrer"
            aria-label={`${projectName} on GitHub`}
          >
            <i className="uil uil-github-alt"></i>
            {t("work.github")}
          </a>
        </div>
      </div>
    </article>
  );
};

export default WorkItems;
