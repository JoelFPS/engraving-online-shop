// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src='test-img/pen4.png' alt='don' width={'30%'}></img></SwiperSlide>
      <SwiperSlide><img src='f/wot.png' alt='wot' width={'30%'}></img></SwiperSlide>
      <SwiperSlide><img src='test-img/pen2.png' alt='reh' width={'30%'}></img></SwiperSlide>
      <SwiperSlide><img src='test-img/pen3.png' alt='ter' width={'30%'}></img></SwiperSlide>
    </Swiper>
  );
};
