import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { mediaPath } from "./mediaPath";

const tr = (val, lang) => {
  if (val && typeof val === "object" && (val.en || val.de)) {
    return val[lang] ?? val.en;
  }
  return val;
};

const WorkModal = ({ item, onClose }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("de") ? "de" : "en";

  useEffect(() => {
    if (!item) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  const mediaSrc = mediaPath(item.media?.src);
  const posterSrc = mediaPath(item.media?.poster);
  const projectName = tr(item.project, lang);
  const description = tr(item.description, lang);
  const role = tr(item.role, lang);

  return (
    <div
      className="work__modal active-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={projectName}
    >
      <div
        className="work__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="work__modal-close"
          aria-label={t("work.close")}
        >
          <i className="uil uil-times"></i>
        </button>

        <div className="work__modal-media">
          {item.media?.type === "video" ? (
            <video
              src={mediaSrc}
              poster={posterSrc}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          ) : item.media?.type === "image" ? (
            <img src={mediaSrc} alt={projectName} />
          ) : (
            <div className="work__media work__media--placeholder">
              <i className="uil uil-play-circle"></i>
              <span>{t("work.demoSoon")}</span>
            </div>
          )}
        </div>

        <div className="work__modal-body">
          <header className="work__modal-header">
            <h3 className="work__modal-title">{projectName}</h3>
            <p className="work__modal-meta">
              <span>{item.year}</span>
              <span className="work__dot" aria-hidden="true">
                •
              </span>
              <span>{role}</span>
            </p>
          </header>

          <p className="work__modal-description">{description}</p>

          <ul
            className="work__stack work__stack--modal"
            aria-label="Tech stack"
          >
            {item.stack.map((tech) => (
              <li key={tech} className="work__chip">
                {tech}
              </li>
            ))}
          </ul>

          <h4 className="work__modal-subtitle">{t("work.highlights")}</h4>
          <ul className="work__modal-features">
            {item.features.map((f, i) => (
              <li key={i}>
                <i className="uil uil-check-circle"></i>
                <span>{tr(f, lang)}</span>
              </li>
            ))}
          </ul>

          <div className="work__modal-actions">
            <a
              href={item.repository}
              className="work__btn work__btn--primary"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-github-alt"></i>
              {t("work.viewOnGithub")}
            </a>
            {item.demoURL && (
              <a
                href={item.demoURL}
                className="work__btn work__btn--ghost"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-external-link-alt"></i>
                {t("work.liveDemo")}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
