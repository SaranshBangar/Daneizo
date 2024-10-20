"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ImageSection from "./IteminfoComponents/ImageSection";
import ItemInfoDetails from "./IteminfoComponents/ItemInfoDetails";
import ItemInfoPriceCard from "./IteminfoComponents/ItemInfoPriceCard";
import ItemInfoReview from "./IteminfoComponents/ItemInfoReview";
import ItemInfoDescription from "./IteminfoComponents/ItemInfoDescription";

const ItemInfo = () => {
  const searchParams = useSearchParams();
  const [itemDetails, setItemDetails] = useState({
    image: "",
    itemName: "",
    lender: "",
    place: "",
    oldPrice: 0,
    currentPrice: 0,
    duration: "",
    rating: 0,
    description: "",
    reviews: "",
    termsAndConditions: "",
  });

  const reviews = JSON.parse(itemDetails.reviews || "[]");

  useEffect(() => {
    setItemDetails({
      image: searchParams.get("image") || "",
      itemName: searchParams.get("itemName") || "",
      lender: searchParams.get("lender") || "",
      place: searchParams.get("place") || "",
      oldPrice: parseInt(searchParams.get("oldPrice") || "0"),
      currentPrice: parseInt(searchParams.get("currentPrice") || "0"),
      duration: searchParams.get("duration") || "",
      rating: parseFloat(searchParams.get("rating") || "0"),
      description: searchParams.get("description") || "",
      termsAndConditions: searchParams.get("termsAndConditions") || "",
      reviews: searchParams.get("reviews") || "",
    });
  }, [searchParams]);

  return (
    <div className="container mx-auto p-6 max-md:p-0 font-outfit">
      <div className="flex flex-col md:flex-row gap-10 max-md:p-3 p-6 rounded-lg shadow-lg">
        <ImageSection
          image={itemDetails.image}
          itemName={itemDetails.itemName}
        />
        <div className="w-full md:w-1/2 overflow-y-auto max-h-[70vh]">
          <ItemInfoDetails {...itemDetails} />
          <ItemInfoPriceCard {...itemDetails} />
          <ItemInfoDescription {...itemDetails} />
          <ItemInfoReview reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
