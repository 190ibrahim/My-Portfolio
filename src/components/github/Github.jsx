import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import "./github.css";

const USERNAME = "190ibrahim";
const START_YEAR = 2021;
const currentYear = new Date().getFullYear();
const YEARS = Array.from(
  { length: currentYear - START_YEAR + 1 },
  (_, i) => currentYear - i
);

const Github = () => {
  // null = default rolling "last year" view; otherwise a specific calendar year
  const [year, setYear] = useState(null);
  const activeYear = year ?? currentYear;
  const calendarYear = year ?? "last";
  const fallbackYear = year ?? currentYear;

  return (
    <section className="github section" id="github">
      <h2 className="section__title">GitHub Activity</h2>
      <span className="section__subtitle">A snapshot of my open-source work</span>

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
            errorMessage="No GitHub activity for this year."
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
        >
          <i className="bx bxl-github"></i>
          View Full Profile
        </a>
      </div>
    </section>
  );
};

export default Github;
