import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import GalleryImage from './GalleryImage';
import { galleryImages } from './galleryData';

const Gallery = () => {
  return (
    <section className="py-20 bg-black" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-gray-400 uppercase tracking-wider mb-4">
            Witness The Awesomeness
          </h3>
          <h2 className="text-5xl font-bold text-white mb-8">Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            GDP more precisely Digital Diaspor brings both from the captures of a particular to
            the really eye soothing captures to our viewers!
          </p>
        </motion.div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.id} style={{ width: '300px', height: '400px' }}>
              <GalleryImage
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;