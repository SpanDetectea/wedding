import "./Plane.scss";

import DayEvent from "./DayEvent/DayEvent";
const Plane = () => {
  return (
    <div className="plan">
      <h2 className="plan__header">Программа свадебного дня</h2>
      <div className="plan__wrapper">
        <DayEvent />
      </div>
    </div>
  );
};

export default Plane;
