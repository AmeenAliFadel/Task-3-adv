import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { IoMdArrowUp } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { pathname } = useLocation();

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [pathname]);

    window.onscroll = handleScroll;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-to-top ${isVisible ? "Scroll-show" : ""}`}
        >
            <IoMdArrowUp className="ScrollArrow" />
        </button>
    );
}
