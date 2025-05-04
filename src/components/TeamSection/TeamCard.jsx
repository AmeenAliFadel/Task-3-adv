import './Team.css'
import icon from '../../assets/team/icon.svg'
export default function TeamCard({ name, user, title, desc }) {
    return (
        <>
            <div className="team-card" data-aos="flip-left">
                <div className="team-card-top-part">
                    <div className="team-img-title">
                        <div className="team-img-container">
                            <img src={user} alt="" />
                        </div>
                        <h3>{name}</h3>
                    </div>
                    <span><img src={icon} alt="" /></span>
                </div>
                <div className="team-desc">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}
