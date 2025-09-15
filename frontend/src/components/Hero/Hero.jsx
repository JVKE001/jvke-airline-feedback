import { useState, useEffect } from "react";

import img1 from "../../assets/images/carousel_img_1.jpg";
import img2 from "../../assets/images/carousel_img_2.jpg";
import img3 from "../../assets/images/carousel_img_3.jpg";

const slides = [
  {
    src: img1,
    title: "Your Voice Matters",
    subtitle: "Share your flight experience with the world.",
  },
  {
    src: img2,
    title: "Rate Airlines",
    subtitle: "Help other passengers choose the best airline.",
  },
  {
    src: img3,
    title: "Improve Air Travel",
    subtitle: "Your feedback drivers change in the industry.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-auto md:h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative w-full flex-shrink-0 h-auto md:h-screen"
          >
            <img
              src={slide.src}
              alt={`slide-${i}`}
              className="w-full h-auto md:h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/50">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
