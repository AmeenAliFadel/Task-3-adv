import { useEffect, useState } from 'react';
import Title from '../Title/Title'
import './Recognitions.css'
import BenefitsCard from '../BenefitsSection/BenefitsCard';
import { RecognitionsData } from './RecognitionsData';

import prevBtn from '../../assets/Testimonials/leftArrow.svg';
import nextBtn from '../../assets/Testimonials/rightArrow.svg';
export default function Recognitions() {
    const [start, setStart] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1100);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cardsIn = isMobile ? 1 : 3;
    const maxStart = RecognitionsData.length - cardsIn;

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
                span="Our Achievements"
                title="Our Awards and Recognitions"
                desc="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
            />
            <div className="container">
                <div className="recognitions">
                    <div className="recognitions-card">
                        {RecognitionsData.slice(start, start + cardsIn).map((Recognition, index) => (
                            <BenefitsCard
                                key={index}
                                title={Recognition.title}
                                icon={Recognition.icon}
                                desc={Recognition.desc}
                            />
                        ))}
                    </div>
                    <div className="button-container">
                        <p>8 More Awards</p>
                        <div className='button-container-btn'>
                            {!isMobile &&
                                <button className="prev-btn" onClick={handlePrev} disabled={start === 0}>
                                    <img src={prevBtn} alt="Previous" />
                                </button>
                            }

                            {!isMobile &&
                                <button className="next-btn" onClick={handleNext} disabled={start >= maxStart}>
                                    <img src={nextBtn} alt="Next" />
                                </button>
                            }
                            {isMobile &&
                                <div className="button-container-btn">
                                    <button className="prev-btn" onClick={handlePrev} disabled={start === 0}>
                                        <img src={prevBtn} alt="Previous" />
                                    </button>
                                    <button className="next-btn" onClick={handleNext} disabled={start >= maxStart}>
                                        <img src={nextBtn} alt="Next" />
                                    </button>
                                </div>
                            }
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
