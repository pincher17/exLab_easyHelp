/* eslint-disable import/no-unresolved */
import React from 'react'

// import required modules
import { Navigation } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { StyledSlider, Wrapper, WrapperSlide } from './Slider.styles'

import CardVacancy from 'components/CardVacancy'
import useGetVacancies from 'hooks/useGetVacancies'

const Slider: React.FC = () => {
  const { data } = useGetVacancies()

  return (
    <StyledSlider
      slidesPerView={1}
      spaceBetween={15}
      navigation
      modules={[Navigation]}
      className="mySwiper"
      breakpoints={{ 540: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
    >
      <Wrapper>
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.vacancyId}>
              <WrapperSlide>
                <CardVacancy vacancy={item} />
              </WrapperSlide>
            </SwiperSlide>
          ))}
      </Wrapper>
    </StyledSlider>
  )
}

export default Slider
