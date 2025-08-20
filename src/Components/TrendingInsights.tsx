"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Insight {
    _id: string;
    postTitle: string;
    preview_title: string;
    Post_short_description: string;
    slug: { current: string };
}

interface TrendingInsightsProps {
    insights: Insight[];
}

const TrendingInsights: React.FC<TrendingInsightsProps> = ({ insights }) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter insights based on search query
    const filteredInsights = insights.filter(
        (item) =>
            item.postTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.Post_short_description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-[#E7E6DD] rounded-xl p-6 lg:p-8 sticky top-8">
            <h3 className="text-[#162F65] text-xl md:text-2xl lg:text-3xl font-medium mb-6 lg:mb-8 tracking-wide">
                Trending Insights
            </h3>

            {/* Search Bar */}
            <div className="relative mb-8 lg:mb-12">
                <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                    <Search className="w-6 h-6 text-[#162F65] flex-shrink-0" />
                    <input
                        type="text"
                        placeholder="Search insights..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="text-[#676767] text-lg w-full outline-none bg-transparent"
                    />
                </div>
            </div>

            {/* Trending Items */}
            <div className="space-y-6 lg:space-y-8">
                {filteredInsights.length > 0 ? (
                    filteredInsights.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="w-3 lg:w-6 h-14 bg-[#162F65] rounded-xl flex-shrink-0 -ml-7 lg:-ml-11"></div>
                            <div className="flex-1 px-5">
                                <h4 className="text-[#162F65] text-base lg:text-lg font-medium mb-2 tracking-tight">
                                    {item.preview_title}
                                </h4>
                                <p className="text-[#0F2043] text-sm lg:text-base leading-relaxed mb-3">
                                    {item.Post_short_description}
                                </p>
                                <div className="text-right">
                                    <Link href={`/insights/${item.slug.current || "train"}`}>
                                        <button className="text-[#0F2043] self-end text-sm cursor-pointer underline hover:text-[#162F65] transition-colors">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-[#0F2043] text-sm lg:text-base">No insights found.</p>
                )}
            </div>
        </div>
    );
};

export default TrendingInsights;