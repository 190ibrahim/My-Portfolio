// Fire a custom event to both GoatCounter and Microsoft Clarity.
// Use kebab-case event names; they show up as paths in GoatCounter's
// "Events" tab and as custom events in Clarity.
export function trackEvent(name, label) {
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
