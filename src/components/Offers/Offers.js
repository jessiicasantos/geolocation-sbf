import "./Offers.css";
import LogoNikeSnkrs from "../../assets/img/logo_nike_snkrs.svg";
import LogoJordan from "../../assets/img/logo_Jordan.svg";
import { Navigation, Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Offers = () => {
  const offersData = [
    {
      imgUrl: LogoNikeSnkrs,
      alt: "Logo Nike Sneakers",
      txt: " Fique por dentro dos lançamentos ",
      linkTxt: "SNKRS",
      link: "http://localhost:3000/",
    },
    {
      imgUrl: LogoJordan,
      alt: "Logo Jordan",
      txt: " Seja VIP ",
      linkTxt: "Jordan",
      link: "http://localhost:3000/",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      navigation
      grabCursor={true}
      mousewheel={true}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 2500,
      }}
      modules={[Navigation, Autoplay, Mousewheel, Keyboard]}
      className="offers"
    >
      {offersData.map((offer, i) => (
        <SwiperSlide key={`offer-${i}`}>
          <img src={offer.imgUrl} alt={offer.alt} />

          <span>
            {offer.txt}
            <a href={offer.link}>{offer.linkTxt}</a>
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Offers;
