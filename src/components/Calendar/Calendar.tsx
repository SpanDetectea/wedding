import "./Calendar.scss";
import calendar from "../../assets/images/calendar2.png";

const Calendar = () => {
  return (
    <div className="calendar">
      <img src={calendar} alt="" className="calendar__image" />
    </div>
  );
};

export default Calendar;
