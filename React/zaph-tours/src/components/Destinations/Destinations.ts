export type Destination = {
  id: number;
  name: string;
  description: string;
  image: string;
  groupPrice: string;
  individualPrice: string;
  link: string;
};

const destinationsData: Destination[] = [
  {
    id: 1,
    name: "Mt. Kenya",
    description:
      "Africa's second-highest peak with glaciers and alpine meadows.",
    image: "/mt-kenya.jfif",
    groupPrice: "Ksh 25,000",
    individualPrice: "Ksh 3,500",
    link: "#",
  },
  {
    id: 2,
    name: "Mt. Ruwenzori",
    description: "The legendary Mountains of the Moon, rich in alpine flora.",
    image: "/mt-ruwenzori.webp",
    groupPrice: "Ksh 30,000",
    individualPrice: "Ksh 4,000",
    link: "#",
  },
  {
    id: 3,
    name: "Lake Nakuru",
    description:
      "Home to flamingos and endangered rhinos in a beautiful setting.",
    image: "/lake-nakuru.jfif",
    groupPrice: "Ksh 15,000",
    individualPrice: "Ksh 2,000",
    link: "#",
  },
  {
    id: 4,
    name: "Tsavo National Park",
    description:
      "Kenya’s largest park with red elephants and volcanic landscapes.",
    image: "/Tsavo.jpg",
    groupPrice: "Ksh 20,000",
    individualPrice: "Ksh 2,500",
    link: "#",
  },
  {
    id: 5,
    name: "Nairobi National Park",
    description:
      "Wildlife safari next to the city skyline, a unique experience.",
    image: "/nairobi.jfif",
    groupPrice: "Ksh 10,000",
    individualPrice: "Ksh 1,500",
    link: "#",
  },
  {
    id: 6,
    name: "Coastal Kenya",
    description: "White sandy beaches, Swahili culture, and ocean adventures.",
    image: "/diani.jpg",
    groupPrice: "Ksh 35,000",
    individualPrice: "Ksh 5,000",
    link: "#",
  },
  {
    id: 7,
    name: "Masai Mara",
    description:
      "Iconic game reserve known for the Great Migration and Big Five.",
    image: "/masai-mara.jpg",
    groupPrice: "Ksh 40,000",
    individualPrice: "Ksh 6,000",
    link: "#",
  },
  {
    id: 8,
    name: "Aberdare Ranges",
    description:
      "Lush highlands with waterfalls, forest walks, and game viewing.",
    image: "/aberdares.jpg",
    groupPrice: "Ksh 18,000",
    individualPrice: "Ksh 2,800",
    link: "#",
  },
  {
    id: 9,
    name: "Lake Naivasha",
    description:
      "Freshwater lake ideal for boat rides, hippos, and birdwatching.",
    image: "/lake-naivasha.jpg",
    groupPrice: "Ksh 12,000",
    individualPrice: "Ksh 1,800",
    link: "#",
  },
  {
    id: 10,
    name: "Hell’s Gate",
    description: "Adventure-filled gorges, cliffs, and biking among wildlife.",
    image: "/hells-gate.jpg",
    groupPrice: "Ksh 10,000",
    individualPrice: "Ksh 1,500",
    link: "#",
  },
  {
    id: 11,
    name: "Watamu Beach",
    description:
      "Pristine white sand beaches, coral reefs, and marine parks ideal for snorkeling and relaxation.",
    image: "/watamu.jpg",
    groupPrice: "Ksh 45,000",
    individualPrice: "Ksh 7,500",
    link: "#",
  },
  {
    id: 12,
    name: "Samburu National Reserve",
    description: "Northern Kenya’s gem with rare species and rich culture.",
    image: "/samburu.jpg",
    groupPrice: "Ksh 28,000",
    individualPrice: "Ksh 4,200",
    link: "#",
  },
  {
    id: 13,
    name: "Chyulu Hills",
    description: "Green rolling hills and lava caves near Amboseli.",
    image: "/chyulu.jpg",
    groupPrice: "Ksh 22,000",
    individualPrice: "Ksh 3,000",
    link: "#",
  },
  {
    id: 14,
    name: "Chalbi Desert",
    description:
      "A dramatic, starkly beautiful desert ideal for adventure seekers and cultural immersion.",
    image: "/chalbi.jpg",
    groupPrice: "Ksh 60,000",
    individualPrice: "Ksh 10,000",
    link: "#",
  },
  {
    id: 15,
    name: "Ol Pejeta Conservancy",
    description: "Famous for rhino conservation and luxury lodges.",
    image: "/ol-pejeta.jpg",
    groupPrice: "Ksh 36,000",
    individualPrice: "Ksh 5,200",
    link: "#",
  },
];

export default destinationsData;
