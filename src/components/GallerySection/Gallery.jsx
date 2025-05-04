import { useState } from 'react';
import Title from '../Title/Title';
import './Gallery.css';
import GalleryCard from './GalleryCard';
import { GalleryCardData } from './GalleryCardData';

export default function Gallery() {
    const btns = [
        { filter: "All", txt: "All" },
        { filter: "Classrooms", txt: "Classrooms" },
        { filter: "Library", txt: "Library" },
        { filter: "Science Lab", txt: "Science Lab" },
        { filter: "Computer Lab", txt: "Computer Lab" },
        { filter: "Garden and Nature Area", txt: "Garden and Nature Area" }
    ];

    const [activeBtn, setActiveBtn] = useState("All");

    function activeTab(filter) {
        setActiveBtn(filter);
    }

    const filteredData = activeBtn === "All"
        ? GalleryCardData
        : GalleryCardData.filter(item => item.filter === activeBtn);

    return (
        <>
            <Title
                span="Our Gallery"
                title="Our Rooms Gallery"
                desc="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
            />
            <div className="container">
                
                <div className="gallery-scroll-wrapper">
                    <div className="gallery-btns" data-aos="zoom-in">
                        {btns.map((btn, index) => (
                            <button
                                key={index}
                                className={`${activeBtn === btn.filter ? "activeBtn" : ""}`}
                                onClick={() => activeTab(btn.filter)}
                            >
                                {btn.txt}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="gallery-cards" data-aos="fade-up">
                    {filteredData.map((item, i) => (
                        <GalleryCard
                            key={i}
                            title={item.title}
                            img={item.img}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
