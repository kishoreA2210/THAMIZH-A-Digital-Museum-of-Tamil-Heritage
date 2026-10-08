import React, { useState } from "react";
import Home from "./home.json";

const DanceGallery = () => {
  const [imageSrc, setImageSrc] = useState(Home[0].book1);
  const [title, setTitle] = useState("Thirukkural");
  const [desc, setDesc] = useState("A classic Tamil text of 1330 couplets...");

  const sections = [
    {
      name: "Thirukkural",
      img: Home[0].book1,
      text: "A classic Tamil text of 1330 couplets, offering wisdom on virtue, wealth, and love."
    },
    {
      name: "Tholkappiyam",
      img: Home[0].book2,
      text: "The earliest extant Tamil grammar text, covering language, literature, and culture."
    },
    {
      name: "Silapathikaram",
      img: Home[0].book3,
      text: "An epic tale of Kannagi, weaving themes of love, betrayal, and justice."
    },
    {
      name: "Manimegalai",
      img: Home[0].book4,
      text: "A Buddhist epic highlighting compassion, renunciation, and spiritual pursuit."
    }
  ];

  const handleChange = (section) => {
    setImageSrc(section.img);
    setTitle(section.name);
    setDesc(section.text);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 mt-5 py-16 bg-[#f5edda] rounded-2xl shadow-xl">
      
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-2xl shadow-2xl w-[270px] h-[270px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[450px] transition duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-[#9A6B3A] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-4">
          Heritage • Literature
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#182522] leading-tight mb-5">
          {title}
        </h2>

        <p className="text-[#4d554f] text-base sm:text-lg leading-7 sm:leading-8 mb-6 max-w-xl mx-auto lg:mx-0">
          {desc}
        </p>

        {/* Buttons for Sections */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
          {sections.map((section, index) => (
            <button
              key={index}
              className="px-5 py-2 rounded-full border border-[#9A6B3A] text-[#9A6B3A] font-semibold text-sm hover:bg-[#9A6B3A] hover:text-white transition duration-300"
              onClick={() => handleChange(section)}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>
    </div>
    
   
  );
};

export default DanceGallery;
