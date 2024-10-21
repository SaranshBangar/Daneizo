import { Heart, Ticket, ShoppingCart, EllipsisVertical } from "lucide-react";
import HeroButton from "@/components/Hero/Hero Components/HeroButton";
import { headers } from "next/headers";

interface PriceCardProps {
  oldPrice: number;
  currentPrice: number;
  duration: string;
  rating: number;
}

const ItmeInfoPriceCard: React.FC<PriceCardProps> = ({
  oldPrice,
  currentPrice,
  duration,
  rating,
}) => (
  <div>
    <div className="bg-gradient-to-br from-[#8D8BD3]/20 to-[#433FD7]/20 rounded-[20px] flex flex-col gap-5 p-5 mb-4">
      <div className="flex items-center  justify-between">
        <HeroButton
          text="1 Week"
          textColour="#FFFFFF"
          backgroundColour="#040312"
          borderColour="#FFFFFF"
        />
        <HeroButton
          text="2 Week"
          textColour="#FFFFFF"
          backgroundColour="#040312"
          borderColour="#FFFFFF"
        />
        <HeroButton
          text="3 Week"
          textColour="#FFFFFF"
          backgroundColour="#040312"
          borderColour="#FFFFFF"
        />
        <EllipsisVertical className="text-white/80" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-lg font-semibold text-white/80 line-through mr-2">
            ₹{oldPrice}
          </span>
          <span className="text-2xl font-bold text-white/80">
            ₹{currentPrice}
          </span>
          <span className="text-lg text-white/80"> / {duration}</span>
        </div>
      </div>
    </div>
    <div className="flex items-center max-md:flex-wrap max-md:justify-center max-md:gap-3 justify-between p-5">
      <HeroButton
        text="Rent"
        textColour="#FFFFFF"
        backgroundColour="#040312"
        borderColour="#FFFFFF"
        icon={<Ticket />}
      />
      <HeroButton
        text="Add to Cart"
        textColour="#FFFFFF"
        backgroundColour="#040312"
        borderColour="#FFFFFF"
        icon={<ShoppingCart />}
      />
      <HeroButton
        text="Like"
        textColour="#FFFFFF"
        backgroundColour="#040312"
        borderColour="#FFFFFF"
        icon={<Heart />}
      />
    </div>
  </div>
);

export default ItmeInfoPriceCard;
