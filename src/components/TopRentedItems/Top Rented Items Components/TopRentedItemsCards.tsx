"use client"

import { useState } from "react";

type TopRentedItemsCardsProps = {
    image : string;
    name : string;
    lender : string;
    place : string;
    oldPrice : number;
    currentPrice : number;
    duration : string;
    rating : number;
}

const AllTopRentedItems = [
    {
        image : "https://picsum.photos/243/237",
        name : "Toyota Car",
        lender : "Saransh",
        place : "Gurgaon",
        oldPrice : 5000,
        currentPrice : 3500,
        duration : "week",
        rating : 4.8
    },
    {
        image : "https://picsum.photos/242/237",
        name : "Hairdryer",
        lender : "Rakiul",
        place : "Malda",
        oldPrice : 1000,
        currentPrice : 800,
        duration : "week",
        rating : 4.9
    },
    {
        image : "https://picsum.photos/243/236",
        name : "Laptop",
        lender : "Dev",
        place : "Canada",
        oldPrice : 10000,
        currentPrice : 9500,
        duration : "day",
        rating : 4.7
    },
    {
        image : "https://picsum.photos/243/236",
        name : "Laptop",
        lender : "Dev",
        place : "Canada",
        oldPrice : 10000,
        currentPrice : 9500,
        duration : "day",
        rating : 4.7
    },
    {
        image : "https://picsum.photos/243/236",
        name : "Laptop",
        lender : "Dev",
        place : "Canada",
        oldPrice : 10000,
        currentPrice : 9500,
        duration : "day",
        rating : 4.7
    },
]

const Card : React.FC<TopRentedItemsCardsProps> = ({
    image,
    name,
    lender,
    place,
    oldPrice,
    currentPrice,
    duration,
    rating,
}) => (
    <div className="min-w-[285px] h-[350px] rounded-[20px] bg-[#8D8BD3]/20 flex flex-col gap-[7px]">
        <div className="mt-[20px] mx-[20px]">
            <img
                src={image} 
                className="rounded-[15px]"
            />
        </div>
        <div className="text-white mx-[20px]">
            <div className="font-outfit font-semibold text-[15px]">{name}</div>
            <div className="flex flex-row gap-[4px] text-center">
                <div className="font-outfit font-semibold text-[10px] text-[#FFFFFF]/80">{lender}</div>
                <div className="flex flex-row gap-[2px]">
                    {/* Replace the bottom div with the location image */}
                    <div className="bg-pink-200 opacity-30 w-[9px] h-[9px]"></div>
                    <div className="font-outfit font-semibold text-[10px] text-[#FFFFFF]/80">{place}</div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
)

const TopRentedItemsCards = () => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row gap-[14px] justify-evenly items-center overflow-auto">
        {AllTopRentedItems.map((item, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                        opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.6 : 1,
                        transition: 'opacity 0.2s ease-in-out'
                    }}
                >
                    <Card
                        image={item.image}
                        name={item.name}
                        lender={item.lender}
                        place={item.place}
                        oldPrice={item.oldPrice}
                        currentPrice={item.currentPrice}
                        duration={item.duration}
                        rating={item.rating}
                    />
                </div>
            ))}
    </div>
  )
}

export default TopRentedItemsCards