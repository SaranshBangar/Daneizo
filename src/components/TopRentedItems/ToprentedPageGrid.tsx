import Link from "next/link";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import { Card } from "./Top Rented Items Components/TopRentedItemsCards";

// const Card: React.FC<TopRentedItemsCardsProps> = ({
//     image,
//     itemName,
//     lender,
//     place,
//     oldPrice,
//     currentPrice,
//     duration,
//     rating,
//     slug,
//     id
// }) => {
//     const queryParams = new URLSearchParams({
//         image,
//         itemName,
//         lender,
//         place,
//         oldPrice: oldPrice.toString(),
//         currentPrice: currentPrice.toString(),
//         duration,
//         rating: rating.toString(),
//     }).toString();

//     return (
//         <Link
//             href={`/items/${id}?${queryParams}`}
//             target="_blank"
//             className="min-w-[285px] h-[360px] rounded-[20px] bg-[#8D8BD3]/20 flex flex-col gap-[7px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500" // Hover zoom effect with transition and gradient
//             style={{ cursor: "pointer" }}
//         >
//             <div className="mt-[20px] mx-[20px]">
//                 <Image
//                     src={image}
//                     alt={itemName}
//                     width={285}
//                     height={200}
//                     className="rounded-[15px]"
//                 />
//             </div>
//             <div className="text-white mx-[20px]">
//                 <div className="font-outfit font-semibold text-[22px]">{itemName}</div>
//                 <div className="flex flex-row gap-[20px] text-center">
//                     <div className="font-outfit font-semibold text-[18px] text-[#FFFFFF]/80">{lender}</div>
//                     <div className="flex flex-row gap-[1px] items-center">
//                         <div>
//                             <MapPin className="size-[20px]" />
//                         </div>
//                         <div className="font-outfit font-medium text-[16px] text-[#FFFFFF]/80">{place}</div>
//                     </div>
//                 </div>
//                 <div className="flex flex-row justify-between items-center">
//                     <div>
//                         <span className="font-outfit font-medium text-red-300 text-[14px] line-through">₹{oldPrice}</span> - <span className="font-outfit font-semibold text-green-500 text-[20px]">₹{currentPrice}</span> <span className="font-outfit font-medium text-[14px]">/ {duration}</span>
//                     </div>
//                     <div className="font-outfit font-semibold text-[15px] rounded-[5px] bg-[#C8C7F4]/20 text-center px-1 w-fit h-fit flex flex-row items-center gap-1">
//                         {rating}
//                         <Star className="size-[15px]" />
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };

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
  },
];

const TopRentedGrid = () => {
    var i=1
  return (
    <div className="grid grid-cols-3 gap-5">
      {
      AllTopRentedItems.map((item) => (
        <div className="p-10">
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
            id={i++}
          />
        </div>
      ))}
    </div>
  );
};

export default TopRentedGrid;
