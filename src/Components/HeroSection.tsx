import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  desktopImage: string;
  mobileImage: string;
  altText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  desktopImage,
  mobileImage,
  altText = "Hero section",
}) => {
  return (
    <section className="relative w-full -top-2 sm:-top-4 md:-top-28 lg:-top-30 xl:-top-20 2xl:-top-41 max-w-screen-4xl mx-auto z-0">
      {/* Desktop/Tablet Hero Image */}
      <div className="hidden md:block relative w-full h-[400px] lg:h-[400px] xl:h-[350px] 2xl:h-[625px] [@media(min-width:2100px)]:h-[750px]">
        <Image
          src={desktopImage}
          alt={altText}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Title overlay for desktop/tablet */}
        <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 mx-auto [@media(min-width:1900px)]:max-w-[1216px] [@media(min-width:1200px)]:max-w-[1200px]">


            <div className="text-left max-w-[600px] sm:max-w-[250px] md:max-w-[450px] lg:max-w-[600px]">
              <h1 className="sm:text-[26px] md:text-[36px] lg:text-[46px] font-normal text-[#0F2043] uppercase">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero Image */}
      <div className="block md:hidden relative w-full h-[150px] sm:h-[180px]">
        <Image
          src={mobileImage}
          alt={altText}
          fill
          className="object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw"
        />
        {/* Title overlay for mobile — MATCHING desktop style */}
        <div className="absolute inset-0 flex items-center justify-start left-4 sm:left-6">
          <div className="text-left px-4 max-w-[550px]">
            <h1 className="text-[22px] sm:text-[30px] font-normal text-[#0F2043] uppercase">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
