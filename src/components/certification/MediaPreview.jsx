import { useEffect, useRef, useState } from "react";
import { mediaPath } from "./mediaPath";

// Cards have aspect-ratio 16/9 (≈1.78). If a source is meaningfully
// narrower than that (square / portrait), `cover` would crop content,
// so we swap to `contain` and let it letterbox cleanly.
const WIDESCREEN_THRESHOLD = 1.6;

const MediaPreview = ({ media, alt, className = "" }) => {
  const ref = useRef(null);
  const [fit, setFit] = useState("cover");

  useEffect(() => {
    if (!ref.current || media?.type !== "video") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const el = ref.current;
        if (!el) return;

        if (entry.isIntersecting) {
          el.currentTime = 0;
          el.play().catch(() => {});
        } else {
          el.pause();
          el.currentTime = 0;
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    };
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
    const src = mediaPath(media.src);

    return (
      <img
        src={src}
        alt={alt}
        className={`work__media ${className}`}
        style={{ objectFit: fit }}
        onLoad={handleImgLoad}
        loading="lazy"
      />
    );
  }

  const src = mediaPath(media.src);

  return (
    <video
      ref={ref}
      className={`work__media ${className}`}
      style={{ objectFit: fit }}
      src={src}
      muted
      loop
      playsInline
      preload="auto"
      onLoadedMetadata={handleVideoMeta}
      aria-label={alt}
    />
  );
};

export default MediaPreview;
