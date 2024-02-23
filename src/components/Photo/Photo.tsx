import "./Photo.scss";
import camera from '../../assets/images/camera.png'

const Photo = () => {
  return (
    <div className="photo">
      <h2>Фотоотчет</h2>
      <p>Через два месяца после мероприятия мы добавим ссылку,по которой вы сможете посмотреть и скачать фотографии Свадебного дня!</p>
      <img src={camera} alt="" className="photo__image"/>
    </div>
  );
};

export default Photo;
