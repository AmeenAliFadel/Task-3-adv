import { useState, useEffect } from 'react';

import Title from '../Title/Title';
import './Testimonials.css';

import prevBtn from '../../assets/Testimonials/leftArrow.svg';
import nextBtn from '../../assets/Testimonials/rightArrow.svg';

import TestimonialsCard from './TestimonialsCard';
import { TestimonialsData } from './TestimonialsCardData';

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsIn = isMobile ? 1 : 3;
  const maxStart = TestimonialsData.length - cardsIn;

  const handleNext = () => {
    if (start < maxStart) {
      setStart(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (start > 0) {
      setStart(prev => prev - 1);
    }
  };

  return (
    <>
      <Title
        span="Their Happy Words 🤗"
        title="Our Testimonials"
        desc="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />
      <div className="container">
        <div className="testimonials" >
          {!isMobile &&
            <button className="prev-btn" onClick={handlePrev} disabled={start === 0}>
              <img src={prevBtn} alt="Previous" />
            </button>
          }


          {TestimonialsData.slice(start, start + cardsIn).map((Testimonial, index) => (
            <TestimonialsCard
              key={index}
              name={Testimonial.name}
              icon={Testimonial.icon}
              desc={Testimonial.desc}
            />
          ))}


          {!isMobile &&
            <button className="next-btn" onClick={handleNext} disabled={start >= maxStart}>
              <img src={nextBtn} alt="Next" />
            </button>
          }
        </div>

        {isMobile &&
          <div className="testimonials-nav">
            <button className="prev-btn" onClick={handlePrev} disabled={start === 0}>
              <img src={prevBtn} alt="Previous" />
            </button>
            <button className="next-btn" onClick={handleNext} disabled={start >= maxStart}>
              <img src={nextBtn} alt="Next" />
            </button>
          </div>
        }
      </div>
    </>
  );
}

