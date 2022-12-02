import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';
import dataTestimonials from '../../data/dataTestimonials';

const Testimonials = () => (
  <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    <Swiper
      className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {
        dataTestimonials.map(({
          id, avatar,
        }) => (
          <SwiperSlide
            key={id}
          >
            <figure className="snip1574">
              <img src={avatar} alt="profile-sample2" />
            </figure>
          </SwiperSlide>
        ))
      }
    </Swiper>
    <hr />
  </section>
);

export default Testimonials;
