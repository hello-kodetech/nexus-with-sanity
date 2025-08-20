// C:\Developments\KodeTech\nexus-1\src\Components\Quote.tsx
"use client"; // This line is essential for using useState

import React, { useState } from "react";
import FreightQuoteWidget from "./FreightQuoteWidget";

const Quote = () => {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    const handleOpenWidget = () => {
        setIsWidgetOpen(true);
    };

    const handleCloseWidget = () => {
        setIsWidgetOpen(false);
    };

    return (
        <>
            <div>
                <button
                    onClick={handleOpenWidget}
                    aria-label="Get my quote"
                    className="fixed right-0 top-[60%] flex flex-col transform -translate-y-1/2 text-white font-semibold rounded-l-md tracking-widest text-xs sm:text-sm transition z-50 hover:shadow-lg">
                    <div
                        className="py-1 sm:py-2 px-2 sm:px-4 bg-[#E7E6DD] flex items-center justify-center hover:bg-[#D7D6CD] transition-colors"
                        style={{
                            transform: 'rotate(180deg)',
                            transformOrigin: 'center center',
                            writingMode: 'vertical-rl',
                            textOrientation: 'mixed',
                        }}
                    >
                        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold italic text-[#162F65]">
                            GET MY QUOTE
                        </span>
                    </div>
                    <div className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 bg-[#0F2043] hover:bg-[#1A2F53] transition-colors">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                            width="42"
                            height="32"
                            viewBox="0 0 42 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.2 1.6001L18.96 4.0001L30.8 16.0001L18.96 28.0001L21.2 30.4001L35.6 16.0001L21.2 1.6001Z"
                                fill="white"
                            />
                            <path
                                d="M11.2 1.6001L8.95996 4.0001L20.8 16.0001L8.95996 28.0001L11.2 30.4001L25.6 16.0001L11.2 1.6001Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </button>
            </div>

            <FreightQuoteWidget
                isOpen={isWidgetOpen}
                onClose={handleCloseWidget}
            />
        </>
    );
};

export default Quote;