import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCube } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-cube';
import styles from './Home.module.scss';
import Image from '../../assets/Image/SliderImage/image.png';
import swipeSound from '../../assets/Sound/stoneSlide.mp3';

export const Home = () => {
  const handleSwipe = () => {
    const audio = new Audio(swipeSound);
    audio.play();
  };

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.mySwiper}
        modules={[Pagination, Navigation, EffectCube]}
        spaceBetween={0}
        slidesPerView={1}
        speed={4500}
        pagination={{ clickable: true }}
        navigation
        allowTouchMove={false}
        loop={true}
        effect="cube"
        cubeEffect={{
          shadow: false,
          slideShadows: false,
        }}
        onSlideChangeTransitionStart={handleSwipe}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img className={styles.image} src={Image} alt="1" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img className={styles.image} src={Image} alt="2" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img className={styles.image} src={Image} alt="3" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img className={styles.image} src={Image} alt="4" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img className={styles.image} src={Image} alt="5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
