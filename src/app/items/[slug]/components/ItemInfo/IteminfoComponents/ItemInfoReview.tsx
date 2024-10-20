import { Star } from "lucide-react";

interface Review {
  user: string;
  comment: string;
  rating: number;
}

interface ReviewSectionProps {
  reviews: Review[];
}

const ItemInfoReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => (
  <div className="w-full mt-8 p-6 ">
    <h1 className="text-3xl font-bold text-white mb-4 ">Review</h1>
    {reviews.map((review, idx) => (
      <div key={idx} className="mb-4 ">
        <div className="text-white/80 font-bold">{review.user}</div>
        <div className="text-white/80">{review.comment}</div>
        <div className="flex items-center">
          <span className="text-lg font-medium text-white mr-2">
            {review.rating}
          </span>
          <Star className="text-yellow-500" />
        </div>
      </div>
    ))}
  </div>
);

export default ItemInfoReviewSection;
