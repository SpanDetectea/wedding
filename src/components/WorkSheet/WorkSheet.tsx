import { ValidationError, useForm } from "@formspree/react";
import "./WorkSheet.scss";

const WorkSheet = () => {
  const [state, handleSubmit] = useForm("xzbngzvy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="workSheet">
      <h2>Дорогие гости</h2>
      <div>
        Мы очень старались сделать праздник незабываемым, поэтому будем очень
        признательны, если Вы подтвердите свое присутствие!
      </div>
      <form onSubmit={handleSubmit} className="workSheet__form">
        <input id="text" type="text" name="ФИО" placeholder="Имя Фамилия" />
        {/* <ValidationError prefix="Text" field="text" errors={state.errors} /> */}
        <label htmlFor="email">Планируете свое присутствие?</label>
        <div>
          <input type="radio" id="yes" name="Присутсвие" value="Да" />
          <label htmlFor="yes">Да</label>
        </div>
        <div>
          <input type="radio" id="No" name="Присутсвие" value="Нет" />
          <label htmlFor="No">Нет</label>
        </div>
        <label htmlFor="email">Что планируете пить?</label>
        <div>
            <input type="checkbox" name="Напитки" value="Вино_красное"/>
            <label htmlFor="drink">Вино красное</label>
        </div>
        <div>
            <input type="checkbox" name="Напитки" value="Вино_белое"/>
            <label htmlFor="drink">Вино белое</label>
        </div>
        <div>
            <input type="checkbox" name="Напитки" value="Шампанское"/>
            <label htmlFor="drink">Шампанское</label>
        </div>
        <div>
            <input type="checkbox" name="Напитки" value="Водка"/>
            <label htmlFor="drink">Водка</label>
        </div>
        <div>
            <input type="checkbox" name="Напитки" value="Безалкогольные_напитки"/>
            <label htmlFor="drink">Безалкогольные напитки</label>
        </div>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkSheet;
