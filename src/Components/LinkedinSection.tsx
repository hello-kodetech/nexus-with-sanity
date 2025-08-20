
import Image from "next/image";
import React from "react";
import { getLinkedInSectionData } from "@/sanity/lib/api";

const LinkedinSection = async() => {


    const sectionData = await getLinkedInSectionData();

    if (!sectionData) {
        return (
            <div>
                <p>No LinkedIn section data available.</p>
            </div>
        );
    }
    return (
        <section className="py-4 sm:py-8 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="bg-[#E7E6DD] rounded-[10px] p-4 sm:p-6 lg:py-8 lg:px-12 flex flex-col items-center lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-12">
                    <div className="text-center lg:text-left lg:mr-12">
                        <h3 className="text-xl sm:text-2xl lg:text-[34px] xl:text-[43px] font-normal text-[#162F65] mb-3 sm:mb-4">
                           {sectionData.section_title || "Link up on LinkedIn"}
                        </h3>
                        <p className="text-sm sm:text-base text-[#676767] font-medium leading-5 sm:leading-[28px] max-w-xl sm:max-w-2xl">
                            {sectionData.section_description || "Stay informed about the latest developments in the logistics space and get early updates about the lowest emerging rate windows by following us on LinkedIn."}
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <a href="https://www.linkedin.com/company/nexus-logix-pvt-ltd" target="_blank"  className="cursor-pointer">
                            <Image
                                src="/linkedin-button.svg"
                                width={200}
                                height={80}
                                alt="Connect with us on LinkedIn"
                                className="h-10 sm:h-12 lg:h-14 w-auto mx-auto lg:mx-0"
                            />
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkedinSection;