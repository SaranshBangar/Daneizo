import { Card } from "@/components/TopRentedItems/Top-Rented-Items-Components/TopRentedItemsCards";
import TopRentedItems from "@/components/TopRentedItems/TopRentedItems";
import TopRentedGrid from "@/components/TopRentedItems/ToprentedPageGrid";
import FiltersColumn from "@/components/ui/filters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Rented Items | Daneizo",
};

const Page = () => {
  return (
    <div className="flex bg-[#040312] flex-col items-center justify-center">
      <div className="w-[75%] mb-20">
        <TopRentedItems />
        <div className="flex">
          <FiltersColumn/>
          <TopRentedGrid />
        </div>
      </div>
    </div>
  );
};

export default Page;
