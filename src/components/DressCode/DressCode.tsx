import "./DressCode.scss";

const DressCode = () => {
  return (
    <div className="dressCode">
      <h2>Дресс-код</h2>
      <p>
        Для нас главное - Ваше присутствие! Но нам будет приятно, если Вы
        поддержите цветовую гамму нашего торжества!
      </p>
      <div className="dressCode__wrapper">
        <div className="dressCode__wrapper__color color1"></div>
        <div className="dressCode__wrapper__color color2"></div>
        <div className="dressCode__wrapper__color color3"></div>
        <div className="dressCode__wrapper__color color4"></div>
      </div>
    </div>
  );
};

export default DressCode;
