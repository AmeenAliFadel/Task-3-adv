import './StudentsLearn.css'
import Title from '../Title/Title';
import { StudentsLearnCardData } from './StudentsLearnCardData';
import StudentsLearnCard from './StudentsLearnCard';
export default function StudentsLearn() {
    return (
        <>
            <Title
                span="Our Features"
                title="What Students Learn"
                desc="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
            />
            <div className="container">
                <div className="students">
                    {StudentsLearnCardData.map((Student, index) => (
                        <StudentsLearnCard
                            key={index}
                            title={Student.title}
                            img={Student.img}
                            desc={Student.desc}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
