import './Contacs.scss'
import groom from '../../assets/images/groom.png'

const Contacs = () => {
    return <div className="contacs">
        <h2>Контакты</h2>
        <p>Если у вас возникнут вопросы, вы всегда сможете позвонить одному из нас</p>
        <div className="contacs__wrapper">
            <div className="contacs__info">
                <div>Жених</div>
                <div>+79114274286</div>
                {/* <img src={groom} alt="" /> */}
            </div>
            <div className="contacs__info"></div>
        </div>
        {/* <div className="contacs__groom">Жених: +79114274286</div>
        <div>Невеста: +79114274286</div> */}
        <div></div>
    </div>
}

export default Contacs