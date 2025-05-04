import React from 'react';
import { assets } from '../assets/assets';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-between bg-[#FFDBDB] h-[60vh] px-6 md:px-16 lg:px-24 xl:px-32 py-8 mb-50 mt-6">
      {/* Left Side (Text) */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#644A07]">
          Start organizing your ideas!
        </h1>
        <p className="text-lg text-[#594100]">
          Keep track of your thoughts and tasks effortlessly.
        </p>
          <button 
           className="mt-6 bg-[#644A07] text-white border border-[#644A07] hover:bg-[#FFC6C6] cursor-pointer active:scale-95 transition-all w-44 h-12 rounded-full">
            Let's Go
          </button>
      </div>

      {/* Right Side (Image) */}
      <div className="hidden md:block w-1/2">
        <img
          className="w-2/4 h-auto rounded-lg shadow-lg mx-auto"
          src={assets.hero2}  // Assuming your image is stored in `assets.hero`
          alt="App Illustration"
        />
      </div>
    </section>
  );
};

export default HeroSection;


