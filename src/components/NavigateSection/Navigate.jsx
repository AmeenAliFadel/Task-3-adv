import Title from '../Title/Title'
import './Navigate.css'
import NavigateCard from './NavigateCard'
import { NavigateCardData } from './NavigateCardData'
export default function Navigate() {
  return (
    <>
      <Title
        span="Explore More"
        title="Navigate through our Pages"
        desc="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />
      <div className="container">
        <div className="navigate">
          {NavigateCardData.map((Navigate, index) => (
            <NavigateCard
              key={index}
              title={Navigate.title}
              desc={Navigate.desc}
            />
          ))}
        </div>
      </div>
    </>
  )
}
