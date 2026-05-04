import MediaPreview from "./MediaPreview";

const WorkItems = ({ item, onOpen }) => {
  return (
    <article className="work__card">
      <button
        type="button"
        className="work__media-wrap"
        onClick={() => onOpen(item)}
        aria-label={`Open details for ${item.project}`}
      >
        <MediaPreview media={item.media} alt={item.project} />
        {item.featured && <span className="work__badge">Featured</span>}
      </button>

      <div className="work__body">
        <h3
          className="work__title"
          dangerouslySetInnerHTML={{ __html: item.title }}
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
            Details
            <i className="uil uil-arrow-right"></i>
          </button>
          <a
            href={item.repository}
            className="work__btn work__btn--ghost"
            target="_blank"
            rel="noreferrer"
            aria-label={`${item.project} on GitHub`}
          >
            <i className="uil uil-github-alt"></i>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default WorkItems;
