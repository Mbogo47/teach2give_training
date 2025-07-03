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
    image: "/hero.jpg",
    price: "From $250",
  },
  {
    title: "Mt. Ruwenzori Expedition",
    description:
      "Explore the mystical 'Mountains of the Moon' with glacier peaks and rich biodiversity.",
    image: "/hero.jpg",
    price: "From $300",
  },
  {
    title: "Lake Nakuru Safari",
    description:
      "Witness the famous flamingos and spot rhinos at the beautiful Lake Nakuru National Park.",
    image: "/hero.jpg",
    price: "From $180",
  },
  {
    title: "Tsavo National Park Tour",
    description:
      "Enjoy a classic safari through Kenya’s largest park—home to red elephants and lions.",
    image: "/hero.jpg",
    price: "From $220",
  },
  {
    title: "Nairobi National Park Getaway",
    description:
      "A quick escape into the wild just outside the city—perfect for short nature lovers’ trips.",
    image: "/hero.jpg",
    price: "From $90",
  },
  {
    title: "Coastal Kenya Beach Escape",
    description:
      "Relax on white-sand beaches, explore Swahili culture, and enjoy marine adventures.",
    image: "/hero.jpg",
    price: "From $260",
  },
];
