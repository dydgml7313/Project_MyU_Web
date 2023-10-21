import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import '../../Intro.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from '../../img/img1.jpg';
import image2 from '../../img/img2.jpg';
import image3 from '../../img/img3.jpg';


function Intro() {
  return (
    <div>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className='banner_container'> 
          <div className='image_container'>
<img src={image1}></img>
          </div>
          <div className='banner_title'>
              <p className='title'>
                첫번째 슬라이드 입니다.
              </p>
          </div>
        </div></SwiperSlide>
      
        <SwiperSlide><div className='banner_container'> 
          <div className='image_container'>
<img src={image2}></img>
          </div>
          <div className='banner_title'>
          <p className='title'>
                두번째 슬라이드 입니다.
              </p>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='banner_container'> 
          <div className='image_container'>
<img src={image3}></img>
          </div>
          <div className='banner_title'>
          <p className='title'>
                세번째 슬라이드 입니다.
              </p>
          </div>
        </div></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Intro