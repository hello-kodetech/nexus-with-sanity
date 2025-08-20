// "use client";
// import React from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";
// import Nav from "@/Components/Nav";
// import Image from "next/image";
// import LinkedinSection from "@/Components/LinkedinSection";
// import Quote from "@/Components/Quote";
// import ServiceCardRow from "@/Components/ServiceCardRow";
// import PhotoDescriptionSection from "@/Components/PhotoDescriptionSection";
// import Link from "next/link";
// import Accordian from "@/Components/Accordian";
// import HeroSection from "@/Components/HeroSection";
import AnimatedSection from "@/Components/AnimatedSection";



import React from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";
import Nav from "@/Components/Nav";
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import Quote from "@/Components/Quote";
import ServiceCardRow from "@/Components/ServiceCardRow";
import PhotoDescriptionSection from "@/Components/PhotoDescriptionSection";
import Link from "next/link";
import Accordian from "@/Components/Accordian";
import HeroSection from "@/Components/HeroSection";
import { getCustomsData } from "@/sanity/lib/api";
import { urlFor } from "../../../client";
import { Metadata } from "next";
import { CustomsData } from "@/sanity/types";





interface AccordianItem {
  accordian_title?: string;
  accordian_description?: string;
}


const CustomsPage = async () => {
  const pageData: CustomsData | null = await getCustomsData();
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
    pageData.accordian_6,
    pageData.accordian_7,
    pageData.accordian_8,
  ].filter(Boolean) as AccordianItem[];
  // const [isExpanded, setIsExpanded] = useState(false);
  // const [activeService, setActiveService] = useState<string | null>(null);

  // const services = [
  //   "Technology for Smarter Decisions",
  //   "Pre-Entry/Exit Strategy & Planning",
  //   "Entry/Exit Processing & Documentation",
  //   "HS Classification & Duty Optimization",
  //   "Post-Entry/Exit Compliance & Optimization",
  //   "Duty Drawbacks & Rebates",
  //   "Australian Trusted Trader Support",
  // ];

  // const serviceContents = {
  //   "Technology for Smarter Decisions":
  //     "Our advanced supply chain visibility tools, digital documentation, and emissions transparency empower our customers to make informed decisions.",
  //   "Pre-Entry/Exit Strategy & Planning":
  //     "We work with you to develop tailored import/export plans that maximise duty savings, accurately identify tariff classifications, and proactively address potential clearance issues before they arise.",
  //   "Entry/Exit Processing & Documentation":
  //     "Our team handles the complete lodgement of import and export declarations, electronic documentation, and cargo release coordination, removing the hassle for you.",
  //   "HS Classification & Duty Optimization":
  //     "By applying precise product classification and comprehensive tariff analysis, we minimise your duties and reduce the risk of penalties.",
  //   "Post-Entry/Exit Compliance & Optimization":
  //     "We review and amend declarations as needed, manage refund claims, and ensure your operations remain fully compliant amid changing regulations.",
  //   "Duty Drawbacks & Rebates":
  //     "Recover duties paid on exported goods efficiently through our streamlined drawback claims process, improving your cash flow.",
  //   "Australian Trusted Trader Support":
  //     "Receive expert assistance throughout the accreditation process, compliance checks, and audit preparation, helping your business benefit from faster clearance and reduced border inspections.",
  // };

  // const toggleDropdown = (service: string) => {
  //   setActiveService((prev) => (prev === service ? null : service));
  // };

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />
        <HeroSection
          title={pageData.hero_section?.heroTitle || "Customs Clearance & Compliance"}
          desktopImage={pageData.hero_section?.heroImage || "/customs_hero_banner.svg"}
          mobileImage="/hero_arrow.svg"
          altText="Customs Clearance hero section"
        />
      </div>

      {/* Customs and Border Processing Section */}
      <section className="py-4 bg-[#F6F6F6] poppins relative lg:-mt-28 md:-mt-28 service-inner-main-div">
        <div className="max-w-7xl mx-auto px-10 lg:px-14">
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#162F65] mb-6 lg:mb-8 max-w-md">
              {pageData.accordian_section_title || "Customs and Border Processing"}
            </h2>
          </AnimatedSection>

          {/* <Accordian
            image="/customs_img1.svg"
            description="Navigating customs regulations and border processes in Australia and abroad can be complex, but it doesn't have to slow your supply chain. Our customs specialists manage every aspect - from HS classification and duty optimisation to documentation and compliance - ensuring your goods move across borders quickly, smoothly, and cost-effectively."
            classname="max-h-[920px]"
            accordionItems={[
              {
                title: "Customs and Border Processing",
                content:
                  "Planning and being ready to engage with customs and border authorities is essential for fast clearance and minimizing delays. Our teams begin their work long before your goods arrive at customs to ensure the best possible outcomes.",
              },
              {
                title: "Technology for Smarter Decisions",
                content:
                  "Our advanced supply chain visibility tools, digital documentation, and emissions transparency empower our customers to make informed decisions.",
              },
              {
                title: "Pre-Entry/Exit Strategy & Planning",
                content:
                  "We work with you to develop tailored import/export plans that maximise duty savings, accurately identify tariff classifications, and proactively address potential clearance issues before they arise.",
              },
              {
                title: "Entry/Exit Processing & Documentation",
                content:
                  "Our team handles the complete lodgement of import and export declarations, electronic documentation, and cargo release coordination, removing the hassle for you.",
              },
              {
                title: "HS Classification & Duty Optimization",
                content:
                  "By applying precise product classification and comprehensive tariff analysis, we minimise your duties and reduce the risk of penalties.",
              },
              {
                title: "Post-Entry/Exit Compliance & Optimization",
                content:
                  "We review and amend declarations as needed, manage refund claims, and ensure your operations remain fully compliant amid changing regulations.",
              },
              {
                title: "Duty Drawbacks & Rebates",
                content:
                  "Recover duties paid on exported goods efficiently through our streamlined drawback claims process, improving your cash flow.",
              },
              {
                title: "Australian Trusted Trader Support",
                content:
                  "Receive expert assistance throughout the accreditation process, compliance checks, and audit preparation, helping your business benefit from faster clearance and reduced border inspections.",
              },
            ]}
          /> */}


          <Accordian
            image={pageData.accordian_section_image || "/customs_img1.svg"}
            description={
              pageData.accordian_section_description ||
              "Navigating customs regulations and border processes in Australia and abroad can be complex, but it doesn't have to slow your supply chain. Our customs specialists manage every aspect - from HS classification and duty optimisation to documentation and compliance - ensuring your goods move across borders quickly, smoothly, and cost-effectively."
            }
            classname="max-h-[940px]"
            accordionItems={accordionItemsArray}
          />

          {/* Bottom Section - Tight to Image */}
          <div className="mt-6 px-1 lg:px-0">
            <AnimatedSection direction="up" delay={0.2}>
              <h3 className="font-poppins font-medium text-[20px] md:text-[24px] text-[#162F65] mb-4">
               {pageData.accordian_section_subtitle || "Customs doesn't have to be a block..."}
              </h3>
              <p className="font-poppins font-medium text-[14px] md:text-[16px] lg:text-[18px] text-[#676767] leading-relaxed mb-6 text-justify max-w-4xl">
                 {pageData.accordian_section_bottom_description || "If you and your goods arrive with a good plan and in compliance with local regulations. We make that happen by simplifying compliance and reducing inspection delays."}
              </p>
              <Link href="/contactUs">
                <button className="bg-[#162F65] text-white rounded-[10px] px-[25.86px] py-[7.89px] font-poppins text-[14px] hover:bg-blue-950 hover:scale-105 transition-all duration-300">
                 {pageData.accordian_section_button_text || "Simplify Customs with Us"}
                </button>
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style> */}
      </section>

      {/* Supply Chain Consultancy Section */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-10 lg:px-14">
          <PhotoDescriptionSection
            title={pageData.card_section?.card_title || "Supply Chain Consultancy & Audits"}
            paragraph1={pageData.card_section?.card_description || "Our comprehensive audits uncover inefficiencies across your entire supply chain from procurement to last-mile delivery. We provide actionable insights and customised roadmaps that cut costs and improve service quality. We also guide you through the process of becoming an Australian Trusted Trader (ATT), unlocking benefits such as reduced red tape at the border, priority goods processing, duty deferral options, and a dedicated Australian Border Force account manager."}
            subtitle2={pageData.card_section?.card_subtitle || "Audits are more than box-ticking exercises..."}
            subtitle1=""
            paragraph2={pageData.card_section?.card_description_2 || "We turn audit insights into immediate ROI, delivering cost savings and enhanced performance from day one."}
            paragraph3=""
            buttonText={pageData.card_section?.card_button_text || "Get Started with a Supply Chain Audit"}
            buttonLink={pageData.card_section?.card_button_link || "/contactUs"}
            imageSrc={pageData.card_section?.card_image || "/customs_img2.png"}
            reverse={true}
          />
        </div>
      </section>

      <AnimatedSection direction="up" delay={0.2}>
        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCardRow />
        </div>
      </AnimatedSection>
      <Quote />

      {/* CTA Section */}
      <section className="relative py-4 lg:py-2">
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={pageData.bottom_banner?.image || "/customs_banner.png"}
              alt={pageData.bottom_banner?.imageAlt || "Airport"}
              width={1000}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.6]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight">
                {pageData.bottom_banner?.banner_title || "Australian Expertise,"}
              </h2>

              <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
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
      </section>

      {/* LinkedIn Section */}
      <AnimatedSection direction="up" delay={0.2}>
        <div className="py-4">
          <LinkedinSection />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CustomsPage;



export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getCustomsData();

  // Set SEO data and fallback values
  const seoData = pageData?.seo;
  const defaultTitle = "Customs Clearance & Compliance - Nexus Logix";
  const defaultDescription = "Simplify international trade with Nexus Logix. Our customs specialists handle all aspects of customs clearance, border processing, and compliance for a seamless supply chain.";
  const defaultKeywords = ["customs clearance", "border processing", "australian trusted trader", "supply chain audit", "import duties", "freight forwarding australia"];
  const defaultOgImage = "/customs_hero_banner.svg"; // A relevant image for the page
  const defaultCanonicalUrl = "https://nexuslogix.com.au/customs"; // The canonical URL for this page


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