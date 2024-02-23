import "./Details.scss";

const Details = () => {
  return (
    <div className="details">
      <h2>Детали</h2>
      <div className="details__info">
        Регистрация в загсе начнется в 16:00. Просим Вас не опаздывать и подойти
        немного заранее, минут за 20 вполне достаточно.
      </div>
      <div className="details__info">
        Трансфера от загса до банкета,к сожалению,не предусмотрено.На территории Купола будет закрытая парковка,где вы сможете оставить
        свой авто на ночь.
      </div>
      <div className="details__info">В связи с местом проведения банкета  советуем вам надеть удобную и комфортную обувь</div>
      <div className="details__info"></div>
    </div>
  );
};

export default Details;
