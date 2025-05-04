import React from 'react'
import Hero2 from '../../components/SubHero/Hero2'
import MissionVision from '../../components/Mission&VisionSection/MissionVision'
import Recognitions from '../../components/RecognitionsSection/Recognitions'
import Team from '../../components/TeamSection/Team'
import History from '../../components/HistorySection/History'

export default function AboutUs() {
  return (
    <>
    <Hero2
    span="Overview"
    title="Welcome to Little Learners Academy"
    desc="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
    />
    <MissionVision />
    <Recognitions />
    <Team />
    <History />
    </>
  )
}
