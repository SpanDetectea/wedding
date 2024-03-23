import "./Contacs.scss";
import groom from "../../assets/images/groom.png";
import bride from "../../assets/images/bride.png";
import we from '../../assets/images/we.png'

const Contacs = () => {
  return (
    <div className="contacs">
      <h2>Контакты</h2>
      <p>
        Если у вас возникнут вопросы, вы всегда сможете позвонить одному из нас
      </p>
      <div className="contacs__wrapper">
        {/* <div className="contacs__wrapper__info">
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
        </div> */}
        <div className="contacs__wrapper__info">
          <div className="contacs__wrapper__info__number">
            <div>Роман:</div>
            <div>89114274286</div>
          </div>
        </div>
        <div className="contacs__wrapper__we">
          <img src={we} alt="" className="contacs__wrapper__we__photo"/>
        </div>
        <div className="contacs__wrapper__info">
          <div className="contacs__wrapper__info__number">
            <div>Екатерина:</div>
            <div>89004602093</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contacs;
