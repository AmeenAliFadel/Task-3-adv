import { useState } from 'react';
import './FAQ.css'
import icon1 from '../../assets/FAQ`s/icon-.svg'
import icon2 from '../../assets/FAQ`s/icon+.svg'

function FAQCard({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {!isOpen &&
                <div className='faq-card'>
                    <div className='faq-question' onClick={toggleCard}>
                        <h3>{question}</h3>
                        {isOpen &&
                            <span>
                                <img src={icon1} alt="icon" />
                            </span>
                        }
                        {!isOpen &&
                            <span>
                                <img src={icon2} alt="icon" />
                            </span>
                        }
                    </div>
                    {isOpen && (
                        <div className="faq-answer">
                            <p>{answer}</p>
                        </div>
                    )}
                </div>
            }
            {isOpen &&
                <div className="faq-open" >
                    <div className='faq-question' onClick={toggleCard}>
                        <div>
                            <h3>{question}</h3>
                            {isOpen && (
                                <div className="faq-answer">
                                    <p>{answer}</p>
                                </div>
                            )}
                        </div>
                        {isOpen &&
                            <span>
                                <img src={icon1} alt="icon" />
                            </span>
                        }
                        {!isOpen &&
                            <span>
                                <img src={icon2} alt="icon" />
                            </span>
                        }
                    </div>

                </div>
            }

        </>

    );
}

export default FAQCard;
