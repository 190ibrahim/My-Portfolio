// Fire a custom event to both GoatCounter and Microsoft Clarity.
// Visit the site with ?analytics=off to opt this browser out, or
// ?analytics=on to opt back in.
export function trackEvent(name, label) {
  if (window.portfolioAnalyticsDisabled) {
    return;
  }

  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({
      path: name,
      title: label || name,
      event: true,
    });
  }
  if (typeof window.clarity === "function") {
    window.clarity("event", name);
  }
}
