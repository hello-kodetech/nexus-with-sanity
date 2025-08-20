'use client'
import { useState, useEffect } from "react";
import { getFreightQuoteData, getServiceCardRowSectionData } from "@/sanity/lib/api"; 
import { FreightQuoteWidgetData, ServiceCardData } from "@/sanity/types/sanity"; 

export const useFreightClient = () => {
  const [pageData, setPageData] = useState<FreightQuoteWidgetData | null>(null);
  const [serviceCardData, setServiceCardData] = useState<ServiceCardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getFreightQuoteData();
        const serviceData = await getServiceCardRowSectionData();
        if (data && serviceData) {
          setPageData(data);
          setServiceCardData(serviceData);
        } else {
          setPageData(null);
        }
      } catch (err) {
        console.error("Failed to fetch freight quote client data:", err);
        setError("Failed to load page content.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const services = [
    {
      id: "air-sea",
      title: serviceCardData?.card_1_title || "AIR & SEA \nFREIGHT",
      subtitle: "",
      image: serviceCardData?.card_1_icon || "/icons/plane-black.svg",
      link: serviceCardData?.card_2_button_link || "/air-and-sea-freight",
    },
    {
      id: "customs",
      title: serviceCardData?.card_4_title || "CUSTOMS CLEARANCE & COMPLIANCE",
      subtitle: "",
      image: serviceCardData?.card_4_icon || "/icons/cart.svg",
      link: serviceCardData?.card_4_button_link || "/customs",
    },
    {
      id: "logistics",
      title: serviceCardData?.card_3_title || "3PL, WAREHOUSING & SPECIAL PROJECTS",
      subtitle: "",
      image: serviceCardData?.card_3_icon || "/icons/box.svg",
      link: serviceCardData?.card_3_button_link || "/Integrated-logistics",
    },
    {
      id: "road-rail",
      title: serviceCardData?.card_2_title || "ROAD & RAIL TRANSPORT",
      subtitle: "",
      image: serviceCardData?.card_2_icon || "/icons/truck.svg",
      link: serviceCardData?.card_2_button_link || "/road-and-rail",
    },
  ];

  return { pageData, services, loading, error };
};
