import icon1 from '../../assets/Benefits/Icon1.svg';
import icon2 from '../../assets/Benefits/Icon2.svg';
import icon3 from '../../assets/Benefits/Icon3.svg';
import icon4 from '../../assets/Benefits/Icon4.svg';
import icon5 from '../../assets/Benefits/Icon5.svg';
import icon6 from '../../assets/Benefits/Icon6.svg';

const storedBenefitsCardData = localStorage.getItem('BenefitsCardData');

export const BenefitsCardData = storedBenefitsCardData ? JSON.parse(storedBenefitsCardData) : [
    {
        icon: icon1,
        title: 'Holistic Learning Approach',
        desc: 'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.'
    },
    {
        icon: icon2,
        title: 'Experienced Educators',
        desc: 'Our passionate and qualified teachers create a supportive and stimulating learning environment.'
    },
    {
        icon: icon3,
        title: 'Nurturing Environment',
        desc: 'We prioritize safety and provide a warm and caring atmosphere for every child.'
    },
    {
        icon: icon4,
        title: 'Play-Based Learning',
        desc: 'We believe in the power of play to foster creativity, problem-solving skills, and imagination.'
    },
    {
        icon: icon5,
        title: 'Individualized Attention',
        desc: `Our small class sizes enable personalized attention, catering to each child's unique needs.`
    },
    {
        icon: icon6,
        title: 'Parent Involvement',
        desc: 'We foster a strong parent-school partnership to ensure seamless communication and collaboration.'
    }
];

if (!storedBenefitsCardData) {
    localStorage.setItem('BenefitsCardData', JSON.stringify(BenefitsCardData));
}
