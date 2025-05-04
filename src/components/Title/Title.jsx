import './Title.css'

export default function Title({ span, title, desc }) {
    return (
        <>
            <div className="container">
                <div className="title">
                    <div className="title-btn">
                        <span>{span}</span>
                    </div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}
