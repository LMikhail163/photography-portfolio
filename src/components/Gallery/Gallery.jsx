import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Gallery.css';

import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';
import gallery5 from '../../assets/gallery5.jpg';
import gallery6 from '../../assets/gallery6.jpg';
import gallery7 from '../../assets/gallery7.jpg';
import gallery8 from '../../assets/gallery8.jpg';
import gallery9 from '../../assets/gallery9.jpg';
import gallery10 from '../../assets/gallery10.jpg';
import gallery11 from '../../assets/gallery11.jpg';

const Gallery = () => {
  return (
    <section id='gallery'>
        <div className="container gallery__container">
            <div className="gallery__head">
                <h2 className='gallery__title'>My Gallery</h2>
                <div className="empty gallery__empty"></div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus eius nesciunt magnam repudiandae explicabo blanditiis atque perspiciatis! Quo aut quas ex, illum nostrum quidem minima obcaecati optio repellendus sapiente.
            </p>

            <div className="swiper-wrapper">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        599: {
                            spaceBetween: 40,
                            slidesPerView: 2
                        },
                        1023: {
                            spaceBetween: 60,
                            slidesPerView: 3
                        }
                    }}
                >
                    <SwiperSlide>
                        <article className='swiper-slide'>
                            <img src={gallery1} alt="gallery1" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='swiper-slide'>
                            <img src={gallery2} alt="gallery1" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='swiper-slide'>
                            <img src={gallery3} alt="gallery1" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='swiper-slide'>
                            <img src={gallery4} alt="gallery1" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='swiper-slide'>
                            <img src={gallery5} alt="gallery1" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='swiper-slide'>
                            <img src={gallery6} alt="gallery1" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='swiper-slide'>
                            <img src={gallery7} alt="gallery1" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='swiper-slide'>
                            <img src={gallery8} alt="gallery1" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='swiper-slide'>
                            <img src={gallery9} alt="gallery1" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='swiper-slide'>
                            <img src={gallery10} alt="gallery1" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='swiper-slide'>
                            <img src={gallery11} alt="gallery1" />
                        </article>
                    </SwiperSlide>

                </Swiper>

            </div>
        </div>
    </section>
  )
}

export default Gallery