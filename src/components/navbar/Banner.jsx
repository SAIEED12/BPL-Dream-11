import React from "react";
import bannerImg from "../../assets/banner-main.png";
import bgShadow from "../../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 mt-8">
      <div 
        className="relative bg-black rounded-3xl overflow-hidden bg-cover bg-center min-h-[400px] flex items-center justify-center py-12 px-6"
        style={{ backgroundImage: `url(${bgShadow})` }}
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4">
          
          <img 
            src={bannerImg} 
            alt="Banner Logo" 
            className="w-48 md:w-64 lg:w-auto mb-4"
          />

          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-tight">
            Assemble Your Ultimate Dream 11 <br className="hidden md:block" /> Cricket Team
          </h1>

          <p className="text-white/70 text-base md:text-xl lg:text-2xl font-medium">
            Beyond Boundaries Beyond Limits
          </p>

          <div className="pt-4">
            <button className="bg-[#3ee095] hover:bg-[#3ee094de] text-black font-bold py-3 px-8 rounded-2xl border-8  transition-all active:scale-95 cursor-pointer ring-1 ring-[#3ee095]">
              Claim Free Credit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;