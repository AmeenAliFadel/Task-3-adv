import './NavBar1.css'
import arrow from '../../assets/navbar/top nav/Icon.svg'

import left1920 from '../../assets/navbar/top nav/Abstract Design left.png'
import left1440 from '../../assets/navbar/top nav/Abstract Design left1440.png'
import left992 from '../../assets/navbar/top nav/Abstract Design left992.png'

import right1920 from '../../assets/navbar/top nav/Abstract Design right.png'
import right1440 from '../../assets/navbar/top nav/Abstract Design right1440.png'
import right992 from '../../assets/navbar/top nav/Abstract Design right992.png'

import top1920 from '../../assets/navbar/top nav/Abstract Design big top.png'
import top1440 from '../../assets/navbar/top nav/Abstract Design top1440.png'
import top992 from '../../assets/navbar/top nav/Abstract Design top992.png'

import bottom1920 from '../../assets/navbar/top nav/Abstract Design small bottom.png'
import bottom1440 from '../../assets/navbar/top nav/Abstract Design bottom1440.png'
import bottom992 from '../../assets/navbar/top nav/Abstract Design bottom992.png'

export default function NavBar1({text}) {
  return (
    <>
      <nav className="navbar1">
        <p>{text}</p>
        <img className='arrow' src={arrow} alt=">" />

        <img className='left-img-desktop' src={left1920} alt="backgroundImg" />
        <img className='right-img-desktop' src={right1920} alt="backgroundImg" />
        <img className='top-img-desktop' src={top1920} alt="backgroundImg" />
        <img className='bottom-img-desktop' src={bottom1920} alt="backgroundImg" />

        <img className='left-img-laptop' src={left1440} alt="backgroundImg" />
        <img className='right-img-laptop' src={right1440} alt="backgroundImg" />
        <img className='top-img-laptop' src={top1440} alt="backgroundImg" />
        <img className='bottom-img-laptop' src={bottom1440} alt="backgroundImg" />

        <img className='left-img-mobile' src={left992} alt="backgroundImg" />
        <img className='right-img-mobile' src={right992} alt="backgroundImg" />
        <img className='top-img-mobile' src={top992} alt="backgroundImg" />
        <img className='bottom-img-mobile' src={bottom992} alt="backgroundImg" />

      </nav>
    </>
  )
}
