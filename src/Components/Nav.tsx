// import Link from "next/link";
// import Image from "next/image";
// import React, {useState} from "react";
//
// const Nav = () => {
//
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//
//     return (
//         <header
//             className="relative lg:bg-transparent z-50 poppins">
//             <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between py-3 sm:py-4 lg:py-6 relative">
//                     <div className="lg:hidden flex-shrink-0 order-1">
//                         <button
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             className="text-[#282828] hover:text-[#082049] focus:outline-none focus:ring-2 focus:ring-[#e6b333] rounded-md p-2 transition-all duration-200"
//                             aria-expanded={isMenuOpen}
//                             aria-controls="mobile-menu"
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {isMenuOpen ? (
//                                 <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
//                                      viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                           d="M6 18L18 6M6 6l12 12"/>
//                                 </svg>
//                             ) : (
//                                 <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
//                                      viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                           d="M4 6h16M4 12h16M4 18h16"/>
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//
//                     <div
//                         className="flex-shrink-0 order-2 lg:order-none absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">
//                         <Link href="/">
//                             <Image
//                                 src="/Logo-Nexus.png"
//                                 alt="Nexus Logo"
//                                 width={120}
//                                 height={120}
//                                 className="h-12 sm:h-16 lg:h-25 w-auto"
//                             />
//                         </Link>
//                     </div>
//
//                     <div className="lg:hidden flex-shrink-0 order-3">
//                         <Link href="#">
//                             <button
//                                 className="bg-[#e6b333] text-[#282828] hover:bg-[#e6b333]/90 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg font-normal transition-colors"
//                             >
//                                 Track & Trace
//                             </button>
//                         </Link>
//                     </div>
//
//                     <nav
//                         className="hidden lg:flex items-center space-x-6 lg:space-x-8 xl:space-x-12 order-2">
//                         <Link
//                             href="#"
//                             className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//                         >
//                             Why Nexus
//                         </Link>
//                         <Link
//                             href="/leadership"
//                             className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//                         >
//                             Leadership Team
//                         </Link>
//                         <Link
//                             href="#"
//                             className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//                         >
//                             Services
//                         </Link>
//                         <Link
//                             href="#"
//                             className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//                         >
//                             Insights
//                         </Link>
//                         <Link href="#"
//                               className="hidden xl:block">
//                             <button
//                                 className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors"
//                             >
//                                 Track and Trace
//                             </button>
//                         </Link>
//                     </nav>
//
//                     <div
//                         className="hidden lg:flex items-center space-x-3 lg:space-x-4 order-3">
//                         <button
//                             className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors"
//                         >
//                             Contact Us
//                         </button>
//                     </div>
//                 </div>
//
//                 <div
//                     id="mobile-menu"
//                     className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}
//                 >
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
//                         <Link
//                             href="#"
//                             className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Why Nexus
//                         </Link>
//                         <Link
//                             href="/leadership"
//                             className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Leadership Team
//                         </Link>
//                         <Link
//                             href="#"
//                             className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Services
//                         </Link>
//                         <Link
//                             href="#"
//                             className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Insights
//                         </Link>
//                         <Link href="#" className="w-full text-center mt-4">
//                             <button
//                                 className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] px-6 py-2 text-sm rounded-lg font-normal w-full transition-colors"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 Contact Us
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </header>
//
//         // <header
//         //     className="relative lg:bg-transparent z-50 poppins">
//         //     <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
//         //         <div className="flex items-center justify-between py-3 sm:py-4 lg:py-6 relative lg:justify-center"> {/* Added lg:justify-center */}
//         //
//         //             {/* Mobile: Hamburger, Logo, Mobile T&T Button */}
//         //             <div className="lg:hidden flex-shrink-0 order-1">
//         //                 <button
//         //                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//         //                     className="text-[#282828] hover:text-[#082049] focus:outline-none focus:ring-2 focus:ring-[#e6b333] rounded-md p-2 transition-all duration-200"
//         //                     aria-expanded={isMenuOpen}
//         //                     aria-controls="mobile-menu"
//         //                 >
//         //                     <span className="sr-only">Open main menu</span>
//         //                     {isMenuOpen ? (
//         //                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
//         //                              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//         //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//         //                                   d="M6 18L18 6M6 6l12 12"/>
//         //                         </svg>
//         //                     ) : (
//         //                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
//         //                              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//         //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//         //                                   d="M4 6h16M4 12h16M4 18h16"/>
//         //                         </svg>
//         //                     )}
//         //                 </button>
//         //             </div>
//         //
//         //             <div
//         //                 className="flex-shrink-0 order-2 lg:order-none absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:transform-none lg:mx-auto"> {/* Added lg:mx-auto for centering in desktop flex */}
//         //                 <Link href="/">
//         //                     <Image
//         //                         src="/Logo-Nexus.png"
//         //                         alt="Nexus Logo"
//         //                         width={120}
//         //                         height={120}
//         //                         className="h-12 sm:h-16 lg:h-25 w-auto"
//         //                     />
//         //                 </Link>
//         //             </div>
//         //
//         //             <div className="lg:hidden flex-shrink-0 order-3">
//         //                 <Link href="#">
//         //                     <button
//         //                         className="bg-[#e6b333] text-[#282828] hover:bg-[#e6b333]/90 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg font-normal transition-colors"
//         //                     >
//         //                         Track & Trace
//         //                     </button>
//         //                 </Link>
//         //             </div>
//         //
//         //             {/* Desktop Navigation Group - Reorder for flex centering */}
//         //             <div className="hidden lg:flex items-center justify-between flex-grow"> {/* Use flex-grow to take available space */}
//         //                 {/* Left side links (before logo) */}
//         //                 <nav className="flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
//         //                     <Link
//         //                         href="#"
//         //                         className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//         //                     >
//         //                         Why Nexus
//         //                     </Link>
//         //                     <Link
//         //                         href="/leadership"
//         //                         className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//         //                     >
//         //                         Leadership Team
//         //                     </Link>
//         //                 </nav>
//         //
//         //                 {/* Right side links (after logo) and desktop buttons */}
//         //                 <div className="flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
//         //                     <Link
//         //                         href="#"
//         //                         className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//         //                     >
//         //                         Services
//         //                     </Link>
//         //                     <Link
//         //                         href="#"
//         //                         className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//         //                     >
//         //                         Insights
//         //                     </Link>
//         //                     {/* The Track and Trace button for desktop */}
//         //                     <Link href="#">
//         //                         <button
//         //                             className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors"
//         //                         >
//         //                             Track and Trace
//         //                         </button>
//         //                     </Link>
//         //                     {/* The Contact Us button for desktop */}
//         //                     <button
//         //                         className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors"
//         //                     >
//         //                         Contact Us
//         //                     </button>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //
//         //         {/* Mobile menu remains the same */}
//         //         <div
//         //             id="mobile-menu"
//         //             className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}
//         //         >
//         //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
//         //                 <Link
//         //                     href="#"
//         //                     className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//         //                     onClick={() => setIsMenuOpen(false)}
//         //                 >
//         //                     Why Nexus
//         //                 </Link>
//         //                 <Link
//         //                     href="/leadership"
//         //                     className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//         //                     onClick={() => setIsMenuOpen(false)}
//         //                 >
//         //                     Leadership Team
//         //                 </Link>
//         //                 <Link
//         //                     href="#"
//         //                     className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//         //                     onClick={() => setIsMenuOpen(false)}
//         //                 >
//         //                     Services
//         //                 </Link>
//         //                 <Link
//         //                     href="#"
//         //                     className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//         //                     onClick={() => setIsMenuOpen(false)}
//         //                 >
//         //                     Insights
//         //                 </Link>
//         //                 <Link href="#" className="w-full text-center mt-4">
//         //                     <button
//         //                         className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] px-6 py-2 text-sm rounded-lg font-normal w-full transition-colors"
//         //                         onClick={() => setIsMenuOpen(false)}
//         //                     >
//         //                         Contact Us
//         //                     </button>
//         //                 </Link>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </header>
//     )
// }
//
// export default Nav;

"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavbarData, NavItemType } from "@/sanity/types";
import { getHeaderData } from "@/sanity/lib/api";

const FALLBACK_LOGO = "/Logo-Nexus.png";
const FALLBACK_LOGO_ALT = "Nexus Logo";
const FALLBACK_LOGO_LINK = "/";

const FALLBACK_NAV_ITEMS: NavItemType[] = [
  {
    nav_item_name: "Why Nexus",
    nav_item_link: "/whyNexus",
  },
  {
    nav_item_name: "Leadership Team",
    nav_item_link: "/leadership",
  },
  {
    nav_item_name: "Services",
    nav_item_link: "/services",
    sub_items: [
      { name: "Air & Sea Freight", link: "/air-and-sea-freight" },
      {
        name: "Customs Clearance & Compliance",
        link: "/customs",
      },
      {
        name: "3PL, Warehousing & Special Projects",
        link: "/Integrated-logistics",
      },
      { name: "Road & Rail Transport", link: "/road-and-rail" },
    ],
  },
  {
    nav_item_name: "Insights",
    nav_item_link: "/insights",
  },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [openMobileDropdownIndex, setOpenMobileDropdownIndex] = useState<number | null>(null);
  const [headerData, setHeaderData] = useState<NavbarData | null>(null);

  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchHeaderData = async () => {
      try {
        const res = await getHeaderData();
        if (isMounted) {
          setHeaderData(res);
        }
      } catch (err) {
        console.error("Error fetching header data from Sanity:", err);
      }
    };
    fetchHeaderData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setOpenDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logoUrl = headerData?.logoUrl || FALLBACK_LOGO;
  const logoAlt = headerData?.navbar_logo_alt || FALLBACK_LOGO_ALT;
  const logoLink = headerData?.navbar_logo_link || FALLBACK_LOGO_LINK;
  const navItems = headerData?.nav_items && headerData.nav_items.length > 0
    ? headerData.nav_items
    : FALLBACK_NAV_ITEMS;

  return (
    <header className="relative z-50 poppins">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-full [@media(min-width:1900px)]:max-w-[1216px] [@media(min-width:1200px)]:max-w-[1200px]">
        <div className="flex items-center justify-between py-3 sm:py-4 lg:py-2 relative">
          {/* Mobile Menu Button - Visible on small screens */}
          <div className="lg:hidden flex-shrink-0 order-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#282828] hover:text-[#082049] focus:outline-none focus:ring-2 focus:ring-[#e6b333] rounded-md p-2 transition-all duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 order-2 flex justify-center lg:order-none lg:flex lg:justify-center">
            <Link href={logoLink}>
              <Image
                src={logoUrl}
                alt={logoAlt}
                width={180}
                height={180}
                className="h-20 sm:h-24 lg:h-28 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile Track & Trace Button - Visible on small screens */}
          <div className="lg:hidden flex-shrink-0 order-3">
            <Link href="/track-and-trace">
              <button className="bg-[#e6b333] text-[#282828] hover:bg-[#e6b333]/90 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg font-normal transition-colors">
                Track & Trace
              </button>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on small screens */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center space-x-6 lg:space-x-8 xl:space-x-12 order-2 text-sm md:text-base xl:text-lg"
          >
            {navItems.map((item, idx) => {
              const isDropdown = item.sub_items && item.sub_items.length > 0;
              const isLinkActive =
                pathname === item.nav_item_link ||
                (isDropdown && pathname.startsWith(item.nav_item_link || ""));

              if (isDropdown) {
                return (
                  <div key={idx} className="relative flex items-center gap-1">
                    <Link
                      href={item.nav_item_link || "#"}
                      className={`font-semibold ${
                        isLinkActive
                          ? "text-[#162F65]"
                          : "text-[#282828] hover:text-[#162F65]"
                      }`}
                    >
                      {item.nav_item_name}
                    </Link>

                    {/* Arrow toggles dropdown */}
                    <button
                      onClick={() =>
                        setOpenDropdownIndex(openDropdownIndex === idx ? null : idx)
                      }
                      className="focus:outline-none"
                      aria-label={`Toggle ${item.nav_item_name} Dropdown`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdownIndex === idx ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown menu */}
                    {openDropdownIndex === idx && (
                      <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-50 w-64">
                        <ul className="py-2">
                          {item.sub_items?.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                href={subItem.link || "#"}
                                className="block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100 hover:text-[#162F65]"
                                onClick={() => setOpenDropdownIndex(null)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.nav_item_link || "#"}
                  className={`font-semibold ${
                    isLinkActive
                      ? "text-[#162F65]"
                      : "text-[#282828] hover:text-[#162F65]"
                  }`}
                >
                  {item.nav_item_name}
                </Link>
              );
            })}

            <Link href="/track-and-trace">
              <button className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-6 py-2 rounded-lg text-sm transition-colors">
                Track and Trace
              </button>
            </Link>
          </nav>

          {/* Desktop Contact Us Button - Hidden on small screens */}
          <div className="hidden lg:flex items-center space-x-3 lg:space-x-4 order-3">
            <Link href="/contactUs">
              <button className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Content - Toggles visibility based on isMenuOpen */}
        <div
          id="mobile-menu"
          className={`${
            isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navItems.map((item, idx) => {
              const isDropdown = item.sub_items && item.sub_items.length > 0;
              const isLinkActive =
                pathname === item.nav_item_link ||
                (isDropdown && pathname.startsWith(item.nav_item_link || ""));

              if (isDropdown) {
                const isMobileDropdownOpen = openMobileDropdownIndex === idx;
                return (
                  <div key={idx} className="w-full">
                    <div className="flex justify-center items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md transition-colors">
                      <Link
                        href={item.nav_item_link || "#"}
                        className="text-base text-[#282828] hover:text-[#082049] text-center font-semibold"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.nav_item_name}
                      </Link>

                      <button
                        onClick={() =>
                          setOpenMobileDropdownIndex(isMobileDropdownOpen ? null : idx)
                        }
                        className="focus:outline-none"
                        aria-label={`Toggle ${item.nav_item_name} Dropdown`}
                      >
                        <svg
                          className={`w-4 h-4 transform transition-transform ${
                            isMobileDropdownOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>

                    {isMobileDropdownOpen && (
                      <div className="pl-6 mt-1 space-y-1 bg-white rounded-md flex flex-col items-center">
                        {item.sub_items?.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.link || "#"}
                            className="block px-3 py-1 text-sm text-[#282828] hover:text-[#082049]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.nav_item_link || "#"}
                  className={`block px-3 py-2 text-base w-full text-center font-semibold ${
                    isLinkActive ? "text-[#162F65]" : "text-[#282828] hover:text-[#082049]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.nav_item_name}
                </Link>
              );
            })}

            <Link href="/contactUs" className="w-full text-center mt-4">
              <button
                className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] px-6 py-2 text-sm rounded-lg w-full transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
