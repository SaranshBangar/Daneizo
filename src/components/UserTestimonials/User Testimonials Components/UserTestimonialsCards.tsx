"use client"

type TopRentedItemsCardsProps = {
    image : string;
    itemName : string;
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
        itemName : "Toyota Car",
        lender : "Saransh",
        place : "Gurgaon",
        oldPrice : 5000,
        currentPrice : 3500,
        duration : "week",
        rating : 4.8
    },
    {
        image : "https://picsum.photos/242/237",
        itemName : "Hairdryer",
        lender : "Rakiul",
        place : "Malda",
        oldPrice : 1000,
        currentPrice : 800,
        duration : "week",
        rating : 4.9
    },
    {
        image : "https://picsum.photos/243/236",
        itemName : "Laptop",
        lender : "Dev",
        place : "Canada",
        oldPrice : 10000,
        currentPrice : 9500,
        duration : "day",
        rating : 4.7
    },
    {
        image : "https://picsum.photos/243/237",
        itemName : "Toyota Car",
        lender : "Saransh",
        place : "Gurgaon",
        oldPrice : 5000,
        currentPrice : 3500,
        duration : "week",
        rating : 4.8
    },
    {
        image : "https://picsum.photos/242/237",
        itemName : "Hairdryer",
        lender : "Rakiul",
        place : "Malda",
        oldPrice : 1000,
        currentPrice : 800,
        duration : "week",
        rating : 4.9
    },
]

const Card : React.FC<TopRentedItemsCardsProps> = ({
    image,
    itemName,
    lender,
    place,
    oldPrice,
    currentPrice,
    duration,
    rating,
}) => (
    <div className="min-w-[285px] h-[360px] rounded-[20px] bg-[#8D8BD3]/20 flex flex-col gap-[7px]">
        <div className="mt-[20px] mx-[20px]">
            <img
                src={image} 
                className="rounded-[15px]"
            />
        </div>
        <div className="text-white mx-[20px]">
            <div className="font-outfit font-semibold text-[22px]">{itemName}</div>
            <div className="flex flex-row gap-[16px] text-center">
                <div className="font-outfit font-semibold text-[18px] text-[#FFFFFF]/80">{lender}</div>
                <div className="flex flex-row gap-[2px]">
                    {/* Replace the bottom div with the location image */}
                    <div className="bg-pink-200 opacity-30 w-[9px] h-[9px]"></div>
                    <div className="font-outfit font-medium text-[16px] text-[#FFFFFF]/80">{place}</div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <span className="font-outfit font-medium text-red-300 text-[14px] line-through">₹{oldPrice}</span> - <span className="font-outfit font-semibold text-green-500 text-[20px]">₹{currentPrice}</span> <span className="font-outfit font-medium text-[14px]">/ {duration}</span>
                </div>
                <div className="font-outfit font-semibold text-[15px] rounded-[5px] bg-[#C8C7F4]/20 text-center px-1 w-fit h-fit">{rating}*</div>
            </div>
        </div>
    </div>
)

const UserTestimonialsCards = () => {
  return (
    <div className="relative">
        {/* Gradient effect on cards left and right */}
        {/* <div className="z-100 bg-gradient-to-r from-[#040312] to-transparent absolute top-0 bottom-0 left-0 w-[75px] pointer-events-none"></div>
        <div className="z-100 bg-gradient-to-l from-[#040312] to-transparent absolute top-0 bottom-0 right-0 w-[75px] pointer-events-none"></div> */}
        <div
            className="flex flex-row gap-[14px] justify-evenly items-center overflow-auto no-scrollbar"
        >
            {AllTopRentedItems.map((item, index) => (
                <div
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
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default UserTestimonialsCards