import './StudentsLearn.css'
export default function StudentsLearnCard({ title, img, desc }) {
    return (
        <>
            <div className="students-card" data-aos="flip-left">
                <img src={img} alt="" />
                <div className="shape"></div>
                <div className="students-desc">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}
