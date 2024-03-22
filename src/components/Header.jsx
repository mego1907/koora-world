"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const allSlides = [
  {
    id: 1,
    img: "/assets/Wide-Slider.png",
    title: "ميسي ينتصر بنهائي كاس العالم و يتوج الأرجنتين ببطولة كاس العالم "
  },
  {
    id: 2,
    img: "/assets/Wide-Slider.png",
    title: "ميسي ينتصر بنهائي كاس العالم و يتوج الأرجنتين ببطولة كاس العالم "
  },
  {
    id: 3,
    img: "/assets/Wide-Slider.png",
    title: "ميسي ينتصر بنهائي كاس العالم و يتوج الأرجنتين ببطولة كاس العالم "
  }
]

const Header = ({ sliderData }) => {
  return (
    <div className="overflow-hidden bg-secondary">
      <div className="container">
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          // height={650}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          allowTouchMove
        >
          {
            sliderData?.map(({ image, title, id }) => (
              <SwiperSlide 
                key={id} 
                className='w-full lg:h-[650px] lg:min-h-[650px] h-[350px] relative bg-cover bg-slate-600' 
                // style={{ backgroundImage: `url(${image})` }}
              >
                <img src={image} alt={title} className='w-full lg:h-[650px] h-[350px] object-contain' />
                <h3 className="absolute text-xl font-medium text-white lg:w-8/12 lg:text-4xl lg:bottom-16 bottom-10 right-4">{title}</h3>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Header