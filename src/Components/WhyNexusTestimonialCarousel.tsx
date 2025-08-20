"use client";

import React from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface TestimonialItem {
    testimonial_comment?: string;
    person_name?: string;
    person_designation?: string;
    person_image?: string;
}

interface WhyNexusTestimonialCarouselProps {
    testimonials?: TestimonialItem[];
}

const WhyNexusTestimonialCarousel: React.FC<WhyNexusTestimonialCarouselProps> = ({testimonials}) => {
    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <div className="w-full md:w-1/2 lg:mt-8 mt-0">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
                }}
                spaceBetween={20}
                slidesPerView={1}
                className="relative"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white p-8 rounded-lg shadow">
                            <p className="text-[#676767] font-normal text-sm xs:text-base sm:text-lg leading-relaxed mb-4">
                                {item.testimonial_comment}
                            </p>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={item.person_image || "/default-avatar.png"} // Use item.person_image directly
                                    alt={item.person_name || "Testimonial Author"}
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="text-[#676767] font-normal text-sm xs:text-base sm:text-lg">
                                        {item.person_name}
                                    </p>
                                    <p className="text-[#676767] font-normal text-sm xs:text-base sm:text-lg">
                                        {item.person_designation}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    className="prev-btn w-8 h-8 rounded-full bg-[#162F65] text-white flex items-center justify-center">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.9806 6L15.3906 7.41L10.8106 12L15.3906 16.59L13.9806 18L7.98062 12L13.9806 6Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="next-btn w-8 h-8 rounded-full bg-[#162F65] text-white flex items-center justify-center">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.0194 6L8.60938 7.41L13.1894 12L8.60938 16.59L10.0194 18L16.0194 12L10.0194 6Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default WhyNexusTestimonialCarousel;
