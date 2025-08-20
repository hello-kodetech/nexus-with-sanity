import Image from "next/image";
import Nav from "@/Components/Nav";
import React from "react";
import LinkedinSection from "@/Components/LinkedinSection";
import HeroSection from "@/Components/HeroSection";
// import {PostDetails} from "@/sanity/types";
import {getInsightPageData, getPostData} from "@/sanity/lib/api";
import {urlFor} from "../../../../client";
// import {PortableText, PortableTextBlock, PortableTextReactComponents} from "@portabletext/react";
import {PortableText, PortableTextBlock, PortableTextReactComponents} from "next-sanity";
import {Metadata} from "next";
// import { image, object } from "framer-motion/client";


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

interface SEO {
    page: string;
    title: string;
    description: string;
    keywords: string[];
    openGraph: {
        ogTitle: string;
        ogDescription: string;
        ogImage: string;
    };
    canonicalUrl: string;
}

interface PostDetails {
    postTitle: string;
    preview_title: string;
    feature_image: ImageField;
    Post_short_description: string;
    postContent_1: PortableTextBlock[];
    postContent_2: PortableTextBlock[];
    postContent_3: PortableTextBlock[];
    postContent_4: PortableTextBlock[]; 
    slug: string;
    postImage_1: ImageField;
    postImage_2: ImageField;
    postImage_3: ImageField;
    seo: SEO;
}

interface Insight {
    _id: string;
    postTitle: string;
    preview_title: string;
    feature_image: ImageField;
    Post_short_description: string;
    postContent_1: PortableTextBlock[];
    postContent_2: PortableTextBlock[];
    postContent_3: PortableTextBlock[];
    postImage_1: ImageField;
    postImage_2: ImageField;
    slug: Slug;
}


const portableTextComponents: Partial<PortableTextReactComponents> = {
    block: {
        normal: ({children}) => {
            if (!children || (Array.isArray(children) && children.every(child => child === '\n' || !child))) {
                return <p className="text-[#000000] text-sm sm:text-base lg:text-lg leading-relaxed my-4"></p>;
            }
            return (
                <p className="text-[#000000] text-sm sm:text-base whitespace-pre-line lg:text-lg leading-relaxed">
                    {children}
                </p>
            );
        },
        bullet: ({children}) => <li className="list-disc whitespace-pre-line ml-6">{children}</li>,
        numbered: ({ children }) => <li className="list-decimal whitespace-pre-line ml-6">{children}</li>,
    },
    list: {
        bullet: ({children}) => <ul className="list-disc pl-6 whitespace-pre-line space-y-2">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal pl-6 whitespace-pre-line space-y-2">{children}</ol>,
    },
    marks: {
        strong: ({children}) => <strong className="font-bold">{children}</strong>,
        em: ({children}) => <em className="italic">{children}</em>,
        link: ({children, value}) => (
            <a
                href={value.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
            >
                {children}
            </a>
        ),
    },
    types: {
        span: ({value}) => {
            if (value.text === '\n') {
                return <br/>;
            }
            return <span>{value.text}</span>;
        },

        image: ({value}) => {
            const { alt, caption } = value;
            return (
                <figure>
                    <Image
                        src={urlFor(value).url()}
                        alt={alt || "Image"}
                        height={400}
                        width={600}
                        className="w-auto h-auto rounded-[10px] object-contain max-w-[300px] md:max-w-[700px]"
                    />
                    {caption && <figcaption className="text-sm text-center mt-2">{caption}</figcaption>}
                </figure>
            );
        }
    },
};

interface InsightInnerProps {
    params: Promise<{ id: string }>; // params is a Promise
}


const InsightInner = async ({params}: InsightInnerProps) => {

    // const resolvedParams = await params;
    // const slug = resolvedParams.id;

    const { id: slug } = await params;

    // Directly await data fetching in the Server Component
    const postData: PostDetails | null = await getPostData(slug);
    const insightsPageData = await getInsightPageData();

    console.log("--------- get post data: ", postData);

    if (!postData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">No content available for this post.</div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block">
                <Nav/>

                <HeroSection
                    title="INSIGHTS"
                    desktopImage="/insights-banner.svg"
                    mobileImage="/hero_arrow.svg"
                    altText="Contact us hero section"
                />

            </div>


            <div
                className="container relative -mt-10 md:-mt-40 lg:-mt-60 xl:-mt-30 2xl:-mt-70 mx-auto px-8 py-8 lg:py-12 max-w-7xl insight-main-div">
                {/* Hero Section */}
                <div className="space-y-6 lg:space-y-8">
                    {/* Main Title */}
                    <h1 className="text-[#162F65] font-bold text-xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] tracking-[1.65px]">
                        {postData.postTitle}
                    </h1>
                </div>

                {/* Content Section */}
                <div className="mt-12 lg:mt-16 space-y-6 lg:space-y-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="w-full max-w-5xl">
                            {postData.feature_image && (
                                <Image
                                    src={urlFor(postData.feature_image).url()}
                                    alt={postData.postTitle || "Post image"}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-[10px] object-cover aspect-[2/1]"
                                />
                            )}
                        </div>
                        <div
                            className="text-[#000000] text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed mt-6 mb-6">
                            <PortableText value={postData.postContent_1} components={portableTextComponents}/>
                        </div>

                        <div className="w-full max-w-5xl">
                            {postData.postImage_1 && (
                                <Image
                                    src={urlFor(postData.postImage_1).url()}
                                    alt={postData.postTitle || "Post image"}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-[10px] object-cover aspect-[2/1]"
                                />
                            )}
                        </div>

                        <div
                            className="text-[#000000] text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed mt-6 mb-6">
                            <PortableText value={postData.postContent_2} components={portableTextComponents}/>
                        </div>

                        <div className="w-full max-w-5xl">
                            {postData.postImage_2 && (
                                <Image
                                    src={urlFor(postData.postImage_2).url()}
                                    alt={postData.postTitle || "Post image"}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-[10px] object-cover aspect-[2/1]"
                                />
                            )}
                        </div>

                        <div
                            className="text-[#000000] text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed mt-6 mb-6">
                            <PortableText value={postData.postContent_3} components={portableTextComponents}/>
                        </div>


                        <div className="w-full max-w-5xl">
                            {postData.postImage_3 && (
                                <Image
                                    src={urlFor(postData.postImage_3).url()}
                                    alt={postData.postTitle || "Post image"}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-[10px] object-cover aspect-[2/1]"
                                />
                            )}
                        </div>

                        <div
                            className="text-[#000000] text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed mt-6 mb-6">
                            <PortableText value={postData.postContent_4} components={portableTextComponents}/>
                        </div>
                    </div>
                </div>

                {/* Related Insights Section */}
                <div className="mt-16 lg:mt-20">
                    <h2 className="text-[#162F65] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[32px] font-normal mb-8 lg:mb-12">
                        This Insights may also be of interest to you.
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">

                        {insightsPageData?.latest_insights_title?.slice(0, 4).map((insight: Insight, index: number) => (
                            <div key={index} className="relative group">
                                <div className="relative w-full h-44 rounded-[10px] overflow-hidden">
                                    <Image
                                        src={
                                            insight.feature_image?.asset?.url
                                                ? urlFor(insight.feature_image).width(600).quality(80).url()
                                                : "/insights/van.png"
                                        }
                                        alt={insight.postTitle || "Insight image"}
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0">
                                        <div className="absolute bg-gradient-to-t from-[#002B64] to-[#00255700] inset-0" />
                                        <div className="absolute bottom-9 left-6 right-6">
                                            <h3 className="text-white font-bold text-sm lg:text-base leading-normal tracking-[0.6px]">
                                                {insight.preview_title || insight.postTitle}
                                            </h3>
                                            <p className="text-white text-[10px] leading-[12px] mb-4">
                                                {insight.Post_short_description ||
                                                    "Sustainability is now a key focus in logistics."}
                                            </p>
                                        </div>

                                        <div className="absolute bottom-4 left-6">
                                            <a href={`/insights/${insight.slug.current || "train"}`}>
                                                <button className="bg-white text-[#162F65] px-3 py-1.5 rounded-[10px] text-xs font-medium hover:scale-105 transition-all duration-300">
                                                    Read More
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className="">
                <LinkedinSection/>
            </div>

        </div>
    );
}

export default InsightInner;


export async function generateMetadata({params}: InsightInnerProps): Promise<Metadata> {
    const { id: slug } = await params;
    const blog = await getPostData(slug);

    if (!blog) {
        return { title: "Blog Not Found" };
    }

// export async function generateMetadata(){

    const seoData = blog.seo;
    const defaultTitle = "Insight | Nexus Logix";
    const defaultDescription = "Stay ahead with expert insights on supply chain and logistics.";
    const defaultKeywords = ["air freight", "sea freight", "ocean cargo", "freight forwarding", "logistics", "shipping", "international shipping", "cargo services"];
    const defaultOgImage = "/insights/van.png";
    const defaultCanonicalUrl = `https://nexuslogix.com.au/insights/${slug}`;

    return {
        title:  defaultTitle,
        description: seoData?.description || defaultDescription,
        keywords: seoData?.keywords || defaultKeywords,
        openGraph: {
            title: seoData?.openGraph?.ogTitle || seoData?.title || defaultTitle,
            description: seoData?.openGraph?.ogDescription || seoData?.description || defaultDescription,
            images: seoData?.openGraph?.ogImage ? [seoData.openGraph.ogImage] : [defaultOgImage],
            url: seoData?.canonicalUrl || defaultCanonicalUrl,
            type: "article",
        },
    };
}