export type CardData = {
  title: string;
  description: string;
  image: string;
  price: string;
};

export const cards: CardData[] = [
  {
    title: "Mt. Kenya Adventure",
    description:
      "Experience breathtaking alpine trails and exotic wildlife on Kenya’s highest mountain.",
    image: "/mt-kenya.jfif",
    price: "From Ksh 32,500",
  },
  {
    title: "Mt. Ruwenzori Expedition",
    description:
      "Explore the mystical 'Mountains of the Moon' with glacier peaks and rich biodiversity.",
    image: "/mt-ruwenzori.webp",
    price: "From Ksh 39,000",
  },
  {
    title: "Lake Nakuru Safari",
    description:
      "Witness the famous flamingos and spot rhinos at the beautiful Lake Nakuru National Park.",
    image: "/lake-nakuru.jfif",
    price: "From Ksh 23,400",
  },
  {
    title: "Tsavo National Park Tour",
    description:
      "Enjoy a classic safari through Kenya’s largest park—home to red elephants and lions.",
    image: "/Tsavo.jpg",
    price: "From Ksh 28,600",
  },
  {
    title: "Nairobi National Park Getaway",
    description:
      "A quick escape into the wild just outside the city—perfect for short nature lovers’ trips.",
    image: "/nairobi.jfif",
    price: "From Ksh 11,700",
  },
  {
    title: "Coastal Kenya Beach Escape",
    description:
      "Relax on white-sand beaches, explore Swahili culture, and enjoy marine adventures.",
    image: "/diani.jpg",
    price: "From Ksh 33,800",
  },
];
