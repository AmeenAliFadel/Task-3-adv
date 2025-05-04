import React from 'react'
import Hero2 from '../../components/SubHero/Hero2'
import Features from '../../components/FeaturesSection/Features'
import StudentsLearn from '../../components/StudentsLearnSection/StudentsLearn'
import Gallery from '../../components/GallerySection/Gallery'

export default function Academics() {
  return (
    <>
    <Hero2 
    span= "Academics"
    title="Nurturing Young Minds for Success"
    desc="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
    />
    <Features />
    <StudentsLearn />
    <Gallery />
    </>
  )
}
