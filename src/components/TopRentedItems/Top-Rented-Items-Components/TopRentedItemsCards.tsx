"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";
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

const generateItemMappings = (items: Omit<TopRentedItemsCardsProps, 'id'>[]) => {
    const itemMappings: { [key: number]: TopRentedItemsCardsProps } = {};
    items.forEach(item => {
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
    productId,
    slug,
    id
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
        productId: productId.toString(),
    }).toString();

    return (
        <Link
            href={`/top-rented/${productId}`}
         
            className="min-w-[285px] h-[360px] rounded bg-[#8D8BD3]/20 flex flex-col gap-[7px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500" // Hover zoom effect with transition and gradient
            style={{ cursor: "pointer" }}
        >
            <div className="mt-[20px] mx-[20px]">
                <Image
                    src={image}
                    alt={itemName}
                    width={285}
                    height={200}
                    className="rounded"
                />
            </div>
            <div className="text-white mx-[20px]">
                <div className="font-outfit font-semibold text-[22px]">{itemName}</div>
                <div className="flex flex-row gap-[20px] text-center">
                    <div className="font-outfit font-semibold text-[18px] text-[#FFFFFF]/80">{lender}</div>
                    <div className="flex flex-row gap-[1px] items-center">
                        <div>
                            <MapPin className="size-[20px]" />
                        </div>
                        <div className="font-outfit font-medium text-[16px] text-[#FFFFFF]/80">{place}</div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <span className="font-outfit font-medium text-red-300 text-[14px] line-through">₹{oldPrice}</span> - <span className="font-outfit font-semibold text-green-500 text-[20px]">₹{currentPrice}</span> <span className="font-outfit font-medium text-[14px]">/ {duration}</span>
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

    const allItemsList = [...AllTopRentedItems, ...AllTopRentedItems, ...AllTopRentedItems, ...AllTopRentedItems, ...AllTopRentedItems];

    return (
        <div className="relative">
            <div
                className="flex flex-row gap-[14px] justify-evenly items-center overflow-auto no-scrollbar"
                ref={scrollRef}
                onMouseEnter={() => setHoveredIndex(null)}
            >
                {allItemsList.map((item, index) => {
                    const id = Object.keys(itemMappings).find(key => itemMappings[+key].slug === item.slug) as unknown as number;
                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.6 : 1,
                                transition: 'opacity 0.2s ease-in-out',
                                margin: '10px', // Add margin to provide extra space for the pop effect
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