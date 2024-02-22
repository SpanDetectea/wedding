import './Calendar.scss'
import srcCalendar from "../../assets/images/calendar.png";
import srcHeart from '../../assets/images/cardiogram.png';

const Calendar = () => {
    return <div className='calendar'>
        <img src={srcCalendar} alt="" className='calendar__image'/>
        <img src={srcHeart} alt="" className='calendar__heart'/>
    </div>
}

export default Calendar;