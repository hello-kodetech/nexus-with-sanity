// "use client";
// import Image from "next/image";
// import LinkedinSection from "@/Components/LinkedinSection";
// import Quote from "@/Components/Quote";
// import React from "react";
// import Link from "next/link";
// import Nav from "@/Components/Nav";
// import Link from "next/link";
// import HeroSection from "@/Components/HeroSection";
import AnimatedSection from "@/Components/AnimatedSection";



import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import Quote from "@/Components/Quote";
import React from "react"; // Import useEffect and useState
import Nav from "@/Components/Nav";
import Link from "next/link";
import HeroSection from "@/Components/HeroSection";

import { getLeadershipData } from "@/sanity/lib/api";
import { Metadata } from "next";
import { urlFor } from "../../../client";




interface TeamMemberSanity {
  person_name?: string;
  person_designation?: string;
  person_photo?: string;
  person_background_image?: string;
  imageAlt?: string;
  link_text?: string;
  link?: string;
  description?: string;
  _key?: string; // Added for unique key in array mapping
}

// interface LeadershipData {
//   hero_section?: {
//     heroTitle?: string;
//     heroImage?: string;
//   };
//   Page_subtitle?: string;
//   team_members?: TeamMemberSanity[];
//   seo?: {
//     page?: string;
//     title?: string;
//     description?: string;
//     keywords?: string[];
//     openGraph?: {
//       ogTitle?: string;
//       ogDescription?: string;
//       ogImage?: string;
//     };
//     canonicalUrl?: string;
//   };
// }

const LeadershipPage = async () => {

  const pageData= await getLeadershipData();

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No leadership content available.
      </div>
    );
  }
  // const teamMembersArray: TeamMemberSanity[] = [
  //   pageData.terms_member_1,
  //   pageData.terms_member_2,
  //   pageData.terms_member_3,
  //   pageData.terms_member_4,
  //   pageData.terms_member_5,
  //   pageData.terms_member_6,
  //   pageData.terms_member_7,
  //   pageData.terms_member_8,
  //   pageData.terms_member_9,
  // ].filter(Boolean) as TeamMemberSanity[];
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

    const teamMembersArray: TeamMemberSanity[] = pageData.team_members || [];

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />

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
          title={pageData.hero_section?.heroTitle || "TEAM NEXUS"}
          desktopImage={pageData.hero_section?.heroImage || "/leadership.svg"}
          mobileImage="/hero_arrow.svg"
          altText="Leadership hero section"
        />
      </div>
      <div
        id="member-section"
        className="relative container max-w-7xl mx-auto md:-top-50 lg:-top-40 xl:-top-30 2xl:-top-70 px-4 sm:px-6 md:px-6 lg:px-8"
      >
        <div className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-4">
              <AnimatedSection direction="up" delay={0.2}>
                <div className="flex items-center space-x-4">
                  <div className="w-3 bg-[#E7E6DD] rounded-[9px] h-25 mt-1"></div>
                  <p className="text-[#0F2043] font-medium text-sm z-50 md:text-base lg:text-[24px] leading-relaxed">
                    {pageData.Page_subtitle || "Like a finely tuned F1 pit crew, our team is always on standby – ready to keep your supply chain racing ahead at peak performance."}

                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">*/}
            {/*    {teamMembers.map((member) => (*/}
            {/*        <div*/}
            {/*            key={member.id}*/}
            {/*            className="relative w-full h-80 sm:h-96 lg:h-[416px] flip-card-container"*/}
            {/*        >*/}
            {/*            <div className="flip-card-inner rounded-md shadow-lg">*/}
            {/*                <div*/}
            {/*                    className="flip-card-front bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden">*/}
            {/*                    <Image*/}
            {/*                        src={member.image}*/}
            {/*                        alt={member.name}*/}
            {/*                        layout="fill"*/}
            {/*                        objectFit="cover"*/}
            {/*                        quality={80}*/}
            {/*                        className="absolute inset-0 z-0"*/}
            {/*                    />*/}
            {/*                    <div*/}
            {/*                        className="absolute inset-0 text-start z-10 flex flex-col justify-end p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">*/}
            {/*                        <h3 className="text-white text-lg sm:text-xl font-bold mb-0.5"> /!* Adjusted from text-xl sm:text-2xl *!/*/}
            {/*                            {member.name}*/}
            {/*                        </h3>*/}
            {/*                        <p className="text-gray-300 text-xs sm:text-sm font-medium"> /!* Adjusted from text-sm sm:text-base *!/*/}
            {/*                            {member.title}*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div*/}
            {/*                    className="flip-card-back relative bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[url('/img.png')] bg-no-repeat bg-cover bg-center">*/}
            {/*                    <p className="text-[#464646] text-xs relative sm:text-xs lg:text-sm leading-tight whitespace-pre-line text-left"> /!* Adjusted from text-xs sm:text-sm lg:text-base and leading-relaxed to leading-tight *!/*/}
            {/*                        {member.description}*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <AnimatedSection direction="up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
                {teamMembersArray.map((member, index) => { // Added index for key if no unique ID from Sanity
                  return (
                    <div
                      key={index} // Consider using a unique ID from Sanity if available (e.g., member._id)
                      className="relative w-full max-w-86 mx-auto sm:max-w-full h-80 sm:h-96 lg:h-[416px] flip-card-container"
                      style={{ boxSizing: "border-box" }}
                    >
                      <div className="flip-card-inner rounded-md shadow-lg w-full h-full">
                        <div className="flip-card-front bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden w-full h-full">
                          {member.person_photo && (
                            <Image
                              src={member.person_photo}
                              alt={member.imageAlt || member.person_name || "Team Member"}
                              layout="fill"
                              objectFit="cover"
                              quality={80}
                              className="absolute inset-0 z-0"
                            />
                          )}
                          <div className="absolute inset-0 text-start z-10 flex flex-col justify-end p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            <h3 className="text-white text-lg sm:text-xl font-bold mb-0.5">
                              {member.person_name}
                            </h3>
                            <p className="text-gray-300 text-xs sm:text-sm font-medium">
                              {member.person_designation}
                            </p>
                          </div>
                        </div>

                        <div
                          className={`flip-card-back relative bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-no-repeat bg-cover bg-center w-full h-full`}
                          style={{ backgroundImage: member.person_background_image ? `url(${member.person_background_image})` : 'none' }} // Corrected to use person_background_image
                        >
                          {/* Display the main description part */}
                          {member.description && ( // Changed to member.description
                            <p className="text-[#464646] text-xs sm:text-xs lg:text-sm leading-tight text-left mb-3 whitespace-pre-line">
                              {member.description}
                            </p>
                          )}
                          {/* Display the link text if available */}
                          {member.link_text && member.link && ( // Changed to member.link_text and member.link
                            <Link href={member.link} passHref>
                              <p className="text-[#464646] text-xs sm:text-xs lg:text-sm leading-tight text-left underline mb-2 cursor-pointer">
                                {member.link_text}
                              </p>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
          <Quote />
        </div>
      </div>

      <div className="relative h-64 sm:h-80 lg:h-96 mt-4 md:-mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/leader-banner.png"
            // src="/leadership.svg"
            alt="Airport"
            width={1000}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/[0.8]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Commitment to
              <br />
              Personalised Service
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <Link href="/services">
              <button className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
                View Services
              </button>
            </Link>
          </AnimatedSection>
        </div>

        {/*<div*/}
        {/*    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white text-sm sm:text-base lg:text-lg font-light">*/}
        {/*    Sydney Airport*/}
        {/*</div>*/}
      </div>

      <AnimatedSection direction="up" delay={0.2}>
        <div className="py-6 lg:py-2">
          <LinkedinSection />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default LeadershipPage;


export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getLeadershipData();

  // Set SEO data and fallback values
  const seoData = pageData?.seo;
  const defaultTitle = "Leadership Team - Nexus Logix";
  const defaultDescription = "Meet the leadership team at Nexus Logix. Our experts are dedicated to providing personalized service and keeping your supply chain running smoothly.";
  const defaultKeywords = ["leadership team", "Nexus Logix team", "logistics experts", "supply chain management", "freight forwarding leadership", "company leadership"];
  const defaultOgImage = pageData?.hero_section?.heroImage || "/leadership.svg";
  const defaultCanonicalUrl = "https://nexuslogix.com.au/leadership";

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