import { Swiper } from "swiper/react";
import "swiper/css";

const Slider = ({ children }) => {
  return (
    <Swiper spaceBetween={20} slidesPerView={5}>
      {children}
    </Swiper>
  );
};

export default Slider;
