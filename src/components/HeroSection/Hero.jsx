import './Hero.css'
import heroImg from '../../assets/hero/Image Container.png'

export default function Hero({ span, title, titleSpan, desc }) {
  return (
    <>
      <div className="container">
        <div className="hero" data-aos="fade-up">
          <div className="hero-img" >
            <img src={heroImg} alt="heroImg" />

          </div>
          <div className="hero-desc" >
            <div className='hero-top-desc'>
              <span>{span}</span>
              <h1>{title} <span>{titleSpan} </span></h1>
              <p>{desc}</p>
            </div>
            <div className="hero-counter" data-aos="flip-left">
              <div>
                <h3>+7000</h3>
                <p>Students Passed Out</p>
              </div>
              <div id='border37'>
                <h3>+37</h3>
                <p>Awards & Recognitions</p>
              </div>
              <div>
                <h3>+15</h3>
                <p>SExperience Educators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
