import { useState, useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  const [show, setShow] = useState(false);
  const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const atBottom = window.innerHeight + currentY >= document.body.scrollHeight - 10;
      const up = atBottom || currentY < lastY;
      setShow(currentY >= 560);
      setGoingUp(up);
      document.documentElement.style.setProperty(
        "--scrollbar-gradient",
        up
          ? `var(--title-color), transparent`
          : `transparent, var(--title-color)`
      );
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (goingUp) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`scrollup${show ? " show-scroll" : ""}${goingUp ? " scrollup--up" : " scrollup--down"}`}
    >
      <i className={`uil ${goingUp ? "uil-arrow-up" : "uil-arrow-down"} scrollup__icon`}></i>
    </button>
  );
};

export default ScrollUp;
