import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Typed from "react-typed";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"




// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
SwiperCore.use([Pagination, Navigation]);



export default function () {




    return (
        <>
        <h1  style={{'padding':"5rem 8rem"}} className='heading' >WEL<span>COME</span></h1>
            <div className='home' id='about'>
                <Swiper pagination={{ "type": "fraction" }} navigation={true} className="mySwiper">
                    <SwiperSlide>
                        <section className='slide' id='slide' >
                            <div className='content' >
                                <h3>Food made with love</h3>
                                <p>It’s one of the busiest time of the year for me as I try and plan the combine birthday party of my two cheeky monkeys! This year I decided to go with one of their favourite cartoons/ movies of all time: Toy Story! Yes, they’ve watched all 4 of them and yes, they will be dressed in one of the characters in the movie!</p>
                                <a href='#' className='btn2'>Order now</a>
                            </div>
                            <div className='image' >
                                <img src='images/home3.png' alt='' />
                            </div>
                        </section>
                    </SwiperSlide>

                    <SwiperSlide>
                        <section className='slide' id='slide' >
                            <div className='content' >
                                <h3>Welcome to <span className='typing-text'> <Typed
                                    strings={[
                                        "Quynh My Store"

                                    ]}
                                    typeSpeed={80}
                                    backDelay={1100}
                                    backSpeed={30}
                                    loop
                                /></span></h3>
                                <p>It’s one of the busiest time of the year for me as I try and plan the combine birthday party of my two cheeky monkeys! This year I decided to go with one of their favourite cartoons/ movies of all time: Toy Story! Yes, they’ve watched all 4 of them and yes, they will be dressed in one of the characters in the movie!</p>
                                <a href='#' className='btn2'>Try now</a>
                            </div>
                            <div className='image' >
                                <img src='images/home2.png' alt='' />
                            </div>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>

    )
}
