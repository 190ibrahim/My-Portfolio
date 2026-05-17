import { useTranslation } from "react-i18next";

const Data = () => {
  const { t } = useTranslation();
  return (
    <div className="home__data">
      <h1 className="home__title">
        <span className="home__title-text">
          {t("home.title")}{" "}
          <span className="home__hand" aria-hidden="true">👋</span>
        </span>
      </h1>

      <h3 className="home__subtitle">{t("home.subtitle")}</h3>

      <p className="home__description">{t("home.description")}</p>
    </div>
  );
};

export default Data;
