import "./Calendar.scss";

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="container">
        <div className="Month">июнь</div>
        <div className="year">2024</div>
        <div className="time stripes">16:00</div>
        <div className="number">22</div>
        <div className="dayOfWeek stripes">Суббота</div>
      </div>
    </div>
  );
};

export default Calendar;
