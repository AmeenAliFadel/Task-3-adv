import icon1 from '../../assets/OurAwardsandRecognitions/icon1.svg';
import icon2 from '../../assets/OurAwardsandRecognitions/icon2.svg';
import icon3 from '../../assets/OurAwardsandRecognitions/icon3.svg';
import icon4 from '../../assets/Benefits/Icon4.svg';
import icon5 from '../../assets/Benefits/Icon5.svg';
import icon6 from '../../assets/Benefits/Icon6.svg';


const storedRecognitionsData = localStorage.getItem('RecognitionsData');

export const RecognitionsData = storedRecognitionsData ? JSON.parse(storedRecognitionsData) : [
    {
        icon: icon1,
        title: 'Outstanding Early Childhood Education Awar',
        desc: `Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.`
    },
    {
        icon: icon2,
        title: 'Innovative STEAM Education Award',
        desc: 'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.'
    },
    {
        icon: icon3,
        title: 'Environmental Stewardship Award',
        desc: 'Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.'
    },
    {
        icon: icon1,
        title: 'Outstanding Early Childhood Education Awar',
        desc: `Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.`
    },
    {
        icon: icon2,
        title: 'Innovative STEAM Education Award',
        desc: 'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.'
    },
    {
        icon: icon6,
        title: 'Parent Involvement',
        desc: `Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.`
    },
    {
        icon: icon4,
        title: 'Play-Based Learning',
        desc: 'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.'
    },
    {
        icon: icon5,
        title: 'Individualized Attention',
        desc: `Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.`
    },
    {
        icon: icon6,
        title: 'Parent Involvement',
        desc: 'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.'
    }
];

if (!storedRecognitionsData) {
    localStorage.setItem('RecognitionsData', JSON.stringify(RecognitionsData));
}
