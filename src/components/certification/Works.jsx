import { useMemo, useState } from "react";

import { projectsData, projectsNav, CATEGORIES } from "./Data";
import WorkItems from "./WorkItems";
import WorkModal from "./WorkModal";

const Works = () => {
  const [active, setActive] = useState(CATEGORIES.ALL);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (active === CATEGORIES.ALL) return projectsData;
    return projectsData.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <div className="work__filters" role="tablist" aria-label="Project categories">
        {projectsNav.map((tab) => {
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
          <WorkItems key={item.id} item={item} onOpen={setSelected} />
        ))}
      </div>

      <WorkModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Works;
