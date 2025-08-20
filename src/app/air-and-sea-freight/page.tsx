// "use client";
// import Image from "next/image";
// import LinkedinSection from "@/Components/LinkedinSection";
// import React from "react";
// import Link from "next/link";
// import Nav from "@/Components/Nav";
// import PhotoDescriptionSection from "@/Components/PhotoDescriptionSection";
// import HeroTitleAndParagraph from "@/Components/HeroTitleAndParagraph";
// import ServiceCardRow from "@/Components/ServiceCardRow";
// import Quote from "@/Components/Quote";
// import HeroSection from "@/Components/HeroSection";
// import FreightQuoteWidget from "@/Components/FreightQuoteWidget";
import Link from "next/link";
import AnimatedSection from "@/Components/AnimatedSection";
// import { airAndFreightService } from "@/sanity/lib/air-and-freight-service";
// import { useEffect, useState } from "react";



import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
import Nav from "@/Components/Nav";
import PhotoDescriptionSection from "@/Components/PhotoDescriptionSection";
import HeroTitleAndParagraph from "@/Components/HeroTitleAndParagraph";
import ServiceCardRow from "@/Components/ServiceCardRow";
import Quote from "@/Components/Quote";
import HeroSection from "@/Components/HeroSection";
import { getAirAndFreightServiceData } from "@/sanity/lib/api";
import { urlFor } from "../../../client";
import { Metadata } from "next";





const AirAndSeaFreight = async () => {
  const pageData = await getAirAndFreightServiceData();

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">No content available.</div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />
        <HeroSection
          title={pageData.hero_section?.heroTitle || "Air & Sea Freight Services"}
          desktopImage={pageData.hero_section?.heroImage || "/hero-images/air&sea.svg"}
          mobileImage="/hero_arrow.svg"
          altText="Air and Sea Freight Hero Image"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 lg:px-8 lg:-mt-28 md:-mt-28 service-inner-main-div">
        <AnimatedSection direction="up" delay={0.2}>
          <HeroTitleAndParagraph
            title={pageData.heading_title || "Air & Sea Freight Services"}
            paragraph1={pageData.heading_description || "Offering speed, cost-effectiveness, and reliability, our air and sea freight services are built to match your urgency, budget, and cargo complexity. Whether you're racing against a deadline or coordinating large-scale shipments, we deliver precision logistics, reliable tracking, and personal attention."}
            paragraph2=""
          />
        </AnimatedSection>

        {/* {data?.map((page, pageIndex) => (
                    <div key={pageIndex}>
                       

                        {page.sections.map((section, sectionIndex) => {
                            if (!section) return null;
                            if (section._type === "photoDescriptionSection") {
                                return (
                                    <PhotoDescriptionSection
                                        key={sectionIndex}
                                        title={section.title}
                                        paragraph1={section.paragraph1}
                                        paragraph2={section.paragraph2}
                                        paragraph3={section.paragraph3}
                                        subtitle1={section.subtitle}
                                        buttonText={section.buttonText}
                                        buttonLink={section.buttonLink}
                                        imageSrc={section.image?.asset?.url || ''}
                                        imageAlt={section.imageAlt}
                                        reverse={section.reverseOrder ?? false}
                                    />
                                );
                            }

                            return null;
                        })}
                    </div>
                ))} */}

        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title={pageData?.card_1_section?.card_1_title || "Air Freight Services"}
            paragraph1={pageData?.card_1_section?.card_1_description || "When time is critical, our air freight solutions move your cargo reliably. We tap into a global network of carriers and charter options, ensuring capacity even during peak congestion. You'll have end-to-end visibility from pickup to final delivery - no guesswork, no last-minute rate spikes"}
            subtitle2={pageData?.card_1_section?.card_1_subtitle || "Think air freight is always expensive?"}
            paragraph3=""
            buttonText={pageData?.card_1_section?.card_1_button_text || "Book Air Freight"}
            buttonLink={pageData?.card_1_section?.card_1_button_link || ""}
            useWidget={true}
            imageSrc={pageData?.card_1_section?.card_1_image || "/services/airplaneservice (2).png"}
            reverse={false}
            subtitle1=""
            paragraph2={pageData?.card_1_section?.card_1_description_2 || ""}
          />
        </div>

        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title={pageData?.card_2_section?.card_2_title || "Sea Freight Services"}
            paragraph1={pageData?.card_2_section?.card_2_description || "Our sea freight services are engineered for businesses moving volume across borders, without compromising control. Whether you need FCL, LCL, or break-bulk, we offer consistent scheduling, locked-in rates, and transparent coordination - all backed by powerful systems, efficient tracking, and on-ground expertise."}
            subtitle2={pageData?.card_2_section?.card_2_subtitle || "Our networks provide better pricing..."}
            buttonText={pageData?.card_2_section?.card_2_button_text || "Book Sea Freight"}
            buttonLink={pageData?.card_2_section?.card_2_button_link || ""}
            imageSrc={pageData?.card_2_section?.card_2_image || ""}
            reverse={true}
            paragraph2={pageData?.card_2_section?.card_2_description_2 || "What matters is strength at destination. Nexus Logix partners with leading global agents who deliver superior pricing, consistent transit times, and hands-on shipment tracking, without passing on inflated overheads - and that's a cost benefit for you."}
            paragraph3=""
            subtitle1=""
            useWidget={true}
          />
        </div>

        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title={pageData?.card_3_section?.card_3_title || "Sea-Air Combination"}
            paragraph1={pageData?.card_3_section?.card_3_description_1 || "For shipments that can't justify full air freight costs but can't afford full sea timelines, our sea-air hybrid options provide a strategic alternative. We ship to a transhipment hub via sea, then fly the cargo to its final destination, slashing lead times but without high air freight premiums."}
            subtitle1={pageData?.card_3_section?.card_3_subtitle_1 || "Faster than sea, cheaper than air."}
            subtitle2={pageData?.card_3_section?.card_3_subtitle_2 || "You don't have to choose between slow and expensive..."}
            paragraph2={pageData?.card_3_section?.card_3_description_2 || "You can choose efficient instead. With smart planning, our sea-air options give you the best of both worlds; cost savings and time efficiency - all tailored to your specific delivery window."}
            buttonText={pageData?.card_3_section?.card_3_button_text || "Explore Sea-Air Options"}
            buttonLink={pageData?.card_3_section?.card_3_button_link || ""}
            imageSrc={pageData?.card_3_section?.card_3_image || ""}
            reverse={false}
            paragraph3=""
            useWidget={true}
          />
        </div>
      </div>

      <AnimatedSection direction="up" delay={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCardRow />
        </div>
      </AnimatedSection>

      <div
        className="relative h-64 sm:h-80 lg:h-96 lg:-mt-20 overflow-hidden"
        style={{ marginTop: "100px" }}
      >
        <div className="absolute inset-0">
          {pageData?.bottom_banner?.image && (
          <Image
            src={pageData.bottom_banner.image || "/sea-bottom-banner (2).svg"}
            alt={pageData.bottom_banner.imageAlt || "Airport"}
            width={1000}
            height={400}
            className="w-full h-full object-cover"
          />
          )}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight">
              {/* Australian Expertise,
              <br />
              Global Strength */}
               {pageData.bottom_banner?.banner_title || "Australian Expertise,"}
            </h2>

            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
              {/* Australian Expertise,
              <br />
              Global Strength */}
               {pageData.bottom_banner?.banner_title_2 || "Global Strength"}
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <Link href="/whyNexus">
              <button className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
               {pageData.bottom_banner?.button_text || "Why Nexus"}
              </button>
            </Link>
          </AnimatedSection>
        </div>

        {/*<div*/}
        {/*    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white text-sm sm:text-base lg:text-lg font-light">*/}
        {/*    Sydney Airport*/}
        {/*</div>*/}
      </div>
      <Quote />

      <AnimatedSection direction="up" delay={0.2}>
        <div className="py-6 lg:py-12">
          <LinkedinSection />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AirAndSeaFreight;



export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getAirAndFreightServiceData();

    const seoData = pageData?.seo;
    const defaultTitle = "Air & Sea Freight Services - Nexus Logix";
    const defaultDescription = "Discover reliable, cost-effective air and sea freight solutions with Nexus Logix. We deliver precision logistics, global reach, and personal attention for your cargo needs.";
    const defaultKeywords = ["air freight", "sea freight", "logistics", "shipping", "freight forwarding", "Nexus Logix"];
    const defaultOgImage = "/hero-images/air&sea.svg";
    const defaultCanonicalUrl = "https://nexuslogix.com.au/air-and-sea-freight";

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