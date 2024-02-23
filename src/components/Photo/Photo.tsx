import "./Photo.scss";
import camera from '../../assets/images/camera.png'

const Photo = () => {
  return (
    <div className="photo">
      <h2>Фотоотчет</h2>
      <p>После мероприятия Вы сможете посмотреть и скачать фотографии со дня свадьбы!</p>
      <img src={camera} alt="" className="photo__image"/>
    </div>
  );
};

export default Photo;
