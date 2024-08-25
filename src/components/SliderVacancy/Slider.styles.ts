import styled from 'styled-components'
import { Swiper } from 'swiper/react'

import arrowNext from 'assets/icons/arrowNext.svg'
import arrowNextHover from 'assets/icons/arrowNextHover.svg'
import arrowPrev from 'assets/icons/arrowPrev.svg'
import arrowPrevHover from 'assets/icons/arrowPrevHover.svg'

export const WrapperSlide = styled('div')`
  padding: 20px 0px;
`
export const Wrapper = styled('div')`
  padding: 0px 24px;
`
export const StyledSlider = styled(Swiper)`
  padding: 0px 18px 0px 18px;
  & > div.swiper-button-next {
    background-image: url(${arrowNext});
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: center;
    width: 44px;
    height: 44px;
    background-color: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  & > div.swiper-button-next:hover {
    background-image: url(${arrowNextHover});
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: center;
    width: 44px;
    height: 44px;
    background-color: #1c9da9;
    border-radius: 50%;
    -webkit-box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
  }

  & > .swiper-button-next::after {
    display: none;
  }

  & > div.swiper-button-prev {
    background-image: url(${arrowPrev});
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: center;
    width: 44px;
    height: 44px;
    background-color: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  & > div.swiper-button-prev:hover {
    background-image: url(${arrowPrevHover});
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: center;
    width: 44px;
    height: 44px;
    background-color: #1c9da9;
    border-radius: 50%;
    -webkit-box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
  }

  & > .swiper-button-prev::after {
    display: none;
  }
`
