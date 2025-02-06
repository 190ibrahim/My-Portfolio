
const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bxs-graduation about__icon"></i>
        <h3 className="about__title">Currently in </h3>
        <span className="about__subtitle">Second Semester </span>
      </div>

      <div className="about__box">
        <i className="bx bxs-badge-check about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">30 + Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bxs-location-plus about__icon"></i>
        <h3 className="about__title">Mobility </h3>
        <span className="about__subtitle">Open to relocation</span>
      </div>
    </div>
  );
}

export default Info
