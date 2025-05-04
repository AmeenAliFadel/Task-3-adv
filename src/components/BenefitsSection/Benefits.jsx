import Title from '../Title/Title';
import './Benefits.css';
import BenefitsCard from './BenefitsCard';
import { BenefitsCardData } from './BenefitsCardData';

export default function Benefits() {
  return (
    <>
      <Title
        span="Children Deserve Bright Future"
        title="Our Benefits"
        desc="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      <div className="container">
        <div className="benefits" >
          {BenefitsCardData.map((benefit, index) => (
            <BenefitsCard
              key={index}
              title={benefit.title}
              icon={benefit.icon}
              desc={benefit.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
}
