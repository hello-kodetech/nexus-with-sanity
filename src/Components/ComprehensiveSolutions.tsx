"use client"
import AnimatedSection from "@/Components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import React, {useState} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ServiceProps {
    src: string;
    alt: string;
    label: string;
    description: string;
    link: string;
}

interface ComprehensiveSolutionsProps {
    services: ServiceProps[];
    serviceTitle: string;
    serviceDescription: string;
}

const ComprehensiveSolutions = ({
                                    services,
                                    serviceTitle,
                                    serviceDescription,
                                }: ComprehensiveSolutionsProps) => {

    const [activeService, setActiveService] = useState(services[0]);

    const titleParts = serviceTitle ? serviceTitle.split(" ", 2) : ["Comprehensive", "Solutions"];
    const firstPart = titleParts[0] || "Comprehensive";
    const secondPart = titleParts[1] || "Solutions";

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        beforeChange: (current: number, next: number) =>
            setActiveService(services[next]),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "200px",
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "120px",
                    dots: false,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "35px",
                    dots: false,
                },
            },
        ],
    };

    return (
        <div>
            <div className="bg-[#F6F6F6] relative z-10 py-4 sm:py-8 lg:py-16 poppins">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection direction="up" delay={0.2}>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">
                            <h2 className="text-2xl sm:text-3xl lg:text-[50px] font-semibold text-[#162F65] text-center lg:text-left mb-1 sm:mb-0 lg:leading-[72px] mx-auto sm:mx-0">
                                {firstPart || "Comprehensive"}
                                <br className="hidden sm:block" /> {secondPart || "Solutions"}
                            </h2>
                            <p className="text-[#676767] font-medium text-sm sm:text-base lg:text-lg leading-[25px] max-w-lg sm:max-w-xl text-center sm:text-left">
                                {serviceDescription || "Whether it&#39;s retail, manufacturing, mining, automotive, or\n" +
                                    "                                any other industry, our specialists understand each one&#39;s\n" +
                                    "                                unique challenges, constraints, and regulations. In particular,\n" +
                                    "                                we understand the value of proactive, swift communication, and\n" +
                                    "                                we strive to keep our customers in the loop at all times -\n" +
                                    "                                you&#39;ll notice this difference immediately and we&#x27;ll\n" +
                                    "                                earn your trust within the first month. Our dedicated teams work\n" +
                                    "                                with you, as an extension of your office, to deliver compliant,\n" +
                                    "                                tailored solutions that scale with your business."}
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="hidden lg:block">
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="flex flex-row gap-4 sm:gap-6 lg:gap-10">
                                <div
                                    id="main-card"
                                    className="bg-[#002453] relative w-full lg:w-2/3 rounded-lg text-center transition-colors duration-300"
                                >
                                    <div className="absolute bg-[url('/x.png')] opacity-5 bg-no-repeat -top-30 -mr-20 bg-contain inset-0 w-[600px] h-[800px]" />
                                    <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-between h-full">
                                        <div>
                                            <p className="text-left font-medium pt-2 lg:pt-10 px-6 text-sm sm:text-base lg:text-xl text-[#FFFFFF] leading-[30px] whitespace-pre-line">
                                                {activeService.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-row gap-2 group justify-start items-center pt-4 sm:pt-6 lg:pt-8 w-full">
                                            <svg
                                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 flex-shrink-0 transition-transform duration-300 ease-in-out"
                                                width="81"
                                                height="82"
                                                viewBox="0 0 81 82"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="40.5"
                                                    cy="41"
                                                    r="37.7635"
                                                    stroke="white"
                                                    strokeWidth="5.47297"
                                                />
                                                <path
                                                    className="origin-center transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-45" // Added scale-110 for a more pronounced effect without layout shift
                                                    d="M50.7383 33.4925C50.7693 32.847 50.5433 32.2156 50.1099 31.7363C49.6764 31.257 49.0708 30.9689 48.4254 30.935L34.6517 30.2429C34.3319 30.2269 34.0121 30.274 33.7105 30.3815C33.4089 30.489 33.1314 30.6549 32.894 30.8697C32.4143 31.3034 32.1266 31.9099 32.0942 32.5558C32.0617 33.2016 32.2872 33.8339 32.7209 34.3136C33.1547 34.7932 33.7612 35.0809 34.4070 35.1133L42.3021 35.51L29.3090 47.26C28.8294 47.6937 28.5418 48.3001 28.5093 48.9459C28.4769 49.5916 28.7023 50.2238 29.1360 50.7034C29.5697 51.183 30.1761 51.4706 30.8219 51.5031C31.4676 51.5355 32.0998 51.3101 32.5794 50.8764L45.5725 39.1264L45.1759 47.0215C45.1598 47.3413 45.2069 47.6612 45.3144 47.9628C45.4220 48.2644 45.5878 48.5418 45.8026 48.7793C46.0174 49.0168 46.2768 49.2097 46.5661 49.3469C46.8554 49.4841 47.1689 49.5630 47.4887 49.5791C47.8085 49.5952 48.1283 49.5481 48.4299 49.4405C48.7315 49.3330 49.0090 49.1671 49.2465 48.9523C49.4840 48.7376 49.6768 48.4781 49.8141 48.1888C49.9513 47.8995 50.0302 47.5860 50.0463 47.2662L50.7383 33.4925Z"
                                                    fill="white"
                                                />
                                            </svg>

                                            <h3 className="text-sm sm:text-base text-left leading-[35px] lg:text-[36px] text-white font-medium">
                                                {activeService.label}
                                            </h3>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                                    {services.map((item, index) => (
                                        <Link key={index} href={item.link}>
                                            <div
                                                className="relative group cursor-pointer"
                                                onMouseEnter={() => setActiveService(item)}
                                                onClick={() => setActiveService(item)}
                                            >
                                                <div className="relative w-full h-40 sm:h-48 lg:h-56 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={item.src}
                                                        alt={item.alt}
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div
                                                        className={`absolute inset-0 transition-all duration-300 ${
                                                            activeService.label === item.label
                                                                ? "bg-[#002B64]/70"
                                                                : "bg-gradient-to-t from-[#002B64]/0 to-[#00255700]/0"
                                                        }`}
                                                    />
                                                    <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white font-normal text-xs sm:text-sm lg:text-lg">
                                                        {item.label}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="lg:hidden w-full">
                        <AnimatedSection direction="up" delay={0.2}>
                            <Slider {...settings}>
                                {services.map((item, index) => (
                                    <Link key={index} href={item.link}>
                                        <div
                                            key={index}
                                            className="px-2 py-4 flex flex-col items-center"
                                        >
                                            <div
                                                className={`relative group cursor-pointer rounded-lg overflow-hidden transition-all duration-300
                                            ${
                                                    activeService.label === item.label
                                                        ? "scale-[1.05] bg-[#002453] shadow-lg"
                                                        : "scale-[0.9]"
                                                }`}
                                                style={{
                                                    height:
                                                        activeService.label === item.label
                                                            ? "280px"
                                                            : "270px",
                                                    width: "100%",
                                                }}
                                            >
                                                {activeService.label !== item.label && (
                                                    <Image
                                                        src={item.src}
                                                        alt={item.alt}
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                )}

                                                <div
                                                    className={`absolute inset-0 transition-all duration-300
                                            ${
                                                        activeService.label === item.label
                                                            ? "bg-[#002B64]/10"
                                                            : "bg-gradient-to-t from-[#002B64]/40 to-[#00255700]/10"
                                                    }`}
                                                />

                                                {activeService.label === item.label ? (
                                                    <>
                                                        <div className="absolute bg-[url('/x.png')] opacity-5 bg-no-repeat bg-contain inset-0 items-center -top-20 w-[400px] h-[800px]" />
                                                        <div className="relative p-2 sm:p-4 flex flex-col items-center justify-between h-full">
                                                            <p className="text-left font-medium pt-2 px-6 text-xs text-[#FFFFFF] leading-[20px] whitespace-pre-line">
                                                                {item.description}
                                                            </p>
                                                            <div className="flex flex-row gap-2 group justify-start items-center pt-4 sm:pt-6 w-full px-6">
                                                                <svg
                                                                    className="w-8 h-8 text-left flex-shrink-0"
                                                                    width="81"
                                                                    height="82"
                                                                    viewBox="0 0 81 82"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <circle
                                                                        cx="40.5"
                                                                        cy="41"
                                                                        r="37.7635"
                                                                        stroke="white"
                                                                        strokeWidth="5.47297"
                                                                    />
                                                                    <path
                                                                        d="M50.7383 33.4925C50.7693 32.847 50.5433 32.2156 50.1099 31.7363C49.6764 31.257 49.0708 30.9689 48.4254 30.935L34.6517 30.2429C34.3319 30.2269 34.0121 30.274 33.7105 30.3815C33.4089 30.489 33.1314 30.6549 32.894 30.8697C32.4143 31.3034 32.1266 31.9099 32.0942 32.5558C32.0617 33.2016 32.2872 33.8339 32.7209 34.3136C33.1547 34.7932 33.7612 35.0809 34.4070 35.1133L42.3021 35.51L29.3090 47.26C28.8294 47.6937 28.5418 48.3001 28.5093 48.9459C28.4769 49.5916 28.7023 50.2238 29.1360 50.7034C29.5697 51.183 30.1761 51.4706 30.8219 51.5031C31.4676 51.5355 32.0998 51.3101 32.5794 50.8764L45.5725 39.1264L45.1759 47.0215C45.1598 47.3413 45.2069 47.6612 45.3144 47.9628C45.4220 48.2644 45.5878 48.5418 45.8026 48.7793C46.0174 49.0168 46.2768 49.2097 46.5661 49.3469C46.8554 49.4841 47.1689 49.5630 47.4887 49.5791C47.8085 49.5952 48.1283 49.5481 48.4299 49.4405C48.7315 49.3330 49.0090 49.1671 49.2465 48.9523C49.4840 48.7376 49.6768 48.4781 49.8141 48.1888C49.9513 47.8995 50.0302 47.5860 50.0463 47.2662L50.7383 33.4925Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                                <h3 className="text-sm sm:text-base text-left leading-[20px] text-white font-medium">
                                                                    {item.label}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white font-medium text-xs sm:text-sm">
                                                        {item.label}
                                                    </p>
                                                )}
                                            </div>
                                            <p className="mt-4 text-center font-medium text-base text-[#002453] whitespace-nowrap">
                                                {item.label}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </Slider>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComprehensiveSolutions;