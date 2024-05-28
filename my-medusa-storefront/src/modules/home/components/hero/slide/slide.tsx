"use client"

import React,{useState} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

function Slides() {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1599016012665-13b74bb3b528?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)
    
    const prevSlide = () => {
        const isfirtSlide = currentIndex === 0;
        const newIndex = isfirtSlide? slides.length-1: currentIndex-1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
       setCurrentIndex(slideIndex);
    };

    return (
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
            
        <div  style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        </div>
        {/*Left Arrow*/}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
         <BsChevronCompactLeft onClick={prevSlide} size={30}/> 
        </div>
        {/*Right Arrow*/}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) =>(
                <div key={slideIndex} 
                onClick={() => goToSlide(slideIndex)} 
                className="text-2xl cursor-pointer">
                    <RxDotFilled/>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Slides;
