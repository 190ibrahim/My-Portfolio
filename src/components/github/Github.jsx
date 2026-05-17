import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GitHubCalendar } from "react-github-calendar";
import "./github.css";
import { trackEvent } from "../../utils/track";

const USERNAME = "190ibrahim";
const START_YEAR = 2021;
const currentYear = new Date().getFullYear();
const YEARS = Array.from(
  { length: currentYear - START_YEAR + 1 },
  (_, i) => currentYear - i
);

const Github = () => {
  const { t, i18n } = useTranslation();
  const isDe = i18n.language?.startsWith("de");
  // null = default rolling "last year" view; otherwise a specific calendar year
  const [year, setYear] = useState(null);
  const activeYear = year ?? currentYear;
  const calendarYear = year ?? "last";
  const fallbackYear = year ?? currentYear;

  const calendarLabels = isDe
    ? {
        months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        weekdays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        totalCount:
          calendarYear === "last"
            ? "{{count}} Beiträge im letzten Jahr"
            : "{{count}} Beiträge im Jahr {{year}}",
        legend: { less: "weniger", more: "mehr" },
      }
    : undefined;

  return (
    <section className="github section" id="github">
      <h2 className="section__title">{t("github.title")}</h2>
      <span className="section__subtitle">{t("github.subtitle")}</span>

      <div className="github__container container">
        <div className="github__years" role="tablist">
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              role="tab"
              aria-selected={y === activeYear}
              className={`github__year-btn${y === activeYear ? " github__year-btn--active" : ""}`}
              onClick={() => setYear(y)}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="github__chart-wrap">
          <GitHubCalendar
            username={USERNAME}
            year={calendarYear}
            colorScheme="light"
            showWeekdayLabels
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            errorMessage={isDe ? "Keine GitHub-Aktivität für dieses Jahr." : "No GitHub activity for this year."}
            labels={calendarLabels}
            transformData={(data) => {
              if (data && data.length > 0) return data;
              const days = [];
              const start = new Date(`${fallbackYear}-01-01`);
              const end = new Date(`${fallbackYear}-12-31`);
              for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                days.push({
                  date: d.toISOString().slice(0, 10),
                  count: 0,
                  level: 0,
                });
              }
              return days;
            }}
          />
        </div>

        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="button button--flex github__link"
          onClick={() => trackEvent("outbound-github", "GitHub clicked from activity section")}
        >
          <i className="bx bxl-github"></i>
          {t("github.viewProfile")}
        </a>
      </div>
    </section>
  );
};

export default Github;
