import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();
  return (
    <div className="home__info-list">
      <div className="home__info-item">
        <i className="bx bxs-briefcase home__info-icon"></i>
        <p className="home__info-text">{t("home.info.role")}</p>
      </div>

      <div className="home__info-item">
        <i className="bx bxs-map home__info-icon"></i>
        <p className="home__info-text">{t("home.info.location")}</p>
      </div>

      <div className="home__info-item">
        <i className="bx bxs-paper-plane home__info-icon"></i>
        <p className="home__info-text">{t("home.info.relocation")}</p>
      </div>
    </div>
  );
};

export default Info;
