import { Card, CardContent, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import { testimonials } from "./TestimonialsData.ts";

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
      loop={false}
      slidesPerView={"auto"}
      spaceBetween={16}
      style={{ padding: "16px" }}
    >
      {testimonials.map((card, index) => (
        <SwiperSlide key={index} style={{ width: "350px", flexShrink: 0 }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              //   height: "auto",
              height: 250,
            }}
          >
            {/* <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.name}
            /> */}
            <Avatar
              alt={card.name}
              src={card.image}
              sx={{ width: 100, height: 100 }}
            />
            <CardContent>
              <Typography
                variant="h6"
                color="secondary.dark"
                textAlign="center"
              >
                {card.name}
              </Typography>
              <Typography variant="body2" gutterBottom textAlign="center">
                {card.message}
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
