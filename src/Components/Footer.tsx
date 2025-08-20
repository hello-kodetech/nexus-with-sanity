import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getFooterData } from "@/sanity/lib/api";

const Footer = async () => {

    const footerData = await getFooterData();

    if (!footerData) {
        return null;
    }

    return (
        <footer className="bg-[#222222] text-white relative poppins overflow-hidden">
            <div className="relative z-10">
                {/* Background pattern */}
                <div
                    className="absolute bg-[url('/x.png')] bg-no-repeat -top-5 sm:-top-6 lg:-top-25 bg-contain inset-0 w-full sm:w-3/5 lg:w-[550px] h-[800px] opacity-5 pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-8">
                    {/* Top section */}
                    <div
                        className="flex flex-col items-center lg:flex-row lg:justify-between mt-6 mb-6 sm:mb-8 lg:mb-10 relative z-10">
                        <div className="mb-6 sm:mb-8 lg:mb-0 lg:mr-12 text-center lg:text-left">
                            <p className="text-sm sm:text-base lg:text-lg font-medium max-w-2xl sm:max-w-3xl">
                                {/*Tell us your requirements and one of our experts will be in*/}
                                {/*touch to learn more about your business and draw up a solution*/}
                                {/*that addresses your unique needs.*/}
                                {footerData.footer_description || "Tell us your requirement and one of our experts will be in touch to learn more about your business and draw up a solution that addresses your unique needs"}

                            </p>
                        </div>

                        <div>
                            <Link href={footerData.footer_button_link || "/contact-us"} passHref>
                                <button
                                    className="bg-white text-[#162F65] hover:bg-black hover:border hover:border-white hover:text-white transition duration-300 px-6 py-2 sm:px-15 sm:py-3 text-base sm:text-lg lg:text-xl rounded-lg font-medium">
                                    {footerData.footer_button_text || "Talk to Us"}
                                </button>
                            </Link>
                        </div>
                    </div>

                    <hr className="border-white mb-8 sm:mb-10 lg:mb-12" />

                    {/* Content grid */}
                    <div
                        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-40 mb-2 sm:mb-4 lg:mb-6">
                        {/* Logo and description */}
                        <div className="lg:col-span-1 text-center sm:text-left">
                            <Image
                                src="/footer_logo.png"
                                alt="Nexus Logo"
                                width={200}
                                height={200}
                                className="h-16 sm:h-20 lg:h-24 w-auto mx-auto sm:mx-0 mb-4 sm:mb-6"
                            />
                            <p className="text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                                {/*A proudly Australian logistics pit crew with a global reach,*/}
                                {/*delivering agile, reliable freight solutions that keep your*/}
                                {/*supply chain moving.*/}
                                {footerData.footer_sub_description || "A proudly Australian logistics pit crew with a global reach, delivering agile, reliable freight solutions that keep your supply chain moving."}
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="text-base sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
                                {footerData.footer_column_1_title || "Links"}
                            </h4>
                            <div className="space-y-2 text-center sm:text-left">
                                {/*<Link href="/" className="block text-white hover:text-[#bbbbbb] text-xs sm:text-sm">Home</Link>*/}
                                {/*<Link href="/whyNexus" className="block text-white hover:text-[#bbbbbb] text-xs sm:text-sm">Why Nexus</Link>*/}
                                {/*<Link href="/leadership" className="block text-white hover:text-[#bbbbbb] text-xs sm:text-sm">Leadership Team</Link>*/}
                                {/*/!* <Link href="/insights" className="block text-white hover:text-[#bbbbbb] text-xs sm:text-sm">Insights</Link> *!/*/}
                                {/*<Link href="/contactUs" className="block text-white hover:text-[#bbbbbb] text-xs sm:text-sm">Contact Us</Link>*/}
                                {/*<Link href="/track-and-trace" className="block text-white hover:text-[#bbbbbb] text-xs sm:text-sm">Track and Trace</Link>*/}
                                {footerData.footer_links_column_1?.map((item, index) => (
                                    <Link key={index} href={item.nav_item_link || '#'}
                                        className="block text-white hover:text-[#bbbbbb] text-xs sm:text-sm">{item.nav_item_name || 'Link Name'}</Link>
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-base sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
                                {footerData.footer_column_2_title || " Services"}
                            </h4>
                            <div className="space-y-2 text-center sm:text-left">
                                {/*{footerData.footer_links_column_2?.map((item, index) => (Air & Sea Freight</Link>*/}
                                {/*<Link href="/customs" className="block text-white hover:text-[#bbbbbb] text-xs sm:text-sm">Customs Clearance & Compliance</Link>*/}
                                {/*<Link href="/Integrated-logistics" className="block text-white hover:text-[#bbbbbb] text-xs sm:text-sm">3PL, Warehousing & Special Projects</Link>*/}
                                {/*<Link href="/road-and-rail" className="block text-white hover:text-[#bbbbbb] text-xs sm:text-sm">Road & Rail Transport</Link>*/}
                                {footerData.footer_links_column_2?.map((item, index) => (
                                    <Link key={index} href={item.nav_item_link || '#'}
                                        className="block text-white hover:text-[#bbbbbb] text-xs sm:text-sm">{item.nav_item_name || 'Link Name'}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div
                        className="flex flex-col sm:flex-row items-center justify-between text-[#162F65] text-center sm:text-left">
                        <span className="text-sm sm:text-base lg:text-lg">
                            {footerData.copyrightText || "© nexuslogix @2025. All Rights Reserved."}
                        </span>
                        <span className="text-sm sm:text-base lg:text-lg">
                            {/* <Link href="/terms-and-conditions">Terms and Conditions</Link> |{" "}
                            <Link href="/privacy-policy">Privacy Policy</Link> */}
                            {footerData.bottomLinks?.map((link, index) => (
                                <React.Fragment key={index}>
                                    <Link href={link.href}>{link.label}</Link>
                                    {footerData.bottomLinks && index < footerData.bottomLinks.length - 1 && " | "}
                                </React.Fragment>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
