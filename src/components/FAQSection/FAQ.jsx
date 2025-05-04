import FAQCard from './FAQCard';
import { FAQCardData } from './FAQCardData';
import './FAQ.css';
import Title from '../Title/Title';

function FAQ() {
  return (
    <>
      <Title
        span="Solutions For The Doubts"
        title="Frequently Asked Questions"
        desc="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />
      <div className="container">
        <div className="faq" >
          <div className="faq-group" data-aos="flip-left">
            {FAQCardData[0].map((item, index) => (
              <FAQCard key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="faq-group" data-aos="flip-left">
            {FAQCardData[1].map((item, index) => (
              <FAQCard key={index + 4} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
