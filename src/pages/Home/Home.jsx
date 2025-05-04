import Hero from '../../components/HeroSection/Hero'
import Benefits from '../../components/BenefitsSection/Benefits'
import Testimonials from '../../components/TestimonialsSection/Testimonials'
import FAQ from '../../components/FAQSection/FAQ'
import Navigate from '../../components/NavigateSection/Navigate'

export default function Home() {
    return (
        <>
            <Hero span="Welcome to Little Learners Academy"
                title="Where Young Minds Blossom and"
                titleSpan="Dreams Take Flight."
                desc="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
            />
            <Benefits />
            <Testimonials />
            <FAQ />
            <Navigate />
        </>
    )
}
