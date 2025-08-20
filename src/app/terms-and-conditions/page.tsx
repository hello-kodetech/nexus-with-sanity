import AnimatedSection from "@/Components/AnimatedSection";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
import Nav from "@/Components/Nav";
import HeroSection from "@/Components/HeroSection";
import {getTermsAndConditionsData} from "@/sanity/lib/api";
import {PortableText} from "@portabletext/react";
import {Metadata} from "next";
import {urlFor} from "../../../client";

const TermsAndConditions = async () => {


    const pageData = await getTermsAndConditionsData();

    if (!pageData) {
        return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
    }


    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block">
                <Nav/>

                <HeroSection
                    title={pageData.hero_section?.heroTitle || "Terms and Conditions"}
                    desktopImage={pageData.hero_section?.heroImage || "/terms-heeader.svg"}
                    mobileImage="/hero_arrow.svg"
                    altText="Terms and Conditions hero section"
                />
            </div>

            <div className="relative t-and-c-main-div">
                <div className="">

                    <div className="max-w-7xl mx-auto px-8 sm:px-6 md:px-10 lg:px-18 lg:-mt-28 md:-mt-28">
                        <AnimatedSection direction="up" delay={0.2}>
                            <h1 className="text-[#162F65] text-3xl md:text-4xl lg:text-[50px] py-4 font-bold">
                                {pageData.hero_section?.heroTitle || "Terms and Conditions"}
                            </h1>
                        </AnimatedSection>
                        <div className="text-[#676767] text-base leading-relaxed space-y-4">
                            <PortableText value={pageData.terms_and_conditions ?? []}/>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
                <div className="py-6 lg:py-12">
                    <LinkedinSection/>
                </div>
            </AnimatedSection>
        </div>
    );
};


export default TermsAndConditions;

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getTermsAndConditionsData();

    // Set SEO data and fallback values
    const seoData = pageData?.seo;
    const defaultTitle = "Terms and Conditions - Nexus Logix";
    const defaultDescription = "Read the terms and conditions for using the Nexus Logix website and our logistics services. This document outlines your rights and obligations as a user or customer.";
    const defaultKeywords = ["terms and conditions", "terms of service", "legal policy", "Nexus Logix terms", "website terms", "service agreement"];
    const defaultOgImage = pageData?.hero_section?.heroImage || "/terms-heeader.svg";
    const defaultCanonicalUrl = "https://nexuslogix.com.au/terms-and-conditions";

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
