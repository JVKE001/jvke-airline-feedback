import { useState } from "react";
import { Star } from "lucide-react";

const StarRating = ({rating, setRating}) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="focus:outline-none"
        >
          <Star
            className={`w-8 h-8 ${
              star <= (hover || rating)
                ? "fill-yellow-400 text-yellow-400"
                : "fill=gray-200 text-gray-400"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
