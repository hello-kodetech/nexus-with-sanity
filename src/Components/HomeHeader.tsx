"use client"
import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import Nav from "@/Components/Nav";
import AnimatedSection from "@/Components/AnimatedSection";
import Link from "next/link";
import Quote from "@/Components/Quote";

interface Value {
    icon: string;
    title: string;
    subtitle: string;
}

// Define interface for HomeHeader props
interface HomeHeaderProps {
    heroTitleFirstPart: string;
    heroTitleSecondPart: string;
    heroTitleThirdPart: string;
    heroTitleMobileFirstPart: string;
    heroTitleMobileSecondPart: string;
    heroDesc: string;
    buttonLabel: string;
    buttonLink: string;
    values: Value[];
    heroImagesForDesktop: { asset: { url: string } }[];
    heroImagesForMobile: { asset: { url: string } }[];
}

const HomeHeader = ({
                        heroTitleFirstPart,
                        heroTitleSecondPart,
                        heroTitleThirdPart,
                        heroTitleMobileFirstPart,
                        heroTitleMobileSecondPart,
                        heroDesc, buttonLabel, buttonLink, values,
                        heroImagesForDesktop,
                        heroImagesForMobile,
                    }: HomeHeaderProps) => {

    // const heroTitleParts = heroTitleSecondPart.split(" ", 4);
    // const heroMobileTitleFirstPart = heroTitleParts.slice(0, 2).join(" ") || "Never Sleep.";
    // const heroMobileTitleSecondPart = heroTitleParts.slice(2).join(" ") || "Neither Do We.";

    const fallbackDesktopImages = [
        "/plane2.png",
        "/slid1.png",
        "/slid2.png",
        "/slid3.png",
        "/slid4.png",
        "/slid5.png",
    ];
    const fallbackMobileImages = [
        "/home/mobile-slide-1.svg",
        "/home/mobile-slide-2.svg",
        "/home/mobile-slide-3.svg",
        "/home/mobile-slide-4.svg",
        "/home/mobile-slide-5.svg",
        "/home/mobile-slide-6.svg",
    ];


    const desktopImages = heroImagesForDesktop?.length > 0
        ? heroImagesForDesktop.map(img => img.asset.url)
        : fallbackDesktopImages;
    const mobileImages = heroImagesForMobile?.length > 0
        ? heroImagesForMobile.map(img => img.asset.url)
        : fallbackMobileImages;


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [currentMobileImageIndex, setCurrentMobileImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [desktopImages.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMobileImageIndex(
                (prevIndex) => (prevIndex + 1) % mobileImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [mobileImages.length]);


    const fadeVariants = {
        initial: {opacity: 0},
        animate: {opacity: 1},
        exit: {opacity: 0},
    };


    // const values = [
    //     {
    //         icon: "/dependability.png",
    //         title: "DEPENDABILITY",
    //         subtitle: "You can count on us.",
    //     },
    //     {
    //         icon: "/accountability.png",
    //         title: "ACCOUNTABILITY",
    //         subtitle: "We accept responsibility.\nNo Excuses.",
    //     },
    //     {
    //         icon: "/transparancy.png",
    //         title: "TRANSPARENCY",
    //         subtitle: "Clear communication.\nNo Surprises.",
    //     },
    //     {
    //         icon: "/commitment.png",
    //         title: "COMMITMENT",
    //         subtitle: "We go the extra mile.",
    //     },
    //     {
    //         icon: "/care.png",
    //         title: "CARE",
    //         subtitle: "Your shipment is our shipment.",
    //     },
    // ];

    return (
        <div>
            <section className="relative mx-auto overflow-hidden max-w-[1800px]">
                <div className="absolute hidden lg:block inset-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={desktopImages[currentImageIndex]}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={fadeVariants}
                            transition={{duration: 1.2, ease: "easeInOut"}}
                            className="absolute flex flex-row justify-end right-0 w-full h-full hero-image"
                        >
                            <Image
                                key={desktopImages[currentImageIndex]}
                                src={desktopImages[currentImageIndex]}
                                alt="Airplane"
                                width={1200}
                                height={1600}
                                // className="w-full xl:w-auto lg:-top-0 sm:w-auto h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[620px] object-contain relative z-40"
                                className={`w-full xl:w-auto h-full object-contain relative z-40 duration-500 ease-in-out`}
                                sizes="(max-width: 2560px) 750px, 900px"
                            />
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute -left-50 lg:-top-5 xl:-top-10 inset-0 flex items-center logo-image">
                        <div className="w-full h-full flex justify-center">
                            <Image
                                src="/x1.png"
                                alt="Nexus X Logo"
                                width={1600}
                                height={1600}
                                // className="lg:w-[800px] xl:w-full sm:w-auto h-[600px] sm:h-[800px] lg:h-[980px] object-contain z-30 logo-images"
                                className="w-full h-full object-contain z-30 logo-images"
                                sizes="(max-width: 2560px) 1000px, 1200px"
                            />
                        </div>
                    </div>
                </div>

                <Nav/>
                {/* ----- */}
                    <div
                    id="hero-background-image"
                    className="relative w-full mx-auto h-full -mt-30 block md:hidden lg:hidden xl:hidden"
                >
                    <div className="absolute block inset-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={mobileImages[currentImageIndex]}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                // variants={fadeVariants}
                                // transition={{duration: 1.2, ease: "easeInOut"}}
                                className="absolute flex flex-row justify-end right-0 w-[300px] sm:w-[400px] md:w-[500px] h-full hero-image"
                            >
                                <Image
                                    // src="/home/img-mobile.svg"
                                    key={mobileImages[currentImageIndex]}
                                    src={mobileImages[currentMobileImageIndex]}
                                    alt="Airplane"
                                    width={1600}
                                    height={1600}
                                    className={`w-[100px] h-[100px] object-contain relative z-40 duration-500 ease-in-out hero-images
                                    }`}
                                />
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute inset-0 left-0 flex items-center logo-image">
                            <div className="w-full h-full flex justify-center mobi-logo">
                                <Image
                                    src="/home/x-mobile.svg"
                                    alt="Nexus X Logo"
                                    width={1600}
                                    height={1600}
                                    className="w-full h-full object-contain z-30 logo-images"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---- */}
                <div
                    id="hero-background-image"
                    className="relative w-full mx-auto h-full -mt-30 hidden  lg:hidden md:block"
                >
                    <div className="absolute block inset-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={mobileImages[currentImageIndex]}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={fadeVariants}
                                // transition={{duration: 1.2, ease: "easeInOut"}}
                                className="absolute flex flex-row justify-end right-0 w-[300px] sm:w-[400px] md:w-[500px] h-full hero-image"
                            >
                                <Image
                                    // src="/home/img-mobile.svg"
                                    key={mobileImages[currentImageIndex]}
                                    src={mobileImages[currentMobileImageIndex]}
                                    alt="Airplane"
                                    width={1600}
                                    height={1600}
                                    className={`w-[100px] h-[100px] object-contain relative z-40 duration-500 ease-in-out hero-images
                                    }`}
                                />
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute inset-0 left-0 flex items-center logo-image">
                            <div className="w-full h-full flex justify-center mobi-logo">
                                <Image
                                    src="/home/x-mobile.svg"
                                    alt="Nexus X Logo"
                                    width={1600}
                                    height={1600}
                                    className="w-full h-full object-contain z-30 logo-images"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="mobile-hero-content"
                    className="relative flex flex-col border-[#D9D9D9] container mx-auto border-b-2 pb-4 mt-4 justify-center items-center text-center
                            w-full px-4 sm:px-6 lg:hidden z-10"
                >
                    <div className="w-full max-w-lg mx-auto">
                        <AnimatedSection direction="up" delay={0.2}>
                            <h1 className="text-2xl mobile:text-3xl sm:text-4xl font-bold text-[#114284] leading-tight mb-4 sm:mb-6">
                                {heroTitleMobileFirstPart}
                                {/* {dataTest?.heroTitle} */}
                                <br className="sm:hidden"/>
                                {heroTitleMobileSecondPart}
                            </h1>
                        </AnimatedSection>

                        <AnimatedSection direction="up" delay={0.3}>
                            <p className="text-sm mobile:text-base sm:text-lg text-[#676767] font-medium mb-6 sm:mb-8 leading-relaxed">
                                {heroDesc || "                                As your agile logistics partner, we operate as an extension of\n" +
                                    "                                your business, so you enjoy peace of mind, and responsive\n" +
                                    "                                service."}
                            </p>
                        </AnimatedSection>

                        <AnimatedSection direction="up" delay={0.4}>
                            <Link href={buttonLink || "/services"} passHref>
                                <button
                                    className="bg-[#162F65] text-white
                                   px-6 py-2 mobile:px-8 mobile:py-3 text-sm font-medium  rounded-[10px] hover:bg-blue-950 hover:scale-105 transition-all duration-300"
                                >
                                    {buttonLabel}
                                </button>
                            </Link>
                        </AnimatedSection>
                    </div>
                </div>

                <div className="relative hidden lg:block z-40 mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
                    <div className="w-full sm:w-3/4 lg:w-1/2 text-center sm:text-left">
                        <AnimatedSection direction="left" delay={0.2}>
                            <h1 className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[45px] font-bold text-[#114284] leading-[54px] mb-4 sm:mb-6 head-title max-w-[340px]">
                                {heroTitleFirstPart}
                                <br/>
                                {heroTitleSecondPart}
                                <br/>
                                {heroTitleThirdPart}
                                {/* {data?.heroTitle} */}
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection direction="left" delay={0.3}>
                            <p className="text-sm sm:text-base lg:text-base xl:text-lg text-[#676767] font-medium mb-6 sm:mb-8 max-w-60 xl:max-w-md leading-[25px] head-para">
                                {heroDesc}
                            </p>
                        </AnimatedSection>
                        <AnimatedSection direction="left" delay={0.4}>
                            <Link href={buttonLink || "/services"} passHref>
                                <button
                                    className="bg-[#162F65] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-xl font-medium rounded-[10px] hover:bg-blue-950 hover:scale-105 transition-all duration-300 head-button">
                                    {buttonLabel}
                                </button>
                            </Link>
                        </AnimatedSection>
                    </div>
                </div>

                <Quote/>

                <section
                    id="service-content"
                    className="relative py-6 lg:-top-0 z-40 sm:py-8"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                        <AnimatedSection direction="up" delay={0.2}>
                            <div
                                className="flex overflow-x-auto lg:mx-auto lg:grid lg:grid-cols-5 gap-4 lg:gap-1 pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide touch-pan-x lg:justify-items-center">
                                {values.map((value, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[150px] lg:min-w-0 snap-center px-2"
                                    >
                                        <div className="mb-0.5 sm:mb-1 lg:mb-2">
                                            <Image
                                                src={value.icon}
                                                alt={`${value.title} icon`}
                                                width={48}
                                                height={48}
                                                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                                            />
                                        </div>
                                        <h3 className="text-[#225395] font-semibold text-base sm:text-lg lg:text-xl italic">
                                            {value.title}
                                        </h3>
                                        <p className="text-[#0C2D59] font-medium text-[10px] lg:text-xs leading-4 whitespace-pre-line">
                                            {value.subtitle}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default HomeHeader;