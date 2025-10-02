"use client"
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css/pagination';
import Image from 'next/image';
import { Category } from '@/types/category.type';

const SwiperCategory = ({ categories }: { categories: Category[] }) => {
    return (
        <div>
            <Swiper
                modules={[Scrollbar, Pagination]}
                spaceBetween={0}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            // scrollbar={{ draggable: true }}
            // pagination={{ clickable: true }}
            >
                {categories.map((category, idx: number) => <SwiperSlide key={idx}>
                    <Image width={500} height={500} src={category.image} alt={category.name} className='h-[250px] object-fill w-full' />
                    <p className='my-2 text-center'>{category.name}</p>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default SwiperCategory
