import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export interface SwiperItem {
  // id:number,
  image: string,
  title?: string,
}

interface SwiperProps {
  slides: SwiperItem[],
  perview?: number,
  autoplay?: boolean,
  pagination?: boolean
}

const ImgSwiper = ({slides, perview, autoplay, pagination} : SwiperProps) => {
  return (
   <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={perview}
      pagination={pagination ? { clickable: true } : false}
      autoplay={
        autoplay 
          ? { delay: 3000, disableOnInteraction: false }
          : false
      }
      breakpoints={{
        320: { slidesPerView: 1},
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        960: { slidesPerView: 4 },
        1024: { slidesPerView: perview },
      }}
      className="w-full"
   >

      {slides.map((slide, index) => (
        <SwiperSlide key={slide.image}>
            <div key={index} className='flex flex-col items-center pb-8'>
              <img src={slide.image} alt="logo" className='h-10 w-auto max-w-xs'/>
             
              <p className='mt-2 text-sm text-gray-200 font-semibold'>
                {slide.title}
              </p>
            </div>
        </SwiperSlide>
      ))}
   </Swiper>
  )
}

export default ImgSwiper