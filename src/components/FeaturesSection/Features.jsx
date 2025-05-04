import "./Features.css"
import Title from '../Title/Title';
import { FeaturesData } from "./FeaturesData";
import BenefitsCard from "../BenefitsSection/BenefitsCard";
export default function Features() {
    return (
        <>
            <Title
                span="Our Features"
                title="Our Special Features"
                desc="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
            />
            <div className="container">
                <div className="features">
                    {FeaturesData.map((Features, index) => (
                        <BenefitsCard
                            key={index}
                            title={Features.title}
                            icon={Features.icon}
                            desc={Features.desc}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
