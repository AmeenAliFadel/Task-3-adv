import './MissionVision.css'

export default function MissionVisionCard({ title, icon, desc }) {
    return (
        <>
            <div className="mission-vision-card" data-aos="flip-left">
                <div className="top-part">
                    <h3>{title}</h3>
                    <img src={icon} alt="" />
                </div>
                <div className="mission-desc">
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}
