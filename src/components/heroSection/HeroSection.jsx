import SAIT from '../../assets/f.jpg'
import kUMAR from '../../assets/ss.jpeg'
import kUMAR1 from '../../assets/g.jpg'
import Mens from '../../assets/mens.jpeg'
import WoMens from '../../assets/womens.jpg'
import Hominterior from '../../assets/home.jpg'




import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {


    const images = [
        { url: kUMAR1, name: 'Shoes Banner' },
        { url: kUMAR, name: 'Laptop Banner' },
        { url: SAIT, name: 'Mobile Phone Banner' },
        { url: Mens, name: 'Mens Clothing Banner' },
        { url: WoMens, name: 'Women Clothing Banner' },
        { url: Hominterior, name: 'Home Interiors Banner' },
       ];



    const slides = images?.map((image, index) => (
        <SwiperSlide key={index}>
          
            <div >
            <img className=" h-52 w-full lg:h-96" src={image.url} alt={image.name} />
            </div>
          
        </SwiperSlide>
      ));
    return (
        <div>
          <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className=" h-full"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {slides}
      </Swiper>
        </div>
    );
}

export default HeroSection;
