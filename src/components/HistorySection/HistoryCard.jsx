import './History.css';
import calendarIcon from '../../assets/History/AbstractDesign.png';

export default function HistoryCard({ title, year, text }) {
    return (
        <>
            <div className="history-card">
                <div className='history-line-container' data-aos="flip-left">
                    <div className="history-line"></div>
                    <div className="year-box">
                        <img src={calendarIcon} alt="" />
                        <h3>{year}</h3>
                    </div>
                </div>
                <div className="history-card-desc">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
