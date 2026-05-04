import { useEffect, useRef, useState } from "react";
import { mediaPath } from "./mediaPath";

// Cards have aspect-ratio 16/9 (≈1.78). If a source is meaningfully
// narrower than that (square / portrait), `cover` would crop content,
// so we swap to `contain` and let it letterbox cleanly.
const WIDESCREEN_THRESHOLD = 1.6;

const MediaPreview = ({ media, alt, className = "" }) => {
  const ref = useRef(null);
  const [fit, setFit] = useState("cover");

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
      autoPlay
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
