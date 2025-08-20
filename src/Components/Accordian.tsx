"use client";
import React, {useState} from "react";
import {ChevronDown} from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/Components/AnimatedSection";

type AccordianItemProp = {
    accordian_title?: string;
    accordian_description?: string;
};

type AccordianProps = {
    image: string;
    description?: string;
    accordionItems: AccordianItemProp[];
    classname?: string;
};

const Accordian: React.FC<AccordianProps> = ({
                                                 image,
                                                 description,
                                                 accordionItems,
                                                 classname = "",
                                             }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleToggle = (index: number) => {
        setActiveIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <section>
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                {/* Left Column - Image */}
                <div className="flex flex-col h-full">
                    <AnimatedSection direction="left" delay={0.2}>
                        <div className="relative flex-1 flex justify-center  h-full">
                            <Image
                                src={image}
                                alt="Focus"
                                width={800}
                                height={600}
                                className={`${classname} object-cover rounded-lg w-full h-auto shadow`}
                            />
                        </div>
                    </AnimatedSection>
                </div>

                {/* Right Column - Content */}
                <div className="flex flex-col h-full">
                    <AnimatedSection direction="right" delay={0.2}>
                        {/* Description */}
                        <div
                            className="font-poppins font-medium text-[14px] md:text-[16px] lg:text-[18px] text-[#676767] leading-relaxed mb-4">
                            {description}
                        </div>

                        {/* Accordion */}
                        <div className="mt-2 flex flex-col gap-4">
                            {accordionItems.map((item, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <div
                                        key={index}
                                        className="rounded-[10px] overflow-hidden shadow-sm"
                                    >
                                        <button
                                            className={`w-full flex justify-between items-center px-4 py-4 transition-colors duration-500 ${
                                                isActive
                                                    ? "bg-[#162F65] text-white"
                                                    : "bg-white text-black hover:bg-gray-100"
                                            }`}
                                            onClick={() => handleToggle(index)}
                                        >
                      <span
                          className={`text-left font-poppins font-semibold text-[15px] sm:text-[18px] text-[#162F65] ${
                              isActive ? "text-white" : ""
                          }`}
                      >
                        {item.accordian_title}
                      </span>
                                            <ChevronDown
                                                className={`transform transition-transform duration-500 ${
                                                    isActive ? "rotate-180" : ""
                                                } ${isActive ? "text-white" : "text-black"}`}
                                                size={20}
                                            />
                                        </button>
                                        {isActive && (
                                            <div
                                                className="px-4 py-3 font-poppins font-medium text-[14px] text-[#676767] sm:text-[16px]">
                                                {item.accordian_description}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Accordion Section */}
        </section>
    );
};

export default Accordian;
