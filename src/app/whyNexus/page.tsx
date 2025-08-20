import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
import Nav from "@/Components/Nav";
import Accordian from "@/Components/Accordian";
import Link from "next/link";
import HeroSection from "@/Components/HeroSection";
import AnimatedSection from "@/Components/AnimatedSection";
import { getWhyNexusData } from "@/sanity/lib/api";
import WhyNexusTestimonialCarousel from "@/Components/WhyNexusTestimonialCarousel";
import { Metadata } from "next";
import { urlFor } from "../../../client";


interface AccordianItem {
    accordian_title?: string;
    accordian_description?: string;
}

const WhyNexus = async () => {

    const pageData = await getWhyNexusData();
    console.log("why nexus------------ :", pageData);

    if (!pageData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">No content available.</div>
            </div>
        );
    }

    const accordionItemsArray: AccordianItem[] = [
        pageData.accordian_1,
        pageData.accordian_2,
        pageData.accordian_3,
        pageData.accordian_4,
        pageData.accordian_5,
    ].filter(Boolean) as AccordianItem[];

    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block">
                <Nav />

                <HeroSection
                    title={pageData.hero_section?.heroTitle || "Why Nexus Logix"}
                    desktopImage={pageData.hero_section?.heroImage || "/why-nexus/banner.svg"}
                    mobileImage="/hero_arrow.svg"
                    altText="Why nexus hero section"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-4 sm:px-6 lg:px-8 why-nexus-main-div">
                <div className="bg-transparent -mt-0 lg:-mt-45 px-4 py-6 md:py-10 ">
                    {/* Mobile Layout: title → image → description */}
                    <AnimatedSection direction="up" delay={0.2}>
                        <div className="block lg:hidden flex flex-col items-center gap-4">
                            {/* Title */}
                            <h2 className="font-bold text-[24px] sm:text-[32px] text-[#162F65] font-poppins text-center">
                                {pageData.heading_title || "Who’s Nexus ?"}
                            </h2>

                            {/* Image */}
                            <Image
                                src={pageData.heading_image || "/why-nexus/history-inspiration.png"}
                                alt="Nexus X Logo"
                                width={620}
                                height={460}
                                className="rounded-[10px] w-full h-auto object-cover"
                            />

                            {/* Description */}
                            <p className="text-sm text-[#676767] font-poppins text-justify whitespace-pre-line">
                                {pageData.heading_description ||
                                    "Nexus Logix is an Australian freight forwarder and logistics provider, headquartered in Brisbane. Founded by a group of seasoned industry professionals who recognised an opportunity to blend deep regional knowledge with modern systems and global networks, Nexus Logix operates akin to a finely tuned F1 pit crew supporting customer as they race ahead towards their goals. From day one, our mission has been clear: to be the steadfast partner that understands your business needs and moves your cargo with precision and care."}
                            </p>

                            <p className="text-sm text-[#676767] font-poppins text-justify">
                                {pageData.heading_description_2 || "Much like a perfectly choreographed ballroom dance, our\n" +
                                    "                                operations rely on trust, timing, and seamless coordination.\n" +
                                    "                                Every partner, process, and piece of technology moves in step in\n" +
                                    "                                harmony to keep your business moving forward. From day one, our\n" +
                                    "                                mission has been clear: to be the reliable partner that\n" +
                                    "                                understands your rhythm and moves your cargo with care,\n" +
                                    "                                accuracy, and confidence."}
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.2}>
                        {/* Tablet & Desktop Layout: keep your current structure */}
                        <div
                            className="hidden lg:flex flex-col lg:flex-row gap-6 items-center md:-mt-30 lg:mt-20 2xl:mt-0 lg:items-start">
                            {/* Image Section */}
                            <div className="w-full lg:w-[30%] flex justify-center">
                                <Image
                                    src={pageData.heading_image || "/why-nexus/history-inspiration.png"}
                                    alt="Nexus X Logo"
                                    width={620}
                                    height={460}
                                    className="rounded-[10px] px-0 lg:px-0 max-w-full lg:max-w-[435px] h-auto lg:max-h-[420px] object-cover"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full flex flex-col justify-start">
                                <h2 className="mb-4 font-bold text-[32px] sm:text-[40px] md:text-[60px] lg:text-[70px] leading-[1.1] text-[#162F65] font-poppins">
                                    {pageData.heading_title || "Who’s Nexus ?"}
                                </h2>
                                <p className="text-sm sm:text-base lg:text-[18px] text-[#676767] font-poppins text-justify">
                                    {/*Nexus Logix is an Australian freight forwarder and logistics*/}
                                    {/*provider, headquartered in Brisbane. Founded by a group of*/}
                                    {/*seasoned industry professionals with decades of experience*/}
                                    {/*across Australia, Oceania, and Asia Pacific, we saw the*/}
                                    {/*opportunity to bring grace and precision to an often chaotic*/}
                                    {/*industry.*/}
                                    {pageData.heading_description || "Nexus Logix is an Australian freight forwarder and logistics provider, headquartered in Brisbane. Founded by a group of seasoned industry professionals who recognised an opportunity to blend deep regional knowledge with modern systems and global networks, Nexus Logix operates akin to a finely tuned F1 pit crew supporting customers as they race ahead towards their goals. From day one, our mission has been clear: to be the steadfast partner that understands your business needs and moves your cargo with precision and care."}
                                </p>

                                <p className="text-sm sm:text-base lg:text-[18px] text-[#676767] font-poppins text-justify mt-2">
                                    {pageData.heading_description_2 || "Much like a perfectly choreographed ballroom dance, our\n" +
                                        "                                operations rely on trust, timing, and seamless coordination.\n" +
                                        "                                Every partner, process, and piece of technology moves in step in\n" +
                                        "                                harmony to keep your business moving forward. From day one, our\n" +
                                        "                                mission has been clear: to be the reliable partner that\n" +
                                        "                                understands your rhythm and moves your cargo with care,\n" +
                                        "                                accuracy, and confidence."}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* cards */}

                <div>
                    <AnimatedSection direction="up" delay={0.2}>
                        <h3 className="text-[24px] sm:text-[30px] md:text-[32px] lg:text-[50px] font-semibold text-[#162F65] mb-2 text-center">
                            {pageData.section_1_title || "What we Deliver"}
                        </h3>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.3}>
                        <div className="flex flex-col sm:flex-row justify-between gap-4 my-8 px-0 sm:px-6 lg:px-8">
                            <div
                                className="group bg-white hover:bg-[#0F2043] transition-all duration-300 rounded-lg shadow p-5 sm:p-6 md:p-8 flex-1">
                                <h3 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-[#162F65] group-hover:text-white mb-2">
                                    {pageData.cards_section_1?.card_1_title || "Delightful Service"}
                                </h3>
                                <p className="lg:text-paragraph text-[14px] md:text-[18px] text-[#676767] group-hover:text-white font-poppins font-medium">
                                    {pageData.cards_section_1?.card_1_description || "Transparent, genuine care that puts you first"}
                                </p>
                            </div>
                            <div
                                className="group bg-white hover:bg-[#0F2043] transition-all duration-300 rounded-lg shadow p-5 sm:p-6 md:p-8 flex-1">
                                <h3 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-[#162F65] group-hover:text-white mb-2">
                                    {pageData.cards_section_1?.card_2_title || "Competitive Pricing"}
                                </h3>
                                <p className="lg:text-paragraph text-[14px] md:text-[18px] text-[#676767] group-hover:text-white font-poppins font-medium">
                                    {pageData.cards_section_1?.card_2_description || "Through strong global networks"}
                                </p>
                            </div>
                            <div
                                className="group bg-white hover:bg-[#0F2043] transition-all duration-300 rounded-lg shadow p-5 sm:p-6 md:p-8 flex-1">
                                <h3 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-[#162F65] group-hover:text-white mb-2">
                                    {pageData.cards_section_1?.card_3_title || "Local Expertise"}
                                </h3>
                                <p className="lg:text-paragraph text-[14px] md:text-[18px] text-[#676767] group-hover:text-white font-poppins font-medium">
                                    {pageData.cards_section_1?.card_3_description || "Team with 25 years of Local Experience"}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* second row */}
                    <AnimatedSection direction="up" delay={0.4}>
                        <div className="flex flex-col sm:flex-row justify-between gap-4 my-8 px-0 sm:px-6 lg:px-8">
                            <div
                                className="group bg-white hover:bg-[#0F2043] transition-all duration-300 rounded-lg shadow p-5 sm:p-6 md:p-8 flex-1">
                                <h3 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-[#162F65] group-hover:text-white mb-2">
                                    {pageData.cards_section_2?.card_1_title || "Real Time Visibility"}
                                </h3>
                                <p className="lg:text-paragraph text-[14px] md:text-[18px] text-[#676767] group-hover:text-white font-poppins font-medium">
                                    {pageData.cards_section_2?.card_1_description || "Track every shipment with CargoWise Neo."}
                                </p>
                            </div>

                            <div
                                className="group bg-white hover:bg-[#0F2043] transition-all duration-300 rounded-lg shadow p-5 sm:p-6 md:p-8 flex-1">
                                <h3 className="[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-[#162F65] group-hover:text-white mb-2">
                                    {pageData.cards_section_2?.card_2_title || "Sustainability"}
                                </h3>

                                <span
                                    className="lg:text-paragraph text-[14px] md:text-[18px] text-[#676767] group-hover:text-white font-poppins font-medium">
                                    <span dangerouslySetInnerHTML={{ __html: pageData.cards_section_2?.card_2_description || "Track" }} />
                                </span>
                                {/*                <span className="mx-1"></span>*/}

                                {/*                <span*/}
                                {/*                    className="lg:text-paragraph text-[14px] md:text-[18px] text-[#5DF706] group-hover:text-[#5DF706] font-poppins font-medium">*/}
                                {/*  CO<sub>2</sub>*/}
                                {/*</span>*/}

                                {/* <p
                  className="text-sm font-medium text-[#676767] leading-[25px] whitespace-pre-line text-center"
                  dangerouslySetInnerHTML={{ __html: section.description }}
                /> */}
                                {/*                <span className="mx-1"></span>*/}
                                {/*                <span*/}
                                {/*                    className="lg:text-paragraph text-[14px] md:text-[18px] text-[#676767] group-hover:text-white font-poppins font-medium">*/}
                                {/*  emission of every shipment with CargoWise Neo.*/}
                                {/*</span>*/}
                            </div>

                            <div
                                className="group bg-white hover:bg-[#0F2043] transition-all duration-300 rounded-lg shadow p-5 sm:p-6 md:p-8 flex-1">
                                <h3 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-[#162F65] group-hover:text-white mb-2">
                                    {pageData.cards_section_2?.card_3_title || "Supply Chain Audits"}
                                </h3>
                                <p className="lg:text-paragraph text-[14px] md:text-[18px] text-[#676767] group-hover:text-white font-poppins font-medium">
                                    {pageData.cards_section_2?.card_3_description || "Identify gaps, cut costs, improve performance."}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* third row */}
                    <AnimatedSection direction="up" delay={0.5}>
                        <div className="my-8 gap-4 flex flex-wrap justify-center px-0 sm:px-6 lg:px-8">
                            <div
                                className="group bg-white hover:bg-[#0F2043] transition-all duration-300 rounded-lg shadow p-5 sm:p-6 md:p-8 flex-1">
                                <h3 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-[#162F65] group-hover:text-white mb-2">
                                    {pageData.cards_section_3?.card_title || "Powered by CargoWise"}
                                </h3>
                                <p className="lg:text-paragraph text-[14px] md:text-[18px] text-[#676767] group-hover:text-white font-poppins font-medium">
                                    {pageData.cards_section_3?.card_description || "Manage Your Supply Chain with the World&rsquo;s Most trusted ERP"}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            <div className="w-full bg-[#0F2043] relative flex min-h-[600px] sm:min-h-0 md:min-h-[400px] vision-section">
                <div className="w-full flex">
                    <Image
                        src={"/x-croped.png"}
                        alt="Nexus X Logo"
                        width={1000}
                        height={400}
                        className="lg:max-w-[400px] lg:max-h-[400px] w-full md:h-[400px] object-cover opacity-10 vision-image"
                    />
                </div>

                <div className="absolute inset-0 flex items-center z-10 justify-center">
                    <AnimatedSection direction="up" delay={0.2}>
                        <div
                            className="max-w-7xl mx-auto px-6 sm:px-6  lg:pl-8  flex flex-col lg:flex-row justify-between items-center gap-8 vision-achievements">
                            <div
                                className="flex flex-col mb-4 text-center lg:text-left w-full lg:w-1/3  mr:[0] lg:mr-[60px] ">
                                <h2 className="text-white font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[48px] lg:text-[66px] leading-tight font-poppins ">
                                    {pageData.section_2_title || "Vision & Achievements"}
                                </h2>
                                {/*<h2 className="text-white font-poppins font-semibold text-[28px] sm:text-[40px] md:text-[48px] lg:text-[66px] leading-tight font-poppins">*/}
                                {/*    Achievements*/}
                                {/*</h2>*/}
                            </div>
                            <div className="flex flex-col mb-4 w-full lg:w-2/3 px-2">
                                <p
                                    className="text-white sm:text-[14px] md:text-[16px] lg:text-[18px]  font-normal font-poppins left-align"
                                    style={{ fontStyle: "normal" }}
                                >
                                    {pageData.section_2_description || "Driven by an ambition to simplify the complexities of global freight, we have dedicated ourselves to delivering a service that is both personal and agile. Over nearly three decades, our people&rsquo;s reputation for reliability and innovation has enabled us to serve importers, exporters, and supply chain managers across Australia, New Zealand, and the wider Asia-Pacific region. Just as a race car relies on every component for peak performance, we ensure every shipment is managed flawlessly – allowing you to focus on the finish line."}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
                <div className="max-w-7xl hidden lg:block mx-auto mt-[50px] lg:mt-[100px] px-4 sm:px-6 lg:px-8">
                    <Image
                        src={pageData.section_3_image || "/nexus-core.svg"}
                        alt="Nexus X Logo"
                        width={1000}
                        height={400}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
                <div className="max-w-7xl block lg:hidden mx-auto mt-2 px-8 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto mb-4 md:mb-10">
                        <h2 className="text-[#737887] text-3xl ml-6 sm:text-4xl md:text-5xl font-bold mb-2 text-left leading-tight">
                            {pageData.section_3_title_1 || "Our Core Values"}
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm text-left leading-relaxed">
                            {pageData.section_3_description_1 || "Every decision at Nexus Logix is anchored in our commitment to responsiveness, personalisation, precision, accountability, and a desire to function as an extension of your office. Much like an elite F1 pit crew supports its star driver, we&#39;ve transformed the intricacies of international logistics into comprehensive, customer-focused solutions just for you."}
                        </p>
                    </div>

                    {/* The Nexus Way - Australian Culture Section */}
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-[#162F65] text-5xl sm:text-7xl font-bold text-center leading-tight mb-2">
                            {pageData.section_3_main_title || "The Nexus Way"}
                        </h1>
                        <h2 className="text-[#737887] mr-6 text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-right leading-tight">
                            {pageData.section_3_title_2 || "Australian Culture"}
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm text-justify lg:text-right leading-relaxed">
                            {pageData.section_3_description_2 || "Proudly homegrown, our approach is underpinned by the direct, resilient, and warm spirit synonymous with our local culture. Our clear communication, genuine relationships, and straightforward style reflect the rugged ingenuity of Australia – delivering consistency and excellence, lap after lap, race after race."}
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
                <div
                    className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-8 sm:px-6 lg:px-8 mt-[50px] lg:mt-[100px]">
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <h2 className="text-[32px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-semibold text-[#6E7483] leading-tight">
                            {pageData.section_4_title_1 || "Our customers&rsquo;"}
                        </h2>
                        <h2 className="text-[32px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-semibold text-[#E8AF30] leading-tight">
                            {pageData.section_4_title_2 || " words not ours"}
                        </h2>
                        <p className="text-[#676767] font-normal text-sm xs:text-base sm:text-lg mt-4">
                            {pageData.section_4_description_1 || "For nearly 30 years, we&apos;ve moved cargo (and some mountains) to achieve outstanding successes for our customers."}
                        </p>
                    </div>

                    <WhyNexusTestimonialCarousel testimonials={pageData.testimonial_details_section} />
                </div>
            </AnimatedSection>

            <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8 mt-[50px] lg:mt-[100px]">
                <AnimatedSection direction="up" delay={0.2}>
                    {/* Mobile Layout */}
                    <div className="block lg:hidden">
                        {/* Title */}
                        <h2 className="font-bold text-[28px] sm:text-[32px] text-[#162F65] font-poppins mb-2 text-center">
                            <span
                                dangerouslySetInnerHTML={{ __html: pageData.section_5_card?.card_title || "Sustainability at Nexus Logix" }} />
                        </h2>

                        {/* Image */}
                        <div className="mb-4">
                            <Image
                                src={pageData.section_5_card?.card_image || "/sustainability.png"}
                                alt="Sustainability"
                                width={620}
                                height={460}
                                className="rounded-[10px] w-full h-auto object-cover"
                            />
                        </div>

                        {/* Subtitle */}
                        <p className="font-poppins font-semibold text-base text-[#162F65] leading-[24px] mb-3 text-center">
                            {pageData.section_5_card?.card_subtitle || "Moving Freight. Minimising Footprint. Or Moving Freight Towards a Greener Future or Moving Greener"}
                        </p>

                        {/* Description */}
                        <p className="font-poppins font-normal text-sm text-[#676767] leading-relaxed text-justify">
                            {pageData.section_5_card?.card_description || "At Nexus Logix, sustainability is a conscious mindset that drives every decision we make. As a majority Australian-owned company with a global footprint, we are committed to reducing our environmental impact while empowering our customers to do the same. Our approach integrates green strategies at every level - from the partners we choose and the technology we invest in, to the everyday practices that guide our operations."}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Tablet and Desktop Layout */}
                <div className="hidden lg:flex bg-transparent px-0 py-6 md:py-10 flex-col lg:flex-row gap-10">
                    {/* Image */}
                    <div className="flex-1 flex justify-center items-center">
                        <AnimatedSection direction="left" delay={0.2}>
                            <Image
                                src={pageData.section_5_card?.card_image || "/sustainability.png"}
                                alt="Sustainability"
                                width={620}
                                height={460}
                                className="rounded-[10px] sm:w-full md:w-full lg:max-w-[620px] h-auto lg:max-h-[460px] object-cover"
                            />
                        </AnimatedSection>
                    </div>

                    {/* Text Content */}

                    <div className="flex-1 flex flex-col justify-center">
                        <AnimatedSection direction="right" delay={0.2}>
                            <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] leading-[1.1] text-[#162F65] font-poppins mb-2">
                                {/*Sustainability*/}
                                {/*<br/>*/}
                                {/*at Nexus Logix*/}
                                <span
                                    dangerouslySetInnerHTML={{ __html: pageData.section_5_card?.card_title || "Sustainability at Nexus Logix" }} />
                                {/*{pageData.section_5_card?.card_title || "Sustainability at Nexus Logix"}*/}
                            </h2>

                            <p className="font-poppins font-semibold text-xl text-[#162F65] leading-[26px] mb-2">
                                {pageData.section_5_card?.card_subtitle || "Moving Freight. Minimising Footprint. Or Moving Freight Towards a Greener Future or Moving Greener"}
                            </p>

                            <p className="font-poppins font-normal text-xs sm:text-sm lg:text-base text-[#676767] leading-relaxed text-justify md:text-left">
                                {pageData.section_5_card?.card_description || "At Nexus Logix, sustainability is a conscious mindset that drives every decision we make. As a majority Australian-owned company with a global footprint, we are committed to reducing our environmental impact while empowering our customers to do the same. Our approach integrates green strategies at every level - from the partners we choose and the technology we invest in, to the everyday practices that guide our operations."}
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                <div className="flex flex-row justify-center mb-6">
                    <AnimatedSection direction="up" delay={0.2}>
                        <h2 className="font-bold mt-4 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[1.1] text-[#162F65] font-poppins">
                            {pageData.accordian_section_title || "Our Focus Areas"}
                        </h2>
                    </AnimatedSection>
                </div>
                <Accordian
                    image={pageData.accordian_section_image || "/customs_img1.svg"}
                    classname="max-h-[550px]"
                    accordionItems={accordionItemsArray}
                    description={""}
                />
            </div>

            <AnimatedSection direction="up" delay={0.2}>
                <div className="w-full hidden [@media(min-width:1087px)]:block bg-[#0F2043] mt-[20px] h-[400px]">
                    <div
                        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
                        <Image
                            src={pageData.section_7_image || "/why-nexus/road.svg"}
                            alt="Nexus X Logo"
                            width={1800}
                            height={1200}
                            className="object-cover h-full w-full"
                        />
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
                <div className="w-full block [@media(min-width:1087px)]:hidden bg-[#0F2043] mt-[50px]">
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-8 h-full">
                        <Image
                            src={pageData.section_7_image_for_mobile || "/why-nexus/road-map.svg"}
                            alt="Nexus X Logo"
                            width={800}
                            height={1200}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </AnimatedSection>

            <div className="relative h-64 sm:h-80 lg:h-96 mt-2 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={pageData.bottom_banner?.image || "/why-nexus/why-nexus-ribbon.svg"}
                        // src="/leadership.svg"
                        alt="Airport"
                        width={1000}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div
                    className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
                    <AnimatedSection direction="up" delay={0.2}>
                        <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight">
                            {pageData.bottom_banner?.banner_title || "Australian Expertise"}
                        </h2>

                        <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                            {pageData.bottom_banner?.banner_title_2 || "Global Strength"}
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.2}>
                        <Link href={pageData.bottom_banner?.button_link || "/leadership"}>
                            <button
                                className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
                                {pageData.bottom_banner?.button_text || "Leadership Team"}
                            </button>
                        </Link>
                    </AnimatedSection>
                </div>

                {/*<div*/}
                {/*    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white text-sm sm:text-base lg:text-lg font-light">*/}
                {/*    Sydney Airport*/}
                {/*</div>*/}
            </div>

            {/*<Quote/>*/}

            <AnimatedSection direction="up" delay={0.2}>
                <div className="py-6 lg:py-12">
                    <LinkedinSection />
                </div>
            </AnimatedSection>
        </div>
    );
};

export default WhyNexus;


export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getWhyNexusData();

    // Set SEO data and fallback values
    const seoData = pageData?.seo;
    const defaultTitle = "Why Nexus Logix? Your Australian Freight Partner";
    const defaultDescription = "Discover why Nexus Logix is the trusted choice for Australian freight and logistics. Learn about our core values, local expertise, and commitment to precision and sustainability.";
    const defaultKeywords = ["Why Nexus", "Nexus Logix values", "Australian freight forwarder", "logistics partner", "supply chain expertise", "sustainability in logistics", "freight solutions"];
    const defaultOgImage = pageData?.hero_section?.heroImage || "/why-nexus/banner.svg";
    const defaultCanonicalUrl = "https://nexuslogix.com.au/why-nexus";

    return {
        title: seoData?.title || defaultTitle,
        description: seoData?.description || defaultDescription,
        keywords: seoData?.keywords || defaultKeywords,
        openGraph: {
            title: seoData?.openGraph?.ogTitle || seoData?.title || defaultTitle,
            description: seoData?.openGraph?.ogDescription || seoData?.description || defaultDescription,
            images: seoData?.openGraph?.ogImage ? [urlFor(seoData.openGraph?.ogImage).url()] : [defaultOgImage],
            url: seoData?.canonicalUrl || defaultCanonicalUrl,
            type: "website",
        },
        alternates: {
            canonical: seoData?.canonicalUrl || defaultCanonicalUrl,
        },
    }
}