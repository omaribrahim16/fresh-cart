"use client"
import React from 'react'
import banner1 from "./../../../../public/screens/slider/grocery-banner.png"
import banner2 from "./../../../../public/screens/slider/grocery-banner-2.jpeg"

import slide1 from "./../../../../public/screens/slider/slider-image-1.jpeg"
import slide2 from "./../../../../public/screens/slider/slider-image-2.jpeg"
import slide3 from "./../../../../public/screens/slider/slider-image-3.jpeg"
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css/pagination';



const MainSlider = () => {
    return (
        <div className='mb-10 flex'>
            <div className="w-2/3">
                <Swiper
                    modules={[Scrollbar, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    // scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}


                >
                    <SwiperSlide><Image className='h-[400px] object-cover' src={slide1} alt='banner1' />
                    </SwiperSlide>

                    <SwiperSlide><Image className='h-[400px] object-cover' src={slide2} alt='banner1' />
                    </SwiperSlide>

                    <SwiperSlide><Image className='h-[400px] object-cover' src={slide3} alt='banner1' />
                    </SwiperSlide>
                </Swiper></div>
            <div className="w-1/3">
                <Image className='h-[200px] object-cover' src={banner1} alt='banner1' />
                <Image className='h-[200px] object-cover' src={banner1} alt='banner2' />

            </div>
        </div>
    )
}

export default MainSlider
