export const mediaPath = (src) => {
  if (!src) return src;

  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("//") ||
    src.startsWith("data:") ||
    src.startsWith("blob:")
  ) {
    return src;
  }

  const base = import.meta.env.BASE_URL || "/";
  if (base !== "/" && src.startsWith(base)) {
    return src;
  }

  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedSrc = src.startsWith("/") ? src.slice(1) : src;

  return `${normalizedBase}${normalizedSrc}`;
};
