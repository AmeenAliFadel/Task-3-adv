import icon1 from '../../assets/OurSpecialFeatures/icon1.svg';
import icon2 from '../../assets/OurSpecialFeatures/icon2.svg';
import icon3 from '../../assets/OurSpecialFeatures/icon3.svg';
import icon4 from '../../assets/OurSpecialFeatures/icon4.svg';
import icon5 from '../../assets/OurSpecialFeatures/icon5.svg';
import icon6 from '../../assets/OurSpecialFeatures/icon6.svg';

const storedFeaturesData = localStorage.getItem('FeaturesData');

export const FeaturesData = storedFeaturesData ? JSON.parse(storedFeaturesData) : [
    {
        icon: icon1,
        title: 'Thematic Learning',
        desc: `Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.`
    },
    {
        icon: icon2,
        title: 'STEAM Education',
        desc: `We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.`
    },
    {
        icon: icon3,
        title: 'Language Immersion',
        desc: `Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.`
    },
    {
        icon: icon4,
        title: 'Art and Creativity',
        desc: `Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.`
    },
    {
        icon: icon5,
        title: 'Outdoor Education',
        desc: `Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.`
    },
    {
        icon: icon6,
        title: 'Play-Based Learning',
        desc: `Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.`
    }
];

if (!storedFeaturesData) {
    localStorage.setItem('FeaturesData', JSON.stringify(FeaturesData));
}
