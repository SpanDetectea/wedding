import { ValidationError, useForm } from "@formspree/react";
import "./WorkSheet.scss";

const WorkSheet = () => {
  const [state, handleSubmit] = useForm("xzbngzvy");
  if (state.succeeded) {
    // if (1) {
    return <div className="answer">Благодарим за ваш ответ!</div>;
  }
  return (
    <div className="workSheet">
      <h2>Дорогие гости</h2>
      <div>
        Мы очень старались сделать праздник незабываемым, поэтому будем очень
        признательны, если Вы подтвердите свое присутствие!
      </div>
      <form onSubmit={handleSubmit} className="workSheet__form">
        <input
          id="text"
          type="text"
          name="ФИО"
          required
          placeholder="Имя Фамилия"
          className="workSheet__form__name"
        />
        <label className="workSheet__form__heading">
          Планируете свое присутствие?
        </label>
        <div className="workSheet__form__choice">
          <input type="radio" id="yes" name="Присутсвие" value="Да" />
          <label htmlFor="yes">Да </label>
        </div>
        <div className="workSheet__form__choice">
          <input type="radio" id="No" name="Присутсвие" value="Нет" />
          <label htmlFor="No">Нет</label>
        </div>
        <label className="workSheet__form__heading">Что планируете пить?</label>
        <div className="workSheet__form__choice">
          <input type="checkbox" name="Напитки" value="Вино" />
          <label htmlFor="drink">Вино</label>
        </div>
        <div className="workSheet__form__choice">
          <input type="checkbox" name="Напитки" value="Шампанское" />
          <label htmlFor="drink">Шампанское</label>
        </div>
        <div className="workSheet__form__choice">
          <input type="checkbox" name="Напитки" value="Водка" />
          <label htmlFor="drink">Водка</label>
        </div>
        <div className="workSheet__form__choice">
          <input
            type="checkbox"
            name="Напитки"
            value="Безалкогольные_напитки"
          />
          <label htmlFor="drink">Безалкогольные напитки</label>
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="workSheet__form__button"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default WorkSheet;
