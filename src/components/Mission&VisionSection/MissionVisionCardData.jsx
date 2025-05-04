import icon1 from '../../assets/Mission&Visions/icon1.svg';
import icon2 from '../../assets/Mission&Visions/icon2.svg';

const storedMissionVisionCardData = localStorage.getItem('MissionVisionCardData');

export const MissionVisionCardData = storedMissionVisionCardData ? JSON.parse(storedMissionVisionCardData) : [
    {
        icon: icon1,
        title: 'Mission',
        desc: 'At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.'
    },
    {
        icon: icon2,
        title: 'Vision',
        desc: 'Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.'
    }
];

if (!storedMissionVisionCardData) {
    localStorage.setItem('MissionVisionCardData', JSON.stringify(MissionVisionCardData));
}
