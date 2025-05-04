import React from 'react'
import './Navigate.css'
import Line from '../../assets/NavigateSection/Container.png'
import arrow from '../../assets/NavigateSection/Icon.svg'

export default function NavigateCard({ title, desc }) {
    return (
        <>
            <div className="navigate-card" data-aos="flip-left">
                <h3>{title}</h3>
                <img src={Line} className='navigate-line' alt="line" />
                <p>{desc}</p>
                <button>Learn More <img src={arrow} alt=">" /></button>
            </div>
        </>
    )
}
