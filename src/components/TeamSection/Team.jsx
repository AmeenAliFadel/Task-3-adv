import Title from '../Title/Title'
import './Team.css'
import TeamCard from './TeamCard'
import { TeamCardData } from './TeamCardData'


export default function Team() {
    return (
        <>
            <Title
                span="Our Teachers With Experties"
                title="Our Team Members"
                desc="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
            />
            <div className="container">
                <div className="team">
                    {TeamCardData.map((team, index) => (
                        <TeamCard
                            key={index}
                            name={team.name}
                            title={team.title}
                            user={team.user}
                            desc={team.desc}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
