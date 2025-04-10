import React, {useEffect, useRef, useState} from 'react';
import GlobalApi from "../services/GlobalApi.jsx";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
    const [movieList, setMovieList] = useState([]);

    const elementRef = useRef(null);

    useEffect(() => {
        getTreandingMovies();
    }, []);

    const getTreandingMovies = () => {
        GlobalApi.getTrending.then(res => {
            console.log(res.data.results);
            setMovieList(res.data.results);
        })
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 112;
    }
    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 112;
    }

    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[60px] absolute mx-8 mt-[186px] cursor-pointer"
            onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className="hidden md:block text-white text-[60px] absolute mx-8 mt-[186px] cursor-pointer right-0"
            onClick={() => sliderRight(elementRef.current)} />

            <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={elementRef}>
                {movieList.map(movie => (
                    <img key={movie.id} src={IMAGE_BASE_URL + movie.backdrop_path}
                    className="min-w-full md:h-[400px] object-cover object-left-top mr-4 rounded-md
                    hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"/>
                ))}
            </div>
        </div>
    );
}

export default Slider;