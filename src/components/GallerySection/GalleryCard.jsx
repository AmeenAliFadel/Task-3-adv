import './Gallery.css'
import prevBtn from '../../assets/Testimonials/leftArrow.svg';
import nextBtn from '../../assets/Testimonials/rightArrow.svg';
import { useEffect, useState } from 'react';

export default function GalleryCard({ title, img = [], content }) {
    const [start, setStart] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setIsMobile(entry.contentRect.width <= 1100);
            }
        });

        observer.observe(document.documentElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    const cardsIn = isMobile ? 1 : 4;
    const maxStart = img.length - cardsIn;

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
        < >
            <div className="gallery-card">
                <div className="gallery-card-imgs">
                    {img.slice(start, start + cardsIn).map((image, index) => (
                        <img key={index} src={image} alt="" data-aos="flip-left" />
                    ))}
                </div>

                <div className="button-container">
                    <h3>{title}</h3>
                    <div className="button-container-btn">
                        {isMobile ? (
                            <>
                                <button className="prev-btn" onClick={handlePrev} disabled={start === 0}>
                                    <img src={prevBtn} alt="Previous" />
                                </button>
                                <button className="next-btn" onClick={handleNext} disabled={start >= maxStart}>
                                    <img src={nextBtn} alt="Next" />
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="prev-btn" onClick={handlePrev} disabled={start === 0}>
                                    <img src={prevBtn} alt="Previous" />
                                </button>
                                <button className="next-btn" onClick={handleNext} disabled={start >= maxStart}>
                                    <img src={nextBtn} alt="Next" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <p>{content}</p>
            </div>
        </>
    );
}
