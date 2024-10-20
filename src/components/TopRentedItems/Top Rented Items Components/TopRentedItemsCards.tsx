"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";

type Review = {
  user: string;
  rating: number;
  comment: string;
};
type TopRentedItemsCardsProps = {
  image: string;
  itemName: string;
  lender: string;
  place: string;
  oldPrice: number;
  currentPrice: number;
  duration: string;
  rating: number;
  slug: string;
  id: number;
  description: string;
  reviews: Review[];
  termsAndConditions: string;
};

const generateRandomId = () => {
  return Math.floor(1000000000 + Math.random() * 9000000000);
};

const generateItemMappings = (
  items: Omit<TopRentedItemsCardsProps, "id">[]
) => {
  const itemMappings: { [key: number]: TopRentedItemsCardsProps } = {};
  items.forEach((item) => {
    let id;
    do {
      id = generateRandomId();
    } while (itemMappings[id]);
    itemMappings[id] = { ...item, id };
  });
  return itemMappings;
};

const AllTopRentedItems = [
  {
    image: "https://picsum.photos/243/237",
    itemName: "Toyota Car",
    lender: "Saransh",
    place: "Gurgaon",
    oldPrice: 5000,
    currentPrice: 3500,
    duration: "week",
    rating: 4.8,
    slug: "toyota-car",
    description:
      "Rent the stylish and comfortable Toyota Car, perfect for your city rides or weekend getaways. Enjoy the smooth driving experience with great mileage, available at an affordable weekly rate.",
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "The car was in excellent condition and a pleasure to drive.",
      },
      {
        user: "Jane Smith",
        rating: 4.5,
        comment:
          "Great rental experience, but the pickup location was a bit far.",
      },
    ],
    termsAndConditions:
      "The vehicle must be returned with a full tank of fuel. A valid driving license is required. Additional charges apply for late returns. Damage to the vehicle will be charged separately.",
  },
  {
    image: "https://picsum.photos/242/237",
    itemName: "Hairdryer",
    lender: "Rakiul",
    place: "Malda",
    oldPrice: 1000,
    currentPrice: 800,
    duration: "week",
    rating: 4.9,
    slug: "hairdryer",
    description:
      "Achieve salon-quality hair styling at home with this high-performance hairdryer. It’s lightweight, powerful, and comes with multiple heat settings to match your styling needs.",
    reviews: [
      {
        user: "Alice Brown",
        rating: 5,
        comment:
          "Fantastic product! It dried my hair quickly without any damage.",
      },
      {
        user: "Emily Green",
        rating: 4.8,
        comment: "Great quality, and very easy to use.",
      },
    ],
    termsAndConditions:
      "Only use as instructed in the manual. Do not submerge in water. Report any damage immediately. Any repair costs due to misuse will be charged to the renter.",
  },
  {
    image: "https://picsum.photos/243/236",
    itemName: "Laptop",
    lender: "Dev",
    place: "Canada",
    oldPrice: 10000,
    currentPrice: 9500,
    duration: "day",
    rating: 4.7,
    slug: "laptop",
    description:
      "Boost your productivity with this powerful laptop equipped with the latest processor and ample storage. Ideal for both work and entertainment, rent it on a daily basis for short-term projects or travel.",
    reviews: [
      {
        user: "Michael Johnson",
        rating: 4.5,
        comment: "A good laptop for work, but I faced some battery issues.",
      },
      {
        user: "Chris Lee",
        rating: 4.7,
        comment: "Very fast and smooth. Perfect for my presentation needs.",
      },
    ],
    termsAndConditions:
      "Handle with care. Do not install any unauthorized software. All files should be backed up, as data loss will not be the responsibility of the lender. Late returns will incur a daily charge.",
  },
  {
    image: "https://picsum.photos/243/237",
    itemName: "Toyota Car",
    lender: "Saransh",
    place: "Gurgaon",
    oldPrice: 5000,
    currentPrice: 3500,
    duration: "week",
    rating: 4.8,
    slug: "toyota-car",
    description:
      "Experience the comfort and style of the Toyota Car for your travel needs. With spacious interiors and excellent handling, it's the perfect choice for family trips or business travel.",
    reviews: [
      {
        user: "Mark Evans",
        rating: 5,
        comment: "Very smooth and comfortable ride. Worth every penny!",
      },
      {
        user: "Laura White",
        rating: 4.6,
        comment:
          "Car was good, but a bit more cleaning would have been appreciated.",
      },
    ],
    termsAndConditions:
      "The vehicle must be returned in the same condition as received. An additional cleaning fee will be charged if returned unclean. Ensure all documents are in the car when returning.",
  },
  {
    image: "https://picsum.photos/242/237",
    itemName: "Hairdryer",
    lender: "Rakiul",
    place: "Malda",
    oldPrice: 1000,
    currentPrice: 800,
    duration: "week",
    rating: 4.9,
    slug: "hairdryer",
    description:
      "Get the perfect blow-dry every time with this reliable hairdryer. Designed for ease of use, it features advanced technology to protect your hair while offering efficient drying and styling.",
    reviews: [
      {
        user: "Sophia Grey",
        rating: 4.9,
        comment: "Loved it! My hair looks so much healthier.",
      },
      {
        user: "Hannah King",
        rating: 4.8,
        comment: "Perfect for everyday use. Lightweight and powerful.",
      },
    ],
    termsAndConditions:
      "Only use with the supplied attachments. Do not expose to extreme temperatures. Any repair costs due to misuse will be charged to the renter.",
  },
  {
    image: "https://picsum.photos/243/236",
    itemName: "Laptop",
    lender: "Dev",
    place: "Canada",
    oldPrice: 10000,
    currentPrice: 9500,
    duration: "day",
    rating: 4.7,
    slug: "laptop",
    description:
      "Work on the go or enjoy high-quality streaming with this versatile laptop. Comes with a full HD display, long battery life, and the latest software to keep you productive anywhere.",
    reviews: [
      {
        user: "Daniel Brown",
        rating: 4.6,
        comment: "Good value for a rental. The screen quality is amazing.",
      },
      {
        user: "Jessica Adams",
        rating: 4.8,
        comment: "Excellent performance and battery life. Will rent again.",
      },
    ],
    termsAndConditions:
      "Use only for work or academic purposes. Any damage or malfunction should be reported immediately. Data loss or damage due to unauthorized software will not be covered.",
  },
  {
    image: "https://picsum.photos/243/237",
    itemName: "Toyota Car",
    lender: "Saransh",
    place: "Gurgaon",
    oldPrice: 5000,
    currentPrice: 3500,
    duration: "week",
    rating: 4.8,
    slug: "toyota-car",
    description:
      "Whether for business or leisure, this Toyota Car is the perfect rental for your transportation needs. Drive with confidence and enjoy top-notch comfort and performance.",
    reviews: [
      {
        user: "Sarah Wilson",
        rating: 4.9,
        comment: "Super comfortable and easy to drive. Highly recommended.",
      },
      {
        user: "David Harris",
        rating: 4.7,
        comment: "Car was in great shape. Good value for a week-long rental.",
      },
    ],
    termsAndConditions:
      "Ensure all documents are present during the rental period. Damage to the car will be charged based on repair estimates. Return the vehicle within the agreed time frame.",
  },
];

const itemMappings = generateItemMappings(AllTopRentedItems);

const Card: React.FC<TopRentedItemsCardsProps> = ({
  image,
  itemName,
  lender,
  place,
  oldPrice,
  currentPrice,
  duration,
  rating,
  slug,
  description,
  reviews,
  termsAndConditions,
  id,
}) => {
  const queryParams = new URLSearchParams({
    image,
    itemName,
    lender,
    place,
    oldPrice: oldPrice.toString(),
    currentPrice: currentPrice.toString(),
    duration,
    rating: rating.toString(),
    description: description.toString(),
    reviews: JSON.stringify(reviews),
    termsAndConditions,
  }).toString();

  return (
    <Link
      href={`/items/${id}?${queryParams}`}
      target="_blank"
      className="min-w-[285px] h-[360px] rounded-[20px] bg-[#8D8BD3]/20 flex flex-col gap-[7px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500" // Hover zoom effect with transition and gradient
      style={{ cursor: "pointer" }}
    >
      <div className="mt-[20px] mx-[20px]">
        <Image
          src={image}
          alt={itemName}
          width={285}
          height={200}
          className="rounded-[15px]"
        />
      </div>
      <div className="text-white mx-[20px]">
        <div className="font-outfit font-semibold text-[22px]">{itemName}</div>
        <div className="flex flex-row gap-[20px] text-center">
          <div className="font-outfit font-semibold text-[18px] text-[#FFFFFF]/80">
            {lender}
          </div>
          <div className="flex flex-row gap-[1px] items-center">
            <div>
              <MapPin className="size-[20px]" />
            </div>
            <div className="font-outfit font-medium text-[16px] text-[#FFFFFF]/80">
              {place}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <span className="font-outfit font-medium text-red-300 text-[14px] line-through">
              ₹{oldPrice}
            </span>{" "}
            -{" "}
            <span className="font-outfit font-semibold text-green-500 text-[20px]">
              ₹{currentPrice}
            </span>{" "}
            <span className="font-outfit font-medium text-[14px]">
              / {duration}
            </span>
          </div>
          <div className="font-outfit font-semibold text-[15px] rounded-[5px] bg-[#C8C7F4]/20 text-center px-1 w-fit h-fit flex flex-row items-center gap-1">
            {rating}
            <Star className="size-[15px]" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const TopRentedItemsCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current && hoveredIndex === null) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, [hoveredIndex]);

  const allItemsList = [
    ...AllTopRentedItems,
    ...AllTopRentedItems,
    ...AllTopRentedItems,
    ...AllTopRentedItems,
    ...AllTopRentedItems,
  ];

  return (
    <div className="relative">
      <div
        className="flex flex-row gap-[14px] justify-evenly items-center overflow-auto no-scrollbar"
        ref={scrollRef}
        onMouseEnter={() => setHoveredIndex(null)}
      >
        {allItemsList.map((item, index) => {
          const id = Object.keys(itemMappings).find(
            (key) => itemMappings[+key].slug === item.slug
          ) as unknown as number;
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity:
                  hoveredIndex !== null && hoveredIndex !== index ? 0.6 : 1,
                transition: "opacity 0.2s ease-in-out",
                margin: "10px", // Add margin to provide extra space for the pop effect
              }}
            >
              <Card
                image={item.image}
                itemName={item.itemName}
                lender={item.lender}
                place={item.place}
                oldPrice={item.oldPrice}
                currentPrice={item.currentPrice}
                duration={item.duration}
                rating={item.rating}
                slug={item.slug}
                id={id}
                description={item.description}
                reviews={item.reviews}
                termsAndConditions={item.termsAndConditions}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRentedItemsCards;
