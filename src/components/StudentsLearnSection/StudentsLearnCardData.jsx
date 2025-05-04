import img1 from '../../assets/StudentsLearn/img1.png';
import img2 from '../../assets/StudentsLearn/img2.png';
import img3 from '../../assets/StudentsLearn/img3.png';
import img4 from '../../assets/StudentsLearn/img4.png';
import img5 from '../../assets/StudentsLearn/img5.png';
import img6 from '../../assets/StudentsLearn/img6.png';


const storedStudentsLearnCardData = localStorage.getItem('StudentsLearnCardData');

export const StudentsLearnCardData = storedStudentsLearnCardData ? JSON.parse(storedStudentsLearnCardData) : [
    {
        img: img1,
        title: 'Language Arts',
        desc: 'Reading, writing, storytelling, and communication skills.'
    },
    {
        img: img2,
        title: 'Mathematics',
        desc: 'Number sense, basic operations, problem-solving, and logic.'
    },
    {
        img: img3,
        title: 'Science',
        desc: 'Exploring the natural world through hands-on experiments and investigations.'
    },
    {
        img: img4,
        title: 'Social Studies',
        desc: 'Cultivating an understanding of diverse cultures and communities.'
    },
    {
        img: img5,
        title: 'Arts and Crafts',
        desc: `Encouraging creativity through various art forms and crafts.`
    },
    {
        img: img6,
        title: 'Physical Education',
        desc: 'Promoting physical fitness, coordination, and teamwork.'
    }
];

if (!storedStudentsLearnCardData) {
    localStorage.setItem('StudentsLearnCardData', JSON.stringify(StudentsLearnCardData));
}
