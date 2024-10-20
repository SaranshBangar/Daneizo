import { MapPin } from "lucide-react";
import { Star, EllipsisVertical } from "lucide-react";
interface ItemDetailsProps {
  itemName: string;
  lender: string;
  place: string;
  description: string;
  termsAndConditions: string;
  rating: number;
}

const ItemInfoDetails: React.FC<ItemDetailsProps> = ({
  itemName,
  lender,
  place,
  description,
  termsAndConditions,
  rating,
}) => (
  <div className="w-full md:w-1/2">
    <div className="flex w-full  items-start justify-between">
      <h1 className="text-3xl font-bold text-white mb-4">{itemName}</h1>
      <div className="flex items-center">
        <span className="text-lg font-medium text-white/80 mr-2">
          {rating}{" "}
        </span>
        <Star className="text-yellow-500" />
      </div>
    </div>

    <div className="flex">
      <div className="text-lg text-white/80 mb-4 flex items-center gap-4">
        <span>{lender}</span>
        <span className="text-white/80">•</span>
        <span className="flex items-center gap-1">
          <MapPin className="text-white/80" /> {place}
        </span>
      </div>
    </div>
  </div>
);

export default ItemInfoDetails;
