import React from "react";

const HoverCard = ({ src, alt = "My image", text = "Hello World!" }) => {
  return (
    <div className="relative mx-auto my-2 md:my-0 w-80 md:w-95 h-80 md:h-95 rounded-xl md:rounded-none overflow-hidden shadow-md group ">
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-semibold drop-shadow-lg">
          {text}
        </p>
      </div>
    </div>
  );
};

export default HoverCard;
