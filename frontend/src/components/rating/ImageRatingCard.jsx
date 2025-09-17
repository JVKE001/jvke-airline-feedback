import { useState } from "react";
import { Star } from "lucide-react"; // or Heroicons

const ImageRatingCard = ({ src, alt }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="relative w-64 h-64 group overflow-hidden rounded-xl shadow-md">
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform group-hover:scale-105 transition"
      />

      {/* Overlay with stars */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="focus:outline-none"
            >
              <Star
                className={`w-8 h-8 ${
                  star <= (hover || rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageRatingCard;
