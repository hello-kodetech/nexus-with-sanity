import React from "react";
import Nav from "@/Components/Nav";
import HeroSection from "@/Components/HeroSection";
import AnimatedSection from "@/Components/AnimatedSection";
import ContactFormClient from "@/Components/ContactFormClient";
import {getContactUsData} from "@/sanity/lib/api";
import {Metadata} from "next";
import {urlFor} from "../../../client";

interface ContactItem {
    icon?: string;
    title?: string;
    contact_info?: string;
}

interface SeoData {
    title?: string;
    description?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: { asset: { _ref: string } };
    canonicalUrl?: string;
}

interface HeroSectionType {
    heroTitle?: string;
    heroImage?: string;
}

interface PageData {
    hero_section?: HeroSectionType;
    contact_form_title?: string;
    contact_form_description_1?: string;
    contact_form_description_2?: string;
    contact_item_1?: ContactItem;
    contact_item_2?: ContactItem;
    contact_item_3?: ContactItem;
    x_link?: string;
    linkedin_link?: string;
    facebook_link?: string;
    instagram_link?: string;
    map_link?: string;
    seo?: SeoData;
}

export default async function ContactPage() {

    const pageData: PageData | null = await getContactUsData();

    if (!pageData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">No content available for contact page.</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block">
                <Nav/>
                <HeroSection
                    title={pageData?.hero_section?.heroTitle || "DON'T HESITATE TO CONTACT US"}
                    desktopImage={pageData?.hero_section?.heroImage || "/contactUs_hero_banner.svg"}
                    mobileImage="/hero_arrow.svg"
                    altText="Contact us hero section"
                />
            </div>

            <ContactFormClient pageData={pageData}/>

            <AnimatedSection direction="up" delay={0.2}>
                <div className="py-12 w-full h-96 lg:h-[500px] overflow-hidden shadow-lg">
                    <iframe
                        src={pageData.map_link || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.060111295403!2d153.0303199!3d-27.4673879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915b171910d4d5%3A0x85ac0d5597492f4!2sLevel%2038%2F71%20Eagle%20St%2C%20Brisbane%20City%20QLD%204000%2C%20Australia!5e0!3m2!1sen!2slk!4v1752561333604!5m2!1sen!2slk"}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full border-0"
                    ></iframe>
                </div>
            </AnimatedSection>
        </div>
    );
}


export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getContactUsData();

    const seoData = pageData?.seo;
    const defaultTitle = "Contact Us - Nexus Logix";
    const defaultDescription = "Get in touch with Nexus Logix for all your logistics needs. Our team is ready to assist you with air and sea freight services.";
    const defaultKeywords = ["contact", "customer support", "logistics", "freight forwarding", "shipping"];
    const defaultOgImage = "/contact-us.png";
    const defaultCanonicalUrl = "https://nexuslogix.com.au/contact-us";

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
