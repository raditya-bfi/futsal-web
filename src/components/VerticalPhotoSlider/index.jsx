import React from 'react'

// Import Swiper React components
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function VerticalPhotoSlider({ photos }) {
  return (
    <Swiper
      autoplay={{
        delay: 30000,
        disableOnInteraction: false,
      }}
      pagination={{
        type: 'fraction',
      }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'
    >
      {photos &&
        photos.length > 0 &&
        photos.map((photo) => (
          <SwiperSlide key={`swiper-field-slide-${photo?.gallery_id}`}>
            <img
              src={photo?.image}
              alt={`swiper-field-slide-img-${photo?.gallery_id}`}
              style={{
                filter: 'drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.2))',
                borderRadius: '5px',
              }}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default VerticalPhotoSlider
