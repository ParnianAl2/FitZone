import React, { useEffect, useState } from 'react'
import fetchData from '../../../Utils/FetchData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
export default function DealsSlider() {
    const  [slide,setSlide] = useState()
    useEffect(() => {
        // (async () => {
        //     const res = await fetchData("sliders?populate=*");
        //     setSlide(res.data);
        // })();
        (async ()  => {
            const res = await fetchData('products?populate=*&filters[Discount][$gt]=10');
            setSlide(res.data);
        })();
    },[])
    console.log(slide);
    const slides = slide?.map((e,index) => <SwiperSlide key = {index}>
            <img src={import.meta.env.VITE_BASE_URL+ e?.image?.[0]?.url}/>
        </SwiperSlide>)
    return (
        <>
        <Swiper
        slidesPerView={3}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination , Autoplay , Navigation]}
        className="DealsSlider"
      >
            {slides}
        </Swiper>
        </>
  )
}
