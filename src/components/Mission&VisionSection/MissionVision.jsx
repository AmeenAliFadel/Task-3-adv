import './MissionVision.css'
import Title from '../Title/Title';
import MissionVisionCard from './MissionVisionCard';
import { MissionVisionCardData } from './MissionVisionCardData';
export default function MissionVision() {
    return (
        <>
            <Title
                span="Mission & Visions"
                title="Our Mission & Visions"
                desc="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
            />
            <div className="container">
                <div className="mission-vision">
                    {MissionVisionCardData.map((benefit, index) => (
                        <MissionVisionCard
                            key={index}
                            title={benefit.title}
                            icon={benefit.icon}
                            desc={benefit.desc}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
