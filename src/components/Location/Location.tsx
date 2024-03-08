import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import "./Location.scss";

const Location = () => {
  return (
    <div className="location">
      <h2>Регистрация в Загсе</h2>
      <div className="location__desc">
        ул. Еремеева, 1, Петрозаводск, Респ. Карелия
      </div>
      <YMaps>
        <Map
          defaultState={{
            center: [61.794827, 34.374309],
            zoom: 15,
          }}
          className="location__map"
        >
          <Placemark geometry={[61.794827, 34.374309]} />
          <ZoomControl options={{ size: "small" }} />
        </Map>
      </YMaps>
      <h2>Свадебный ужин</h2>
      <div className="location__desc">
        Кафе Горка, Лососинское ш., 17, Петрозаводск, Респ. Карелия (Белый Купол)
      </div>
      <YMaps>
        <Map
          defaultState={{
            center: [61.772597, 34.335578],
            zoom: 15,
          }}
          className="location__map"
        >
          <Placemark geometry={[61.772597, 34.335578]} />
          <ZoomControl options={{ size: "small" }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default Location;
