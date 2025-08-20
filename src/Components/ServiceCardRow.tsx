// C:\Developments\KodeTech\nexus-1\src\Components\ServiceCardRow.tsx
// No 'use client'; directive here, making this a Server Component

import React from 'react';
// Removed Image, Link, usePathname as they are now in the Client Component
// Removed useState, useEffect as data fetching is now direct await
import { getServiceCardRowSectionData } from "@/sanity/lib/api";
import ServiceCardRowClient from './ServiceCardRowClient'; // Import the new Client Component

// Interface for the data fetched from Sanity
interface ServiceCardData {
    section_title?: string;
    card_1_icon?: string;
    card_1_title?: string;
    card_1_button_link?: string;
    card_2_icon?: string;
    card_2_title?: string;
    card_2_button_link?: string;
    card_3_icon?: string;
    card_3_title?: string;
    card_3_button_link?: string;
    card_4_icon?: string;
    card_4_title?: string;
    card_4_button_link?: string;
}

// This is now an async Server Component
const ServiceCardRow = async () => {
    // Directly fetch data on the server
    const pageData: ServiceCardData | null = await getServiceCardRowSectionData();

    if (!pageData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                No service card content available.
            </div>
        );
    }

    // Pass the fetched data as props to the Client Component
    return (
        <ServiceCardRowClient
            sectionTitle={pageData.section_title}
            card1Icon={pageData.card_1_icon}
            card1Title={pageData.card_1_title}
            card1Link={pageData.card_1_button_link}
            card2Icon={pageData.card_2_icon}
            card2Title={pageData.card_2_title}
            card2Link={pageData.card_2_button_link}
            card3Icon={pageData.card_3_icon}
            card3Title={pageData.card_3_title}
            card3Link={pageData.card_3_button_link}
            card4Icon={pageData.card_4_icon}
            card4Title={pageData.card_4_title}
            card4Link={pageData.card_4_button_link}
        />
    );
}

export default ServiceCardRow;
