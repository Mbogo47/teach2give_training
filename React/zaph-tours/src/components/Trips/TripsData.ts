// src/data/tripTypesData.ts

export type TripType = {
  title: string;
  images: string[];
  description: string;
  price: string;
};

const tripTypes: TripType[] = [
  {
    title: "Honeymoon",
    images: ["/honeymoon-1.jfif", "/honeymoon-2.jfif"],
    description:
      "Celebrate your love with romantic safaris, secluded beach stays, and luxury lodges for unforgettable experiences.",
    price: "Starting from Ksh 180,000 per couple",
  },
  {
    title: "Family",
    images: ["/honeymoon-1.jfif", "/honeymoon-2.jfif"],
    description:
      "Kid-friendly activities, safe lodges, and wildlife tours tailored for all ages.",
    price: "Starting from Ksh 120,000 for a family of 4",
  },
  {
    title: "Adventure",
    images: ["/honeymoon-1.jfif", "/honeymoon-2.jfif"],
    description:
      "Explore rugged terrains, hike mountains, and raft rivers with thrilling adventure tours.",
    price: "From Ksh 90,000 per person",
  },
  {
    title: "Cultural Tours",
    images: ["/honeymoon-1.jfif", "/honeymoon-2.jfif"],
    description:
      "Visit traditional villages, local markets, and historical sites for a rich cultural experience.",
    price: "From Ksh 75,000 per person",
  },
  {
    title: "Wildlife Safaris",
    images: ["/honeymoon-1.jfif", "/honeymoon-2.jfif"],
    description:
      "See the Big Five and more with guided safaris in Kenya’s top reserves.",
    price: "From Ksh 105,000 per person",
  },
  {
    title: "Eco-Tours",
    images: ["/honeymoon-1.jfif", "/honeymoon-2.jfif"],
    description:
      "Eco-friendly adventures promoting conservation and sustainable travel.",
    price: "From Ksh 80,000 per person",
  },
  {
    title: "Luxury Vacations",
    images: ["/honeymoon-1.jfif", "/honeymoon-2.jfif"],
    description:
      "Top-tier lodges, gourmet meals, private guides and high-end travel experiences.",
    price: "From Ksh 300,000 per person",
  },
  {
    title: "Beach Holidays",
    images: ["/honeymoon-1.jfif", "/honeymoon-2.jfif"],
    description:
      "Sunbathe on white sands in Diani, Watamu, or Malindi with crystal-clear waters.",
    price: "From Ksh 95,000 per person",
  },
  {
    title: "Wellness Retreats",
    images: ["/honeymoon-1.jfif", "/honeymoon-2.jfif"],
    description:
      "Yoga, spa treatments, and peaceful nature stays to restore your well-being.",
    price: "From Ksh 135,000 per person",
  },
  {
    title: "Culinary Tours",
    images: ["/honeymoon-1.jfif", "/honeymoon-2.jfif"],
    description:
      "Savor Kenyan cuisine, attend cooking classes, and visit local food markets.",
    price: "From Ksh 85,000 per person",
  },
];

export default tripTypes;
