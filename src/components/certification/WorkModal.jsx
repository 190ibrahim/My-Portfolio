import { useEffect } from "react";

const WorkModal = ({ item, onClose }) => {
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

  return (
    <div
      className="work__modal active-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.project}
    >
      <div
        className="work__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="work__modal-close"
          aria-label="Close"
        >
          <i className="uil uil-times"></i>
        </button>

        <div className="work__modal-media">
          {item.media?.type === "video" ? (
            <video
              src={item.media.src}
              poster={item.media.poster}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          ) : item.media?.type === "image" ? (
            <img src={item.media.src} alt={item.project} />
          ) : (
            <div className="work__media work__media--placeholder">
              <i className="uil uil-play-circle"></i>
              <span>Demo coming soon</span>
            </div>
          )}
        </div>

        <div className="work__modal-body">
          <header className="work__modal-header">
            <h3 className="work__modal-title">{item.project}</h3>
            <p className="work__modal-meta">
              <span>{item.year}</span>
              <span className="work__dot" aria-hidden="true">
                •
              </span>
              <span>{item.role}</span>
            </p>
          </header>

          <p className="work__modal-description">{item.description}</p>

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

          <h4 className="work__modal-subtitle">Highlights</h4>
          <ul className="work__modal-features">
            {item.features.map((f, i) => (
              <li key={i}>
                <i className="uil uil-check-circle"></i>
                <span>{f}</span>
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
              View on GitHub
            </a>
            {item.demoURL && (
              <a
                href={item.demoURL}
                className="work__btn work__btn--ghost"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-external-link-alt"></i>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
