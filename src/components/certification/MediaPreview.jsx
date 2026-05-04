import { useEffect, useRef, useState } from "react";

// Cards have aspect-ratio 16/9 (≈1.78). If a source is meaningfully
// narrower than that (square / portrait), `cover` would crop content,
// so we swap to `contain` and let it letterbox cleanly.
const WIDESCREEN_THRESHOLD = 1.6;

const MediaPreview = ({ media, alt, className = "" }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [fit, setFit] = useState("cover");

  useEffect(() => {
    if (!ref.current || media?.type !== "video") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const el = ref.current;
        if (!el) return;
        if (entry.isIntersecting) {
          setInView(true);
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [media]);

  const handleVideoMeta = (e) => {
    const { videoWidth, videoHeight } = e.target;
    if (!videoWidth || !videoHeight) return;
    setFit(videoWidth / videoHeight < WIDESCREEN_THRESHOLD ? "contain" : "cover");
  };

  const handleImgLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    if (!naturalWidth || !naturalHeight) return;
    setFit(naturalWidth / naturalHeight < WIDESCREEN_THRESHOLD ? "contain" : "cover");
  };

  if (!media) {
    return (
      <div className={`work__media work__media--placeholder ${className}`}>
        <i className="uil uil-play-circle"></i>
        <span>Demo coming soon</span>
      </div>
    );
  }

  if (media.type === "image") {
    return (
      <img
        src={media.src}
        alt={alt}
        className={`work__media ${className}`}
        style={{ objectFit: fit }}
        onLoad={handleImgLoad}
        loading="lazy"
      />
    );
  }

  return (
    <video
      ref={ref}
      className={`work__media ${className}`}
      style={{ objectFit: fit }}
      src={inView ? media.src : undefined}
      data-src={media.src}
      poster={media.poster}
      muted
      loop
      playsInline
      preload="metadata"
      onLoadedMetadata={handleVideoMeta}
      aria-label={alt}
    />
  );
};

export default MediaPreview;
