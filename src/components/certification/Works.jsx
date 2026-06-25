import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { projectsData, CATEGORIES } from "./Data";
import WorkItems from "./WorkItems";
import WorkModal from "./WorkModal";
import { trackEvent } from "../../utils/track";

const Works = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(CATEGORIES.ALL);
  const [selected, setSelected] = useState(null);

  const tabs = [
    { name: t("work.filters.all"), value: CATEGORIES.ALL },
    { name: t("work.filters.robotics"), value: CATEGORIES.ROBOTICS },
    { name: t("work.filters.aiml"), value: CATEGORIES.AI_ML },
    { name: t("work.filters.software"), value: CATEGORIES.SOFTWARE },
  ];

  // Projects shown in the grid. Items flagged `hidden` are kept out of the
  // grid but can still be opened directly via a URL hash (e.g. for a QR code).
  const visibleProjects = useMemo(
    () => projectsData.filter((p) => !p.hidden),
    []
  );

  const filtered = useMemo(() => {
    if (active === CATEGORIES.ALL) return visibleProjects;
    return visibleProjects.filter((p) => p.category === active);
  }, [active, visibleProjects]);

  // Deep-linking: open a project's modal when the URL hash matches its slug,
  // e.g. https://190ibrahim.github.io/My-Portfolio/#msc-thesis
  // Runs on first load and whenever the hash changes.
  useEffect(() => {
    const openFromHash = () => {
      const slug = window.location.hash.replace(/^#/, "");
      if (!slug) return;
      const match = projectsData.find((p) => p.slug === slug);
      if (match) {
        setSelected(match);
        trackEvent(`project-open-link-${match.id}`, `Opened via link: ${match.slug}`);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const handleOpen = (item) => {
    setSelected(item);
    trackEvent(`project-open-${item.id}`, `Opened: ${item.project}`);
  };

  const handleClose = () => {
    setSelected(null);
    // Clear a project-slug hash so the modal doesn't re-open on refresh/back.
    const slug = window.location.hash.replace(/^#/, "");
    if (slug && projectsData.some((p) => p.slug === slug)) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  return (
    <>
      <div className="work__filters" role="tablist" aria-label="Project categories">
        {tabs.map((tab) => {
          const isActive = active === tab.value;
          return (
            <button
              key={tab.value}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.value)}
              className={`work__filter ${isActive ? "work__filter--active" : ""}`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      <div className="work__container container">
        {filtered.map((item) => (
          <WorkItems key={item.id} item={item} onOpen={handleOpen} />
        ))}
      </div>

      <WorkModal item={selected} onClose={handleClose} />
    </>
  );
};

export default Works;
