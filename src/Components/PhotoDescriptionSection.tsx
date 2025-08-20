"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FreightQuoteWidget from "./FreightQuoteWidget";
import AnimatedSection from "@/Components/AnimatedSection";

type Props = {
  title: string;
  paragraph1: string;
  subtitle1: string;
  subtitle2?: string;
  paragraph2: string;
  paragraph3: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
  useWidget?: boolean;
};

export default function PhotoDescriptionSection({
  title,
  paragraph1,
  subtitle1,
  subtitle2,
  paragraph2,
  paragraph3,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt = "Image",
  reverse = false,
  useWidget = false,
}: Props) {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const handleOpenWidget = () => setIsWidgetOpen(true);
  const handleCloseWidget = () => setIsWidgetOpen(false);

  return (
    <>
      {/* 📱 Mobile layout */}
      <AnimatedSection direction="up" delay={0.2}>
      <div className="bg-transparent md:px-4 py-6 md:py-10 flex flex-col gap-4 lg:hidden">
        
        <h2 className="font-poppins font-semibold text-[24px] text-[#162F65] mb-2">
          {title}
        </h2>

        <div className="w-full flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={620}
            height={460}
            className="rounded-[10px] w-full h-auto object-cover"
          />
        </div>

        {subtitle1 && (
          <p className="font-poppins font-medium text-[22px] text-[#162F65] mb-1 leading-[26px]">
            {subtitle1}
          </p>
        )}

        <p className="font-poppins text-[14px] text-[#676767] mb-2 leading-relaxed text-justify">
          {paragraph1}
        </p>

        {paragraph3 && (
          <p className="font-poppins text-[14px] text-[#676767] mb-4 leading-relaxed text-justify">
            {paragraph3}
          </p>
        )}

        {subtitle2 && (
          <p className="font-poppins font-medium text-[22px] text-[#162F65] mb-1 leading-[26px]">
            {subtitle2}
          </p>
        )}

        <p className="font-poppins text-[14px] text-[#676767] mb-2 leading-relaxed text-justify">
          {paragraph2}
        </p>

        {useWidget ? (
          <div className="inline-block">
            <button
              onClick={handleOpenWidget}
              className="bg-[#162F65] text-white rounded-[10px] px-6 py-2 font-poppins text-[14px] hover:bg-blue-950 hover:scale-105 transition-all duration-300"
            >
              {buttonText}
            </button>
          </div>
        ) : (
          <Link href={buttonLink}>
            <button className="bg-[#162F65] text-white rounded-[10px] px-6 py-2 font-poppins text-[14px] hover:bg-blue-950 hover:scale-105 transition-all duration-300">
              {buttonText}
            </button>
          </Link>
        )}
        
      </div>
      </AnimatedSection>

      {/* 💻 Desktop & Tablet layout */}
      <div
        className={`bg-transparent px-0 py-6 md:py-10 gap-10 hidden lg:flex ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        
        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <AnimatedSection direction="left" delay={0.2}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={620}
            height={460}
            className="rounded-[10px] sm:w-full md:w-full lg:max-w-[620px] h-auto lg:max-h-[660px] min-h-auto lg:min-h-[460px] object-cover"
          />
          </AnimatedSection>
        </div>
        

        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatedSection direction="right" delay={0.2}>
          <h2 className="font-poppins font-semibold text-[35px] text-[#162F65] mb-4">
            {title}
          </h2>

          {subtitle1 && (
            <p className="font-poppins font-medium text-[25px] text-[#162F65] mb-2 leading-[26px]">
              {subtitle1}
            </p>
          )}

          <p className="font-poppins font-medium text-[18px] text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
            {paragraph1}
          </p>

          {paragraph3 && (
            <p className="font-poppins font-medium text-[18px] text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
              {paragraph3}
            </p>
          )}

          {subtitle2 && (
            <p className="font-poppins font-medium text-[25px] text-[#162F65] mb-2 leading-[28px]">
              {subtitle2}
            </p>
          )}

          <p className="font-poppins font-medium text-[18px] text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
            {paragraph2}
          </p>

          {useWidget ? (
            <div className="inline-block">
              <button
                onClick={handleOpenWidget}
                className="bg-[#162F65] text-white rounded-[10px] px-[25.86px] py-[7.89px] font-poppins text-[14px] hover:bg-blue-950 hover:scale-105 transition-all duration-300"
              >
                {buttonText}
              </button>
            </div>
          ) : (
            <Link href={buttonLink}>
              <button className="bg-[#162F65] text-white rounded-[10px] px-[25.86px] py-[7.89px] font-poppins text-[14px] hover:bg-blue-950 hover:scale-105 transition-all duration-300">
                {buttonText}
              </button>
            </Link>
          )}
          </AnimatedSection>
        </div>
        
      </div>

      {useWidget && (
        <FreightQuoteWidget isOpen={isWidgetOpen} onClose={handleCloseWidget} />
      )}
    </>
  );
}
