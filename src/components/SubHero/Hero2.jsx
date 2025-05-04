import './Hero2.css'

export default function Hero2({ span, title, desc }) {
    return (
        <>
            <div className="sub-hero" data-aos="fade-up">
                <div className="sub-hero-title">
                    <span>{span}</span>
                    <h2>{title}</h2>
                </div>
                <p className="sub-hero-desc">
                    {desc}
                </p>
            </div>
        </>
    )
}
