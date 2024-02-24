import "./Contacs.scss";
import groom from "../../assets/images/groom.png";
import bride from "../../assets/images/bride.png";

const Contacs = () => {
  return (
    <div className="contacs">
      <h2>Контакты</h2>
      <p>
        Если у вас возникнут вопросы, вы всегда сможете позвонить одному из нас
      </p>
      <div className="contacs__wrapper">
        <div className="contacs__wrapper__info">
          <div className="contacs__wrapper__info__number">
            <div>Жених:</div>
            <div>+79114274286</div>
          </div>
          <img src={groom} alt="" className="contacs__wrapper__info__image" />
        </div>
        <div className="contacs__wrapper__info reverse">
          <div className="contacs__wrapper__info__number">
            <div>Невеста:</div>
            <div>+79004602093</div>
          </div>
          <img src={bride} alt="" className="contacs__wrapper__info__image" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contacs;
