import Link from "next/link";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import { Card } from "./Top-Rented-Items-Components/TopRentedItemsCards";
import { AllTopRentedItems } from "@/app/product";

const TopRentedGrid = () => {
    var i=1
  return (
    <div className="grid grid-cols-3 ">
      {
      AllTopRentedItems.map((item) => (
        <div key={item.itemName} className=" p-5">
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
            id={i++}
          />
        </div>
      ))}
    </div>
  );
};

export default TopRentedGrid;
