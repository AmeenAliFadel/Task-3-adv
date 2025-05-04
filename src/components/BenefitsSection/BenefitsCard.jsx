import './Benefits.css'
export default function BenefitsCard({ icon, title, desc }) {
    return (
        <><div className="benefits-card" data-aos="flip-left" >
            <div className="benefits-card-icon">
                <img src={icon} alt="icon" />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        </>
    )
}
