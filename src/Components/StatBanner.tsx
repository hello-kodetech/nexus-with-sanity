"use client"
import AnimatedSection from "@/Components/AnimatedSection";
import React from "react";
import CountUp from "react-countup";

interface Stat {
    value: number;
    label: string;
    suffix?: string;
}

interface OtherStat {
    value: string;
    label: string;
}

interface StatBannerProps {
    stats: Stat[];
    otherStat: OtherStat;
    statTitleFirstPart: string;
    statTitleSecondPart: string;
}

const StatBanner = ({stats, otherStat, statTitleFirstPart, statTitleSecondPart}: StatBannerProps) => {

    return (
        <div>
            <div className="relative bg-[#0F2043] text-white py-6 sm:py-8 lg:py-16">
                {/* Background image */}
                <div className="absolute bg-[url('/x.png')] h-[200px] sm:h-[300px] md:h-[500px] md:-top-25 -top-5 bg-no-repeat bg-contain inset-0 w-full sm:w-1/3 lg:w-[400px] lg:h-[400px] lg:-top-15 opacity-5" />

                <div className="relative max-w-7xl mx-0 lg:mx-auto px-8 lg:px-12">
                    <div className="flex flex-col items-start md:items-center gap-6 lg:gap-8 md:flex-row md:justify-between">
                        <AnimatedSection direction="up" delay={0.2}>
                            {/* Title */}
                            <h2 className="text-xl sm:text-2xl lg:text-5xl font-semibold text-[#FFFFFF] text-left leading-tight sm:leading-[48px] lg:leading-[57px]">
                                {statTitleFirstPart}
                                <br className="hidden lg:block" /> {statTitleSecondPart}
                            </h2>
                        </AnimatedSection>

                        {/* Stats */}
                        <div className="flex flex-col md:flex-row md:justify-between md:gap-6 lg:gap-12 text-left">
                            <AnimatedSection direction="up" delay={0.2}>
                                {/* Mobile View: stacked with inline layout */}
                                <div className="flex flex-col md:hidden gap-y-3">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-start items-center gap-2"
                                        >
                                            <div className="w-16">
                                                {" "}
                                                {/* Set fixed width to align all numbers */}
                                                <CountUp
                                                    start={0}
                                                    end={stat.value}
                                                    duration={2.5}
                                                    delay={0}
                                                    suffix={stat.suffix || ""}
                                                    enableScrollSpy={false}
                                                    redraw={false}
                                                    startOnMount={true}
                                                >
                                                    {({ countUpRef }) => (
                                                        <p
                                                            ref={
                                                                countUpRef as React.Ref<HTMLParagraphElement>
                                                            }
                                                            className="text-xl font-semibold text-white"
                                                        />
                                                    )}
                                                </CountUp>
                                            </div>
                                            <p className="text-sm text-white">{stat.label}</p>
                                        </div>
                                    ))}

                                    {/* CO₂ row */}
                                    <div className="flex justify-start items-center gap-2">
                                        <div className="w-16">
                                            <p className="text-xl font-semibold text-[#5DF706]">
                                                {otherStat.value}
                                            </p>
                                        </div>
                                        <p className="text-sm text-[#5DF706]">{otherStat.label}</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Tablet/Desktop View: original layout preserved */}
                            <div className="hidden md:flex flex-row justify-between gap-6 lg:gap-12">
                                {stats.map((stat, index) => (
                                    <div key={index} className="group text-left">
                                        <p className="text-2xl lg:text-6xl font-semibold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                                            <CountUp
                                                start={0}
                                                end={stat.value}
                                                duration={2.5}
                                                delay={0}
                                                suffix={stat.suffix || ""}
                                                enableScrollSpy={false}
                                                redraw={false}
                                                startOnMount={false}
                                                onStart={() => {}}
                                                onEnd={() => {}}
                                            >
                                                {({ countUpRef }) => <span ref={countUpRef} />}
                                            </CountUp>
                                        </p>
                                        <p className="text-sm lg:text-xl text-white">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                                <div className="group text-left">
                                    <p className="text-2xl lg:text-6xl font-semibold text-[#5DF706] mb-2 group-hover:scale-105 transition-transform duration-300">
                                        {otherStat.value}
                                    </p>
                                    <p className="text-sm lg:text-xl text-[#5DF706]">
                                        {otherStat.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatBanner;