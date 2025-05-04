import './Testimonials.css'
import stars from '../../assets/Testimonials/stars.png'
export default function TestimonialsCard({ name, icon, desc }) {
    return (
        <>
            <div className="testimonials-card" data-aos="flip-left">
                <div className="testimonials-icon">
                    <img src={icon} alt="icon" />
                </div>
                <h3>{name}</h3>
                <div className="stars">
                    <img src={stars} alt="stars" />
                </div>
                <p>{desc}</p>
            </div>
        </>
    )
}
