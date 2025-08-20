'use client'; // This directive is crucial for using client-side hooks like usePathname

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // This hook requires a Client Component

// Define the interface for a single service card item
interface ServiceCardItem {
    icon?: string;
    title?: string;
    link?: string;
    alt: string; // Ensure alt text is always provided
}

// Define the props for the ServiceCardRowClient component
interface ServiceCardRowClientProps {
    sectionTitle?: string;
    card1Icon?: string;
    card1Title?: string;
    card1Link?: string;
    card2Icon?: string;
    card2Title?: string;
    card2Link?: string;
    card3Icon?: string;
    card3Title?: string;
    card3Link?: string;
    card4Icon?: string;
    card4Title?: string;
    card4Link?: string;
}

const ServiceCardRowClient: React.FC<ServiceCardRowClientProps> = ({
    sectionTitle,
    card1Icon,
    card1Title,
    card1Link,
    card2Icon,
    card2Title,
    card2Link,
    card3Icon,
    card3Title,
    card3Link,
    card4Icon,
    card4Title,
    card4Link,
}) => {
    const pathname = usePathname();

    // Helper function to determine if a link is active
    const isActive = (path: string) => pathname === path;

    // Construct the array of cards using the props
    const cards: ServiceCardItem[] = [
        {
            icon: card1Icon || "/icons/plane-black.svg",
            title: card1Title || "AIR & SEA\nFREIGHT",
            link: card1Link || "/air-and-sea-freight",
            alt: "Air & Sea Freight",
        },

        {
            icon: card4Icon || "/icons/cart.svg",
            title: card4Title || "CUSTOMS CLEARANCE\n& COMPLIANCE",
            link: card4Link || "/customs",
            alt: "Customs Clearance",
        },
        {
            icon: card3Icon || "/icons/box.svg",
            title: card3Title || "3PL, Warehousing \n& Special Projects",
            link: card3Link || "/integrated-logistics",
            alt: "3PL, Warehousing & Special Projects",
        },
        {
            icon: card2Icon || "/icons/truck.svg",
            title: card2Title || "ROAD & RAIL\nTRANSPORT",
            link: card2Link || "/road-and-rail",
            alt: "Road & Rail",
        },
        
        
    ];

    return (
        <div className="bg-[#F6F6F6] py-6 px-4">
           <h3 className="font-poppins font-medium text-[22px] md:text-[25px] text-[#162F65] mb-8 leading-[26px] md:leading-[36px]">
                {sectionTitle || "These services may also be of interest to you."}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {cards.map((card, idx) => (
                    <Link href={card.link || '#'} key={idx}> {/* Added fallback for link */}
                        <div
                            className={`group flex flex-col items-center justify-center text-center p-4 rounded-md w-full h-full transition shadow-md ${
                                isActive(card.link || '#') // Added fallback for link
                                    ? 'bg-[#162F65] text-white'
                                    : 'bg-white text-black hover:bg-[#162F65] hover:text-white'
                            }`}
                        >
                            <Image
                                src={card.icon || '/placeholder.svg'} // Added fallback for icon
                                alt={card.alt}
                                width={60}
                                height={60}
                                className={`mb-3 transition duration-300 ${
                                    isActive(card.link || '#') ? 'invert' : 'group-hover:invert'
                                }`}
                            />
                            <p className="font-poppins text-[17px] font-semibold leading-tight whitespace-pre-line">
                                {card.title}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ServiceCardRowClient;
