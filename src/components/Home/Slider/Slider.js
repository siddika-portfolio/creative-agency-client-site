import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Slider.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const slideData = [
    {
        id: 1,
        img: 'https://i.ibb.co/nk5mh9Y/carousel-1.png',
    },
    {
        id: 2,
        img: 'https://i.ibb.co/zZqCMs4/carousel-2.png',
    },
    {
        id: 3,
        img: 'https://i.ibb.co/HxsKTd7/carousel-3.png',
    },
    {
        id: 4,
        img: 'https://i.ibb.co/mXBSTn3/carousel-4.png',
    },
    {
        id: 5,
        img: 'https://i.ibb.co/51TgNf5/carousel-5.png',
    }

]

const Slider = () => {
    return (
        <div className="slider-section my-5 pt-5">
            <div className=" slide container">
                <div className="text-center py-5">
                    <h2 className=" text-light">Here are some of<span> our works</span></h2>
                </div>
                <div className="col-sm-12 col-xl-12">
                    <Swiper className="pb-2 "

                        spaceBetween={18}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >

                        {
                            slideData.map(data => (
                                <SwiperSlide key={data.id} className="pt-5">
                                    <div className="slide-content">
                                        <img className="img-fluid" src={data.img} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;