import user1 from '../../assets/team/user1.png';
import user2 from '../../assets/team/user2.png';
import user3 from '../../assets/team/user3.png';
import user4 from '../../assets/team/user4.png';
import user5 from '../../assets/team/user5.png';
import user6 from '../../assets/team/user6.png';

const storedTeamCardData = localStorage.getItem('TeamCardData');

export const TeamCardData = storedTeamCardData ? JSON.parse(storedTeamCardData) : [
    {
        user: user1,
        name: "Ms. Sarah Anderson",
        title: `Qualification:Bachelor's Degree in Early Childhood Education`,
        desc: 'Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.'
    },
    {
        user: user2,
        name: "Mr. David Roberts",
        title: `Qualification: Master's Degree in Elementary Education`,
        desc: 'With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.'
    },
    {
        user: user3,
        name: "Ms. Emily Hernandez",
        title: 'Qualification: Diploma in Child Psychology',
        desc: `Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.`
    },
    {
        user: user4,
        name: "Mr. Michael Turner",
        title: `Qualification: Bachelor's Degree in Physical Education`,
        desc: `Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.`
    },
    {
        user: user5,
        name: "Ms. Jessica Lee",
        title: `Qualification: Master's Degree in Special Education`,
        desc: `Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.`
    },
    {
        user: user6,
        name: "Mr. William Parker",
        title: `Qualification: Bachelor's Degree in Fine Arts`,
        desc: `Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.`
    }
];

if (!storedTeamCardData) {
    localStorage.setItem('TeamCardData', JSON.stringify(TeamCardData));
}
