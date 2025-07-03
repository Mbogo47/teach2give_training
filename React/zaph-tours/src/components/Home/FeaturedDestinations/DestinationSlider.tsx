import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import { cards } from "./DestinationData.ts";

const CardSlider: React.FC = () => {
  return (
    <Swiper
      modules={[FreeMode, Autoplay]}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      speed={10000}
      loop={true}
      slidesPerView={"auto"}
      spaceBetween={16}
      style={{ padding: "16px" }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} style={{ width: "350px", flexShrink: 0 }}>
          <Card sx={{ height: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h6" color="secondary.dark">
                {card.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {card.description}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {card.price}
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
