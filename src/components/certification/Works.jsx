import { useMemo, useState } from "react";
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

  const filtered = useMemo(() => {
    if (active === CATEGORIES.ALL) return projectsData;
    return projectsData.filter((p) => p.category === active);
  }, [active]);

  const handleOpen = (item) => {
    setSelected(item);
    trackEvent(`project-open-${item.id}`, `Opened: ${item.project}`);
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

      <WorkModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Works;
