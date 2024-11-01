"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MapPin, Star, UserRound } from "lucide-react";
import Image from "next/image";
import { AllTopRentedItems } from "@/app/product";

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
  productId: number;
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

const itemMappings = generateItemMappings(AllTopRentedItems);

export const Card: React.FC<TopRentedItemsCardsProps> = ({
  image,
  itemName,
  lender,
  place,
  oldPrice,
  currentPrice,
  duration,
  rating,
  slug,
  id,
  productId,
}) => {
  return (
    <Link
      href={`/top-rented/${productId}`}
      className="min-w-[285px] h-[360px] rounded bg-[#8D8BD3]/20 shadow-md flex flex-col gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600 text-white"
      style={{ cursor: "pointer" }}
    >
      <div className="mt-4 mx-4 rounded overflow-hidden">
        <Image
          src={image}
          alt={itemName}
          width={285}
          height={200}
          className="object-cover"
        />
      </div>
      <div className="px-4 flex flex-col gap-1 mt-2">
        <h3 className="text-lg font-semibold text-white">{itemName}</h3>
        <div className="flex items-center text-sm text-white gap-1">
          <UserRound size={16} />
          <span>{lender}</span>
        </div>
        <div className="flex items-center text-sm text-white gap-1">
          <MapPin size={16} />
          <span>{place}</span>
        </div>
        <div className="flex justify-between items-center pb-4">
          <div>
            <span className="text-red-400 text-sm line-through">
              ₹{oldPrice}
            </span>{" "}
            <span className="text-green-600 text-lg font-bold">
              ₹{currentPrice}
            </span>{" "}
            <span className="text-white text-sm">/ {duration}</span>
          </div>
          <div className="flex items-center text-yellow-500 gap-1 text-base font-semibold">
            {rating}
            <Star size={16} />
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
  ];

  return (
    <div className="relative">
      <div
        className="flex gap-4 overflow-auto no-scrollbar"
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
                margin: "10px",
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
                productId={item.productId}
                id={id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRentedItemsCards;
