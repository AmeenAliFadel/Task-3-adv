import Title from '../Title/Title';
import HistoryCard from './HistoryCard';
import { HistoryData } from './HistoryData';
import './History.css';

export default function History() {
    return (
        <>
            <Title
                span="Our Progressive Journey"
                title="Our History"
                desc="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
            />
            <div className="container">
                <div className="history" data-aos="fade-up">
                    {HistoryData.map((history, index) => (
                        <HistoryCard
                            key={index}
                            title={history.title}
                            year={history.year}
                            text={history.text}
                        />
                    ))}
                </div>
            </div>
        </>

    );
}
