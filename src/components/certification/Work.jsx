import { useTranslation } from "react-i18next";
import "./work.css";
import Works from "./Works";

const Work = () => {
  const { t } = useTranslation();
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">{t("work.title")}</h2>
      <span className="section__subtitle">{t("work.subtitle")}</span>

      <Works />
    </section>
  );
};

export default Work;
