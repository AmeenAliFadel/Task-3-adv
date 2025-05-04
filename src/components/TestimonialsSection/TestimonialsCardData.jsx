import icon1 from '../../assets/Testimonials/Testimonials1.svg';
import icon2 from '../../assets/Testimonials/Testimonials2.svg';
import icon3 from '../../assets/Testimonials/Testimonials3.svg';

const storedTestimonialsData = localStorage.getItem('TestimonialsData');

export const TestimonialsData = storedTestimonialsData ? JSON.parse(storedTestimonialsData) : [
    {
        icon: icon1,
        name: 'Jennifer B',
        desc: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'
    },
    {
        icon: icon2,
        name: 'David K',
        desc: 'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.'
    },
    {
        icon: icon3,
        name: 'Emily L',
        desc: 'My son’s social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.'
    },
    {
        icon: icon1,
        name: 'Jennifer B',
        desc: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'
    },
    {
        icon: icon2,
        name: 'David K',
        desc: 'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.'
    },
    {
        icon: icon3,
        name: 'Emily L',
        desc: 'My son’s social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.'
    }

];

if (!storedTestimonialsData) {
    localStorage.setItem('TestimonialsData', JSON.stringify(TestimonialsData));
}
