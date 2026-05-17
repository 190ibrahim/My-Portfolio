import { useTranslation } from "react-i18next";

const LANGS = ["en", "de"];

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.startsWith("de") ? "de" : "en";

  const toggle = () => {
    const next = current === "en" ? "de" : "en";
    i18n.changeLanguage(next);
    document.documentElement.lang = next;
  };

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggle}
      aria-label={t("language.toggle")}
      title={t("language.toggle")}
    >
      {LANGS.map((l) => (
        <span
          key={l}
          className={`lang-toggle__opt${l === current ? " lang-toggle__opt--active" : ""}`}
        >
          {t(`language.${l}`)}
        </span>
      ))}
    </button>
  );
};

export default LanguageToggle;
