import Image from "next/image";
import Nav from "@/Components/Nav";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
import Link from "next/link";
import HeroSection from "@/Components/HeroSection";
import AnimatedSection from "@/Components/AnimatedSection";
import {getInsightPageData} from "@/sanity/lib/api";
import {urlFor} from "../../../client";
import TrendingInsights from "@/Components/TrendingInsights";
import {Metadata} from "next";

interface Asset {
    _id: string;
    url: string;
}

interface ImageField {
    _type: string;
    asset: Asset;
}

interface Slug {
    current: string;
}

interface Insight {
    _id: string;
    postTitle: string;
    preview_title: string;
    feature_image: ImageField;
    Post_short_description: string;
    postContent_1: string;
    postContent_2: string;
    postContent_3: string;
    postImage_1: ImageField;
    postImage_2: ImageField;
    slug: Slug;
}


const InsightsPage = async () => {

    const pageData = await getInsightPageData();
    // console.log("------------ insights data", pageData);

    console.log(pageData?.main_post);


    // const trendingInsights = [
    //     {
    //         title: "How Australian Ports Are Becoming Smarter and More Efficient",
    //         description:
    //             "Major ports like Melbourne and Sydney are undergoing tech-driven transformations.",
    //     },
    //     {
    //         title: "How Australian Ports Are Becoming Smarter and More Efficient",
    //         description:
    //             "Major ports like Melbourne and Sydney are undergoing tech-driven transformations.",
    //     },
    //     {
    //         title: "How Australian Ports Are Becoming Smarter and More Efficient",
    //         description:
    //             "Major ports like Melbourne and Sydney are undergoing tech-driven transformations.",
    //     },
    //     {
    //         title: "How Australian Ports Are Becoming Smarter and More Efficient",
    //         description:
    //             "Major ports like Melbourne and Sydney are undergoing tech-driven transformations.",
    //     },
    // ];

    // const latestInsights = [
    //     {
    //         title: "Smart Ports and Automation",
    //         description:
    //             "Australian ports are becoming smarter. From automated cranes to real-time cargo tracking, ports like Port Botany and Port of Melbourne are investing heavily in AI and IoT to streamline operations and reduce delays.",
    //         image: "/insights/1.png",
    //     },
    //     {
    //         title: "Sustainability in Focus",
    //         description:
    //             "Eco-friendly shipping is no longer optional. From electric trucks for port delivery to carbon-neutral sea freight options, many carriers in Australia are adopting cleaner methods to reduce their footprint.",
    //         image: "/insights/2.png",
    //     },
    //     {
    //         title: "Smarter Ports, Faster",
    //         description:
    //             "Australian ports are upgrading with AI and automation, improving cargo handling speed and accuracy.",
    //         image: "/insights/3.png",
    //     },
    //     {
    //         title: "Coastal Shipping",
    //         description:
    //             "More businesses are turning to coastal freight to move goods between Australian cities. It's a cost-effective, eco-friendly alternative to road transport, especially for bulk shipments.",
    //         image: "/insights/4.png",
    //     },
    //     {
    //         title: "E-Com Cargo Boom",
    //         description:
    //             "Australian ports are becoming smarter. From automated cranes to real-time cargo tracking, ports like Port Botany and Port of Melbourne are investing heavily in AI and IoT to streamline operations and reduce delays.",
    //         image: "/insights/5.png",
    //     },
    // ];

    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block ">
                <Nav/>

                {/* <div id="hero-section"
                     className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <Image
                            src="/why-nexus/banner.svg"
                            alt="Nexus X Logo"
                            width={1000}
                            height={400}
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 flex items-center left-10 lg:left-60 justify-start">
                            <div className="text-left px-4">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                    Why Nexus
                                </h1>

                            </div>
                        </div>
                    </div>
                </div> */}

                <HeroSection
                    title="INSIGHTS"
                    desktopImage="/insights-banner.svg"
                    mobileImage="/hero_arrow.svg"
                    altText="Contact us hero section"
                />
            </div>

            {/* Main Content */}
            <div
                // className="container relative max-w-7xl"
                className="container relative max-w-7xl  md:-mt-40 lg:-mt-60 xl:-mt-30 2xl:-mt-70 mx-auto px-4 md:px-6 lg:px-8 xl:px-18 py-8 lg:py-0 insight-main-div"
                >
                <AnimatedSection direction="up" delay={0.2}>
                    <h1 className="text-[#162F65] text-3xl md:text-4xl lg:text-[50px] py-4 font-bold">
                        Insights
                    </h1>
                    {/* Subtitle */}
                    <div className="mb-8 lg:mb-16">
                        <p className="text-[#162F65] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-6xl">
                            {pageData?.Page_subtitle || "Stay ahead with expert opinions, market updates, and actionable insights designed to drive smarter supply chain decisions."}
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 lg:mb-24">
                    {/* Main Featured Card */}
                    <div
                        className="lg:col-span-2 relative rounded-xl overflow-hidden"
                        style={{paddingTop: "56.25%" /* 16:9 Aspect Ratio */}}
                    >
                        <Image
                            fill
                            src={pageData?.main_post?.feature_image?.asset?.url ? urlFor(pageData.main_post.feature_image).url() : "/insights/train.png"}
                            alt={pageData?.main_post?.postTitle || "Freight Hurdles"}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div
                            className="absolute inset-0 transition-all duration-300 bg-gradient-to-t from-[#002B64] to-[#00255700]"/>
                        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                            <AnimatedSection direction="up" delay={0.2}>
                                <h2 className="text-white text-xl md:text-3xl font-bold mb-2 md:mb-4 leading-5 lg:leading-6 tracking-wide">
                                    {pageData?.main_post?.preview_title
                                        || "Freight Hurdles"}
                                </h2>
                                <p className="text-white text-xs md:text-sm mb-4 md:mb-6 leading-4 lg:leading-6 max-w-2xl">
                                    {pageData?.main_post?.Post_short_description || "Australia's cargo industry faces challenges like fuel price hikes, port congestion, and supply chain disruptions."}
                                </p>
                                <Link href={`/insights/${pageData?.main_post?.slug?.current || "train"}`}>
                                    <button
                                        className="bg-white text-[#162F65] px-4 py-2 cursor-pointer rounded-lg text-xs lg:text-sm font-medium w-fit hover:scale-105 transition-all duration-300">
                                        {pageData.main_post_button_text || "Read More"}
                                    </button>
                                </Link>
                            </AnimatedSection>
                        </div>
                    </div>

                    {/* Side Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        <Link href={`/insights/${pageData?.right_section_post_1?.slug?.current || ""}`}>
                            <div
                                className="relative rounded-xl overflow-hidden"
                                style={{paddingTop: "56.25%" /* 4:3 Aspect Ratio */}}
                            >
                                <Image
                                    fill
                                    src={pageData?.right_section_post_1?.feature_image?.asset?.url ? urlFor(pageData.right_section_post_1.feature_image).url() : "/insights/van.png"}
                                    alt={pageData?.right_section_post_1?.postTitle || "Eco Freight"}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 transition-all duration-300 bg-gradient-to-t from-[#002B64] to-[#00255700]"/>
                                <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
                                    <AnimatedSection direction="up" delay={0.2}>
                                        <h3 className="text-white text-lg md:text-xl font-bold mb-2 tracking-wide">
                                            {pageData?.right_section_post_1?.preview_title || "Eco Freight"}
                                        </h3>
                                        <p className="text-white text-xs md:text-xs max-w-2xl leading-4">
                                            {pageData?.right_section_post_1?.Post_short_description || "Sustainability is now a key focus in logistics."}
                                        </p>
                                    </AnimatedSection>
                                </div>
                            </div>
                        </Link>

                        <Link href={`/insights/${pageData?.right_section_post_2?.slug?.current || ""}`}>
                            <div
                                className="relative rounded-xl overflow-hidden"
                                style={{paddingTop: "56.25%" /* 4:3 Aspect Ratio */}}
                            >
                                <Image
                                    fill
                                    src={pageData?.right_section_post_2?.feature_image?.asset?.url ? urlFor(pageData.right_section_post_2.feature_image).url() : "/insights/truck.png"}
                                    alt={pageData?.right_section_post_2?.preview_title || "Eco Freight"}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 transition-all duration-300 bg-gradient-to-t from-[#002B64] to-[#00255700]"/>
                                <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
                                    <AnimatedSection direction="up" delay={0.2}>
                                        <h3 className="text-white text-lg md:text-xl font-bold mb-2 tracking-wide">
                                            {pageData?.right_section_post_2?.preview_title || "Eco Freight"}
                                        </h3>
                                        <p className="text-white text-xs md:text-xs max-w-2xl leading-4">
                                            {pageData?.right_section_post_2?.Post_short_description || "Sustainability is now a key focus in logistics."}
                                        </p>
                                    </AnimatedSection>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Latest Insights Section */}
                <div className="grid grid-cols-1 xl:grid-cols-6 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <div className="xl:col-span-4">
                        <AnimatedSection direction="up" delay={0.2}>
                            <h2 className="text-[#162F65] text-3xl md:text-4xl lg:text-[41px] font-semibold mb-8 lg:mb-12">
                                Latest Insights
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection direction="left" delay={0.2}>
                            <div className="space-y-8 grid sm:grid-cols-2 lg:grid-cols-1 lg:space-y-12">
                                {/*{latestInsights.map((insight, index) => (*/}
                                {/*    <div*/}
                                {/*        key={index}*/}
                                {/*        className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-86 sm:max-w-none mx-auto sm:mx-0 lg:gap-8"*/}
                                {/*    >*/}
                                {/*        <div className="md:col-span-1">*/}
                                {/*            <Image*/}
                                {/*                width={600}*/}
                                {/*                height={600}*/}
                                {/*                src={insight.image}*/}
                                {/*                alt={insight.title}*/}
                                {/*                className="w-full h-48 md:h-56 object-cover rounded-lg"*/}
                                {/*            />*/}
                                {/*        </div>*/}
                                {/*        <div className="md:col-span-2 flex flex-col justify-between">*/}
                                {/*            <div>*/}
                                {/*                <h3 className="text-[#162F65] text-base md:text-lg lg:text-2xl font-semibold mb-2 lg:mb-4 tracking-wide">*/}
                                {/*                    {insight.title}*/}
                                {/*                </h3>*/}
                                {/*                <p className="text-[#676767] text-sm lg:text-base leading-[22px] mb-6 lg:mb-8">*/}
                                {/*                    {insight.description}*/}
                                {/*                </p>*/}
                                {/*            </div>*/}
                                {/*            <Link href="/insights/train">*/}
                                {/*                <button*/}
                                {/*                    className="bg-[#162F65] text-white px-6 py-3 cursor-pointer rounded-xl text-xs lg:text-sm font-medium w-fit hover:bg-blue-950 hover:scale-105 transition-all duration-300">*/}
                                {/*                    Read More*/}
                                {/*                </button>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*))}*/}

                                {pageData?.latest_insights_title?.map((insight : Insight, index: number) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-86 sm:max-w-none mx-auto sm:mx-0 lg:gap-8"
                                    >
                                        <div className="md:col-span-1">
                                            <Image
                                                width={600}
                                                height={600}
                                                src={insight.feature_image?.asset?.url ? urlFor(insight.feature_image).url() : "/insights/default.png"}
                                                alt={insight.postTitle || "Insight Image"}
                                                className="w-full h-48 md:h-56 object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="md:col-span-2 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-[#162F65] text-base md:text-lg lg:text-2xl font-semibold mb-2 lg:mb-4 tracking-wide">
                                                    {insight.preview_title}
                                                </h3>
                                                <p className="text-[#676767] text-sm lg:text-base leading-[22px] mb-6 lg:mb-8">
                                                    {insight.Post_short_description}
                                                </p>
                                            </div>
                                            <Link href={`/insights/${insight.slug?.current || "train"}`}>
                                                <button
                                                    className="bg-[#162F65] text-white px-6 py-3 cursor-pointer rounded-xl text-xs lg:text-sm font-medium w-fit hover:bg-blue-950 hover:scale-105 transition-all duration-300">
                                                    Read More
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Sidebar */}

                    <div className="xl:col-span-2">
                        <AnimatedSection direction="right" delay={0.2}>
                            {/*<div className="bg-[#E7E6DD] rounded-xl p-6 lg:p-8 sticky top-8">*/}
                            {/*    <h3 className="text-[#162F65] text-xl md:text-2xl lg:text-3xl font-medium mb-6 lg:mb-8 tracking-wide">*/}
                            {/*        Trending Insights*/}
                            {/*    </h3>*/}

                            {/*    /!* Search Bar *!/*/}
                            {/*    <div className="relative mb-8 lg:mb-12">*/}
                            {/*        <div className="bg-white rounded-xl p-4 flex items-center gap-3">*/}
                            {/*            <Search className="w-6 h-6 text-[#162F65] flex-shrink-0"/>*/}
                            {/*            <span className="text-[#676767] text-lg">Search</span>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}

                            {/*    /!* Trending Items *!/*/}
                            {/*    <div className="space-y-6 lg:space-y-8">*/}
                            {/*        /!*{trendingInsights.map((item, index) => (*!/*/}
                            {/*        /!*    <div key={index} className="flex gap-4">*!/*/}
                            {/*        /!*        <div*!/*/}
                            {/*        /!*            className="w-3 lg:w-6 h-14 bg-[#162F65] rounded-xl flex-shrink-0 -ml-7 lg:-ml-11"></div>*!/*/}
                            {/*        /!*        <div className="flex-1 px-5">*!/*/}
                            {/*        /!*            <h4 className="text-[#162F65] text-base lg:text-lg font-medium mb-2 leading-tight">*!/*/}
                            {/*        /!*                {item.title}*!/*/}
                            {/*        /!*            </h4>*!/*/}
                            {/*        /!*            <p className="text-[#0F2043] text-sm lg:text-base leading-relaxed mb-3">*!/*/}
                            {/*        /!*                {item.description}*!/*/}
                            {/*        /!*            </p>*!/*/}
                            {/*        /!*            <div className="text-right">*!/*/}
                            {/*        /!*                <Link href="/insights/train">*!/*/}
                            {/*        /!*                    <button*!/*/}
                            {/*        /!*                        className="text-[#0F2043] self-end text-sm cursor-pointer underline hover:text-[#162F65] transition-colors">*!/*/}
                            {/*        /!*                        View More*!/*/}
                            {/*        /!*                    </button>*!/*/}
                            {/*        /!*                </Link>*!/*/}
                            {/*        /!*            </div>*!/*/}
                            {/*        /!*        </div>*!/*/}
                            {/*        /!*    </div>*!/*/}
                            {/*        /!*))}*!/*/}

                            {/*        {pageData?.trending_insights_title?.map((item, index: number) => (*/}
                            {/*            <div key={index} className="flex gap-4">*/}
                            {/*                <div className="w-3 lg:w-6 h-14 bg-[#162F65] rounded-xl flex-shrink-0 -ml-7 lg:-ml-11"></div>*/}
                            {/*                <div className="flex-1 px-5">*/}
                            {/*                    <h4 className="text-[#162F65] text-base lg:text-lg font-medium mb-2 tracking-tight">*/}
                            {/*                        {item.postTitle}*/}
                            {/*                    </h4>*/}
                            {/*                    /!*<p class包裹class="text-[#0F2043] text-sm lg:text-base leading-relaxed mb-3">*!/*/}
                            {/*                    /!*    {item.Post Louise_description}*!/*/}
                            {/*                    /!*</p>*!/*/}
                            {/*                    <p className="text-[#0F2043] text-sm lg:text-base leading-relaxed mb-3">*/}
                            {/*                        {item.Post_short_description}*/}
                            {/*                    </p>*/}
                            {/*                    <div className="text-right">*/}
                            {/*                        <Link href={`/insights/${item.slug?.current || "train"}`}>*/}
                            {/*                            <button*/}
                            {/*                                className="text-[#0F2043] self-end text-sm cursor-pointer underline hover:text-[#162F65] transition-colors">*/}
                            {/*                                View More*/}
                            {/*                            </button>*/}
                            {/*                        </Link>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        ))}*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <TrendingInsights insights={pageData?.trending_insights_title || []} />
                        </AnimatedSection>
                    </div>
                </div>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
                <div className="">
                    <LinkedinSection/>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default InsightsPage;


export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getInsightPageData();

    if (!pageData) {
        return {
            title: "Insights | Nexus Logix",
            description: "Stay ahead with expert opinions, market updates, and actionable insights designed to drive smarter supply chain decisions.",
        };
    }

    const seoData = pageData.seo;
    const defaultTitle = "Insights | Nexus Logix";
    const defaultDescription = pageData.Page_subtitle || "Stay ahead with expert opinions, market updates, and actionable insights designed to drive smarter supply chain decisions.";
    const defaultKeywords = ["air freight", "sea freight", "ocean cargo", "freight forwarding", "logistics", "shipping", "international shipping", "cargo services"];
    const defaultOgImage = "/insights/default.png";
    const defaultCanonicalUrl = "https://nexuslogix.com.au/insights";

    return {
        title: seoData?.metaTitle || defaultTitle,
        description: seoData?.metaDescription || defaultDescription,
        keywords: defaultKeywords,
        openGraph: {
            title: seoData?.metaTitle || defaultTitle,
            description: seoData?.metaDescription || defaultDescription,
            images: seoData?.metaImage?.asset?.url ? [urlFor(seoData.metaImage).url()] : [defaultOgImage],
            url: defaultCanonicalUrl,
            type: "website",
        },
        alternates: {
            canonical: defaultCanonicalUrl,
        },
    };
}
