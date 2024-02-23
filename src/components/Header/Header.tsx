import { useEffect, useState } from "react";
import { timer } from "../../common/timer";
import "./Header.scss";
import wedding from '../../assets/images/wedding4.jpg'

const Header = () => {
  const [time, setTime] = useState(timer());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timer());
    });
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="header">
      {/* <div className="header__background">
        <img src={wedding} alt=""  className="header__background__image"/>
      </div> */}
      <div className="header__timer">
        <div className="header__timer__element">
          <span className="header__timer__element__number">{time.days}</span>{" "}
          Дней
        </div>
        <div className="header__timer__element">
          <span className="header__timer__element__number">{time.hours}</span>{" "}
          Часов
        </div>
        <div className="header__timer__element">
          <span className="header__timer__element__number">{time.minutes}</span>{" "}
          Минут
        </div>
        <div className="header__timer__element">
          <span className="header__timer__element__number">{time.seconds}</span>{" "}
          Секунд
        </div>
      </div>
    </div>
  );
};

export default Header;
