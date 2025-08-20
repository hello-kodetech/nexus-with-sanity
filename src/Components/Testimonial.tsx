"use client";

import Image from "next/image";
import React, {useEffect, useRef} from "react";
import {motion, useAnimation} from "framer-motion";
import {PropsWithChildren} from "react";

interface TestimonialProps {
    testimonial_comment: string;
    person_name: string;
    person_designation: string;
    person_image: string;
}

interface TestimonialComponentProps {
    testimonials: TestimonialProps[];
}

interface TranslateWrapperProps extends PropsWithChildren {
    duration?: number;
}

const TestimonialCard = ({testimonial}: { testimonial: TestimonialProps }) => (
    <motion.div
        className="bg-[#EAEAEA] justify-center px-6 py-1 rounded-[20px] shadow-sm flex flex-col items-center text-center w-[280px] sm:w-[450px] h-[200px] shrink-0 mx-2 sm:mx-4"
        whileHover={{scale: 1.02, transition: {duration: 0.2}}}
    >
        <p className="text-[#676767] text-left max-w-5xl text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
            {testimonial.testimonial_comment}
        </p>
        <div className="justify-between w-full items-center gap-8 flex flex-row">
            <div className="text-left">
                <p className="text-[#302C2C] font-semibold text-sm sm:text-base">{testimonial.person_name}</p>
                <p className="text-[#676767] font-medium text-xs">{testimonial.person_designation}</p>
            </div>
            <Image
                src={testimonial.person_image}
                alt={`Avatar of ${testimonial.person_name}`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mb-2 sm:mb-3"
            />
        </div>
    </motion.div>
);

const TranslateWrapper = ({children, duration}: TranslateWrapperProps) => {
    const controls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollWidth = container.scrollWidth / 2;

        const animate = async () => {
            await controls.start({
                x: -scrollWidth,
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: duration,
                        ease: "linear",
                    },
                },
            });
        };

        animate();

        return () => controls.stop();
    }, [controls, duration]);

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                ref={containerRef}
                animate={controls}
                className="flex gap-4"
                style={{width: "fit-content"}}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};

const Testimonial = ({testimonials}: TestimonialComponentProps) => {
    // const testimonials: TestimonialProps[] = [
    //     {
    //         quote: "Working with Nexus Logix has really eased the stress off of our supply chain. Their team handles everything and keeps us in the loop, which makes a huge difference.",
    //         name: "Rachel Silva",
    //         title: "Supply Chain Manager",
    //         avatar: "/avatar-woman.png",
    //     },
    //     {
    //         quote: "Nexus Logix listened to our needs and helped simplify a complicated shipping process. It feels good to know we have a partner that truly understands our business.",
    //         name: "Daniel Brooks",
    //         title: "Logistics Director",
    //         avatar: "/avatar-men.png",
    //     },
    //     {
    //         quote: "I appreciate how reliable Nexus Logix is. With them on board, our timelines are met without surprises, and that personal touch means a lot.",
    //         name: "Priya Nair",
    //         title: "Operations Manager",
    //         avatar: "/avatar-woman.png",
    //     },
    //     {
    //         quote: "We’ve worked with larger freight companies before, but Nexus Logix delivers the kind of personal service that’s hard to find. They keep things simple, clear, and on time.",
    //         name: "Michael Chen",
    //         title: "Procurement Head",
    //         avatar: "/avatar-men.png",
    //     },
    //     // {
    //     //     quote: "As an import-focused business, we’ve dealt with our fair share of customs conundrums. But since choosing to partner with Nexus Logix, it’s never been an issue, because they’re ready with a plan, long before the goods arrive for clearance.",
    //     //     name: "Akhil Fernando",
    //     //     title: "Import & Compliance Manager",
    //     //     avatar: "/avatar-placeholder.png",
    //     // },
    //     // {
    //     //     quote: "We’re a small- to mid-size business, heavily affected by seasonality, and we’ve reaped nothing but benefit and peace of mind, thanks to the easily scalable logistics provided by Nexus Logix. The cost-benefit and the efficiency-benefit have strengthened our bottom line and our operational framework.",
    //     //     name: "Emily Dawson",
    //     //     title: "Finance & Operations Lead",
    //     //     avatar: "/avatar-placeholder.png",
    //     // },
    // ];

    return (
        <section className="py-1 sm:py-2 bg-[#F6F6F6]">
            <div className="w-full mx-auto">
                <TranslateWrapper duration={35}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial}/>
                    ))}
                </TranslateWrapper>
            </div>
        </section>
    );
};

export default Testimonial;