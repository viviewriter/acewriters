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
          id, userName, avatar, review,
        }) => (
          <SwiperSlide
            className="testimonial owl-carousel"
            key={id}
          >
            <div className="pic">
              <img src={avatar} alt="Avatar one" />
            </div>
            <p className="description">
              {review}
            </p>
            <div className="testimonial-profile">
              <h3 className="title">{userName}</h3>
              <br />
              <span className="post">Web Developer</span>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
    <hr />
  </section>
);

export default Testimonials;
