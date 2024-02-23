import "./DayEvent.scss";
import rings from "../../../assets/images/rings.png";
import eat from "../../../assets/images/eat.png";
import cake from "../../../assets/images/cake.png";
import wedding from "../../../assets/images/wedding.png";
const event = [
  {
    image: rings,
    desc: "Регистрация в ЗАГСе",
    time: "16:00",
  },
  {
    image: eat,
    desc: "Свадебный ужин",
    time: "17:00",
  },
  {
    image: cake,
    desc: "Торт",
    time: "21:00",
  },
  {
    image: wedding,
    desc: "Окончание вечера",
    time: "22:00",
  },
];
const DayEvent = () => {
  return (
    <div className="dayEvent">
      {event.map((item, index) => (
        <div className="dayEvent__event" key={index}>
          <img src={item.image} alt="" className="dayEvent__event__image" />
          <div className="dayEvent__event__description">
            <div>{item.desc}</div>
            <div>{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayEvent;
