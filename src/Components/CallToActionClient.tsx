'use client'; // This directive makes this a Client Component

import React from 'react';

interface CallToActionClientProps {
    contactNumber?: string;
    alertMessage?: string;
    underlineText?: string;
}

const CallToActionClient: React.FC<CallToActionClientProps> = ({
    contactNumber,
    alertMessage,
    underlineText
}) => {
    const handleCallClick = () => {
        const message = alertMessage || "Do you want to call Richard?";
        // IMPORTANT: window.confirm is a browser API and should only be used in client components.
        // For a better UX, consider a custom modal instead of window.confirm/alert.
        const confirmed = window.confirm(message);
        if (confirmed) {
            // IMPORTANT: window.location.href is a browser API and should only be used in client components.
            window.location.href = `tel:${contactNumber || "+61730643904"}`;
        }
    };

    return (
        <span
            className="underline cursor-pointer"
            onClick={handleCallClick} // onClick is now correctly within a Client Component
        >
            {underlineText || "Number"}
        </span>
    );
};

export default CallToActionClient;
