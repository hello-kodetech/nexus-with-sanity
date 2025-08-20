'use client';

import React, { useState, ChangeEvent, FormEvent } from "react";
import { ChevronDown} from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/Components/AnimatedSection";
import ReCAPTCHA from "react-google-recaptcha";
import Quote from "@/Components/Quote";
import Link from "next/link";

interface ContactItem {
    icon?: string;
    title?: string;
    contact_info?: string;
}

interface PageDataProps {
    contact_form_title?: string;
    contact_form_description_1?: string;
    contact_form_description_2?: string;
    contact_item_1?: ContactItem;
    contact_item_2?: ContactItem;
    contact_item_3?: ContactItem;
    x_link?: string;
    linkedin_link?: string;
    facebook_link?: string;
    instagram_link?: string;
    map_link?: string;
}

interface FormData {
    firstName: string;
    lastName: string;
    companyEmail: string;
    phone: string;
    companyName: string;
    website: string;
    address: string;
    city: string;
    province: string;
    topic: string;
    message: string;
}

interface ContactFormClientProps {
    pageData: PageDataProps;
}

const ContactFormClient: React.FC<ContactFormClientProps> = ({ pageData }) => {

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        companyEmail: "",
        phone: "",
        companyName: "",
        website: "",
        address: "",
        city: "",
        province: "",
        topic: "HS Classifications & Duty Optimisation",
        message: "",
    });

    const [isTopicOpen, setIsTopicOpen] = useState<boolean>(false);
    const [errors, setErrors] = useState<
        Partial<Record<keyof FormData | "privacy" | "recaptcha", string>>
    >({});
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        validateField(name as keyof FormData, value);

        setSuccessMessage("");
        setErrorMessage("");
    };

    const validateField = (name: keyof FormData, value: string) => {
        const newErrors = { ...errors };

        switch (name) {
            case "firstName":
                if (!value.trim()) {
                    newErrors.firstName = "First name is required.";
                } else if (value.trim().length < 2 || value.trim().length > 50) {
                    newErrors.firstName =
                        "First name must be between 2 and 50 characters.";
                } else if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
                    newErrors.firstName =
                        "First name can only contain letters, spaces, hyphens, or apostrophes.";
                } else {
                    newErrors.firstName = "";
                }
                break;
            case "lastName":
                if (!value.trim()) {
                    newErrors.lastName = "Last name is required.";
                } else if (value.trim().length < 2 || value.trim().length > 50) {
                    newErrors.lastName = "Last name must be between 2 and 50 characters.";
                } else if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
                    newErrors.lastName =
                        "Last name can only contain letters, spaces, hyphens, or apostrophes.";
                } else {
                    newErrors.lastName = "";
                }
                break;
            case "companyEmail":
                if (!value.trim()) {
                    newErrors.companyEmail = "Company email is required.";
                } else if (
                    !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value.trim())
                ) {
                    newErrors.companyEmail =
                        "Please enter a valid lowercase email (e.g., user@company.com).";
                } else if (value.trim().length < 6 || value.trim().length > 254) {
                    newErrors.companyEmail =
                        "Email must be between 6 and 254 characters.";
                } else {
                    newErrors.companyEmail = "";
                }
                break;
            case "phone":
                if (!value.trim()) {
                    newErrors.phone = "Phone number is required.";
                } else if (!/^[\d\s()-]+$/.test(value.trim())) {
                    // Only allows digits, spaces, parentheses, and hyphens (removed +)
                    newErrors.phone =
                        "Please enter a valid phone number (e.g., 0435231833).";
                } else if (value.trim().length < 7 || value.trim().length > 20) {
                    newErrors.phone = "Phone number must be between 7 and 20 characters.";
                } else if (/^[^0-9]/.test(value.trim())) {
                    // Doesn't start with a digit
                    newErrors.phone = "Phone number must start with a digit.";
                } else if (/\D\D/.test(value.trim())) {
                    // Has consecutive non-digit characters
                    newErrors.phone =
                        "Phone number cannot have consecutive special characters.";
                } else {
                    newErrors.phone = "";
                }
                break;
            case "companyName":
                if (!value.trim()) {
                    newErrors.companyName = "Company name is required.";
                } else if (value.trim().length < 2 || value.trim().length > 100) {
                    newErrors.companyName =
                        "Company name must be between 2 and 100 characters.";
                } else {
                    newErrors.companyName = "";
                }
                break;
            case "website":
                if (
                    value.trim() &&
                    !/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/.test(
                        value.trim()
                    )
                ) {
                    newErrors.website =
                        "Please enter a valid URL (e.g., example.com or https://example.com).";
                } else if (value.trim().length > 200) {
                    newErrors.website = "Website URL cannot exceed 200 characters.";
                } else {
                    newErrors.website = "";
                }
                break;
            case "address":
                if (value.trim().length > 200) {
                    newErrors.address = "Address cannot exceed 200 characters.";
                } else {
                    newErrors.address = "";
                }
                break;
            case "city":
                if (value.trim() && !/^[a-zA-Z\s'-]+$/.test(value.trim())) {
                    newErrors.city =
                        "City must contain only letters, spaces, hyphens, or apostrophes.";
                } else if (value.trim().length > 100) {
                    newErrors.city = "City name cannot exceed 100 characters.";
                } else {
                    newErrors.city = "";
                }
                break;
            case "province":
                if (value.trim() && !/^[a-zA-Z\s'-]+$/.test(value.trim())) {
                    newErrors.province =
                        "State must contain only letters, spaces, hyphens, or apostrophes.";
                } else if (value.trim().length > 100) {
                    newErrors.province = "State name cannot exceed 100 characters.";
                } else {
                    newErrors.province = "";
                }
                break;
            case "message":
                if (value.trim().length > 1000) {
                    newErrors.message = "Message cannot exceed 1000 characters.";
                } else {
                    newErrors.message = "";
                }
                break;
        }

        setErrors(newErrors);
    };

    const validateForm = () => {
        const newErrors: Partial<
            Record<keyof FormData | "privacy" | "recaptcha", string>
        > = {};

        if (!formData.firstName.trim())
            newErrors.firstName = "First name is required.";
        if (!formData.lastName.trim())
            newErrors.lastName = "Last name is required.";
        if (!formData.companyEmail.trim()) {
            newErrors.companyEmail = "Company email is required.";
        } else if (
            !/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/.test(
                formData.companyEmail.trim()
            )
        ) {
            newErrors.companyEmail =
                "Please enter a valid lowercase email (e.g., user@company.com).";
        } else if (
            formData.companyEmail.trim().length < 6 ||
            formData.companyEmail.trim().length > 254
        ) {
            newErrors.companyEmail = "Email must be between 6 and 254 characters.";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^[\d\s()-]+$/.test(formData.phone.trim())) {
            newErrors.phone = "Please enter a valid phone number (e.g., 0435231833).";
        } else if (/^[^0-9]/.test(formData.phone.trim())) {
            newErrors.phone = "Phone number must start with a digit.";
        } else if (/\D\D/.test(formData.phone.trim())) {
            newErrors.phone =
                "Phone number cannot have consecutive special characters.";
        } else if (
            formData.phone.trim().length < 7 ||
            formData.phone.trim().length > 20
        ) {
            newErrors.phone = "Phone number must be between 7 and 20 characters.";
        }
        if (!formData.companyName.trim())
            newErrors.companyName = "Company name is required.";
        if (
            formData.website.trim() &&
            !/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/.test(
                formData.website.trim()
            )
        ) {
            newErrors.website =
                "Please enter a valid URL (e.g., example.com or https://example.com).";
        }
        if (formData.city.trim() && !/^[a-zA-Z\s'-]+$/.test(formData.city.trim())) {
            newErrors.city = "City must contain only letters, spaces, or hyphens.";
        }
        if (
            formData.province.trim() &&
            !/^[a-zA-Z\s'-]+$/.test(formData.province.trim())
        ) {
            newErrors.province =
                "State must contain only letters, spaces, or hyphens.";
        }
        if (!privacyAccepted)
            newErrors.privacy = "You must accept the privacy policy.";
        if (!recaptchaValue)
            newErrors.recaptcha = "Please complete the reCAPTCHA verification.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        if (!validateForm()) return;

        setIsLoading(true);
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formType: "contactUs",
                    ...formData,
                    recaptchaValue,
                }),
            });

            if (response.ok) {
                // Set success message at bottom
                setSuccessMessage(
                    "Thank you for your submission! Our team will get in touch with you soon."
                );

                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    companyEmail: "",
                    phone: "",
                    companyName: "",
                    website: "",
                    address: "",
                    city: "",
                    province: "",
                    topic: "HS Classifications & Duty Optimisation",
                    message: "",
                });
                setPrivacyAccepted(false);
                setRecaptchaValue(null);
                setErrors({});

                // Auto-clear after 10 seconds
                setTimeout(() => {
                    setSuccessMessage("");
                }, 10000);

                // Scroll to bottom to ensure message is visible
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                });
            } else {
                const errorData = await response.json();
                setErrorMessage(
                    `Failed to send request: ${
                        errorData.message || "Please try again later."
                    }`
                );
            }
        } catch (error) {
            setErrorMessage(
                "An unexpected error occurred. Please try again or contact support."
            );
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const topics = [
        "HS Classifications & Duty Optimisation",
        "Manage refund claims",
        "Duty Drawbacks and Rebates",
        "Australian Trusted Trader Application",
        "Track and Trace",
        "Customs and Border Processing ",
        "Supply Chain Consultancy & Audits",
        "3PL & Warehousing",
        "Fullment & E-Commerce Services",
        "Inventory Management & Optimisation",
        "Special Project Transport",
        "Other",
    ];

    return (
        // <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 lg:-mt-28 poppins">
        //     {/* Top Section - Contact Form */}
        //     <div className="flex flex-col lg:flex-row overflow-hidden">
        //         {/* Left Panel - Contact Info */}
        //         <div
        //             className="lg:w-2/5 xl:w-[555px] p-8 lg:p-12 relative rounded-lg"
        //             style={{ backgroundColor: "#E7E6DD" }}
        //         >
        //             <div className="max-w-md md:max-w-xl">
        //                 <h1
        //                     className="mb-4 font-poppins font-semibold text-[28px] leading-[40px] tracking-[0.03em] md:text-[32px] md:leading-[48px] lg:text-[39px] lg:leading-[38px]"
        //                     style={{ color: "#162F65" }}
        //                 >
        //                     {pageData?.contact_form_title || "We're here to help."}
        //                 </h1>
        //
        //                 <p className="mb-2 font-poppins font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] text-left text-[#0F2043]">
        //                     {pageData?.contact_form_description_1 || "Tell us as much as you can... Nothing is too complex for us..."}
        //                 </p>
        //
        //                 <p className="mb-2 font-poppins font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] text-left text-[#0F2043]">
        //                     {pageData?.contact_form_description_2 || "Commercial shipments only - no personal effects."}
        //                 </p>
        //
        //                 {/* Contact Methods */}
        //                 <div className="space-y-6 mb-8 lg:mt-26 sm:mt-4 mt-4">
        //                     <div className="flex items-start space-x-3">
        //                         <Image
        //                             src={pageData?.contact_item_1?.icon || "/call_icon.png"}
        //                             alt="Phone Icon"
        //                             width={20}
        //                             height={20}
        //                             className="mt-1"
        //                         />
        //                         <div>
        //                             <h3
        //                                 className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
        //                                 style={{ color: "#162F65" }}
        //                             >
        //                                 {pageData?.contact_item_1?.title || "Call Us"}
        //                             </h3>
        //                             <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
        //                                 {pageData?.contact_item_1?.contact_info || "+61 7 3737 4310"}
        //                             </p>
        //                         </div>
        //                     </div>
        //
        //                     <div className="flex items-start space-x-3">
        //                         <Image
        //                             src={pageData?.contact_item_2?.icon || "/mail_icon.png"}
        //                             alt="mail Icon"
        //                             width={20}
        //                             height={20}
        //                             className="mt-1"
        //                         />
        //                         <div>
        //                             <h3
        //                                 className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
        //                                 style={{ color: "#162F65" }}
        //                             >
        //                                 {pageData?.contact_item_2?.title || "Send Us Mail"}
        //                             </h3>
        //                             <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
        //                                 {pageData?.contact_item_2?.contact_info || "enquiries@nexuslogix.com.au"}
        //                             </p>
        //                         </div>
        //                     </div>
        //
        //                     <div className="flex items-start space-x-3">
        //                         <Image
        //                             src={pageData?.contact_item_3?.icon || "/location_icon.png"}
        //                             alt="location Icon"
        //                             width={20}
        //                             height={20}
        //                             className="mt-1"
        //                         />
        //                         <div>
        //                             <h3
        //                                 className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
        //                                 style={{ color: "#162F65" }}
        //                             >
        //                                 {pageData?.contact_item_3?.title || "We Are Located"}
        //                             </h3>
        //                             <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
        //                                 {pageData?.contact_item_3?.contact_info || "Level 38, 71 Eagle Street, Brisbane"}
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //
        //             {/* Social Media Icons - Bottom Left */}
        //             <div className="absolute bottom-4 sm:bottom-4 md:bottom-4 lg:bottom-8 left-8 flex space-x-3">
        //                 <a
        //                     href={pageData?.x_link || "https://www.facebook.com"}
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                 >
        //                     <Image
        //                         src="/x_icon.png"
        //                         alt="Facebook"
        //                         width={32}
        //                         height={32}
        //                         className="w-8 h-8"
        //                     />
        //                 </a>
        //                 <a
        //                     href={pageData?.linkedin_link || "https://www.linkedin.com"}
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                 >
        //                     <Image
        //                         src="/linkedin_icon.png"
        //                         alt="Instagram"
        //                         width={32}
        //                         height={32}
        //                         className="w-8 h-8"
        //                     />
        //                 </a>
        //                 <a
        //                     href={pageData?.facebook_link || "https://www.facebook.com"}
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                 >
        //                     <Image
        //                         src="/facebook_icon.png"
        //                         alt="LinkedIn"
        //                         width={32}
        //                         height={32}
        //                         className="w-8 h-8"
        //                     />
        //                 </a>
        //                 <a
        //                     href={pageData?.instagram_link || "https://www.youtube.com"}
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                 >
        //                     <Image
        //                         src="/instagram_icon.png"
        //                         alt="YouTube"
        //                         width={32}
        //                         height={32}
        //                         className="w-8 h-8"
        //                     />
        //                 </a>
        //             </div>
        //         </div>
        //
        //         {/* Right Panel - Contact Form */}
        //         <div className="lg:w-3/5 xl:w-2/3 p-8 lg:p-12 bg-[#F6F6F6]">
        //             <div className="max-w-2xl">
        //                 {submissionStatus === "submitting" && (
        //                     <p className="text-blue-600 text-sm mb-4">Submitting your request...</p>
        //                 )}
        //                 {submissionStatus === "success" && (
        //                     <p className="text-green-600 text-sm mb-4">Your request has been submitted successfully!</p>
        //                 )}
        //                 {submissionStatus === "error" && (
        //                     <p className="text-red-600 text-sm mb-4">Failed to submit your request. Please try again later.</p>
        //                 )}
        //
        //                 {/* Contact Information */}
        //                 <div className="mb-8">
        //                     <h2
        //                         className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
        //                         style={{ color: "#162F65" }}
        //                     >
        //                         Contact Information
        //                     </h2>
        //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        //                         <div className="relative">
        //                             <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
        //                                 First Name
        //                             </label>
        //                             <div className="relative">
        //                                 <input
        //                                     type="text"
        //                                     name="firstName"
        //                                     value={formData.firstName}
        //                                     onChange={handleInputChange}
        //                                     required
        //                                     className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
        //                                 />
        //                                 <span className="absolute right-0 bottom-2 text-black">*</span>
        //                             </div>
        //                             {errors.firstName && (
        //                                 <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
        //                             )}
        //                         </div>
        //                         <div className="relative">
        //                             <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
        //                                 Last Name
        //                             </label>
        //                             <div className="relative">
        //                                 <input
        //                                     type="text"
        //                                     name="lastName"
        //                                     value={formData.lastName}
        //                                     onChange={handleInputChange}
        //                                     required
        //                                     className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
        //                                 />
        //                                 <span className="absolute right-0 bottom-2 text-black">*</span>
        //                             </div>
        //                             {errors.lastName && (
        //                                 <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
        //                             )}
        //                         </div>
        //                         <div className="relative">
        //                             <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
        //                                 Company Email Address
        //                             </label>
        //                             <div className="relative">
        //                                 <input
        //                                     type="email"
        //                                     name="companyEmail"
        //                                     value={formData.companyEmail}
        //                                     onChange={handleInputChange}
        //                                     required
        //                                     className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
        //                                 />
        //                                 <span className="absolute right-0 bottom-2 text-black">*</span>
        //                             </div>
        //                             {errors.companyEmail && (
        //                                 <p className="text-red-600 text-sm mt-1">{errors.companyEmail}</p>
        //                             )}
        //                         </div>
        //                         <div className="relative">
        //                             <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
        //                                 Phone
        //                             </label>
        //                             <div className="relative">
        //                                 <input
        //                                     type="tel"
        //                                     name="phone"
        //                                     value={formData.phone}
        //                                     onChange={handleInputChange}
        //                                     placeholder="+61 2 1234 5678"
        //                                     required
        //                                     className="w-full font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
        //                                 />
        //                                 <span className="absolute right-0 bottom-2 text-black">*</span>
        //                             </div>
        //                             {errors.phone && (
        //                                 <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
        //                             )}
        //                         </div>
        //                     </div>
        //                 </div>
        //
        //                 {/* Company Information */}
        //                 <div className="mb-8">
        //                     <h2
        //                         className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
        //                         style={{ color: "#162F65" }}
        //                     >
        //                         Company Information
        //                     </h2>
        //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        //                         <div className="relative">
        //                             <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
        //                                 Company Name
        //                             </label>
        //                             <div className="relative">
        //                                 <input
        //                                     type="text"
        //                                     name="companyName"
        //                                     value={formData.companyName}
        //                                     onChange={handleInputChange}
        //                                     required
        //                                     className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
        //                                 />
        //                                 <span className="absolute right-0 bottom-2 text-black">*</span>
        //                             </div>
        //                             {errors.companyName && (
        //                                 <p className="text-red-600 text-sm mt-1">{errors.companyName}</p>
        //                             )}
        //                         </div>
        //                         <div>
        //                             <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
        //                                 Website URL
        //                             </label>
        //                             <input
        //                                 type="url"
        //                                 name="website"
        //                                 value={formData.website}
        //                                 onChange={handleInputChange}
        //                                 className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
        //                             />
        //                             {errors.website && (
        //                                 <p className="text-red-600 text-sm mt-1">{errors.website}</p>
        //                             )}
        //                         </div>
        //                     </div>
        //                     <div className="mt-6">
        //                         <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
        //                             Address
        //                         </label>
        //                         <input
        //                             type="text"
        //                             name="address"
        //                             value={formData.address}
        //                             onChange={handleInputChange}
        //                             className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
        //                         />
        //                         {errors.address && (
        //                             <p className="text-red-600 text-sm mt-1">{errors.address}</p>
        //                         )}
        //                     </div>
        //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        //                         <div>
        //                             <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
        //                                 City
        //                             </label>
        //                             <input
        //                                 type="text"
        //                                 name="city"
        //                                 value={formData.city}
        //                                 onChange={handleInputChange}
        //                                 className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
        //                             />
        //                             {errors.city && (
        //                                 <p className="text-red-600 text-sm mt-1">{errors.city}</p>
        //                             )}
        //                         </div>
        //                         <div>
        //                             <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
        //                                 State
        //                             </label>
        //                             <input
        //                                 type="text"
        //                                 name="province"
        //                                 value={formData.province}
        //                                 onChange={handleInputChange}
        //                                 className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
        //                             />
        //                             {errors.province && (
        //                                 <p className="text-red-600 text-sm mt-1">{errors.province}</p>
        //                             )}
        //                         </div>
        //                     </div>
        //                 </div>
        //
        //                 {/* Topic */}
        //                 <div className="mb-8">
        //                     <h2
        //                         className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
        //                         style={{ color: "#162F65" }}
        //                     >
        //                         Topic
        //                     </h2>
        //                     <div className="relative">
        //                         <button
        //                             type="button"
        //                             onClick={() => setIsTopicOpen(!isTopicOpen)}
        //                             className="w-full flex items-center justify-between border-b-2 border-black focus:border-blue-500 outline-none pb-2 text-left"
        //                         >
        //                             <span className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
        //                                 {formData.topic}
        //                             </span>
        //                             <ChevronDown
        //                                 className={`w-5 h-5 transition-transform ${isTopicOpen ? "rotate-180" : ""}`}
        //                             />
        //                         </button>
        //                         {isTopicOpen && (
        //                             <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1 max-h-48 overflow-y-auto">
        //                                 {topics.map((topic, index) => (
        //                                     <button
        //                                         key={index}
        //                                         type="button"
        //                                         onClick={() => {
        //                                             setFormData((prev) => ({ ...prev, topic }));
        //                                             setIsTopicOpen(false);
        //                                         }}
        //                                         className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
        //                                     >
        //                                         {topic}
        //                                     </button>
        //                                 ))}
        //                             </div>
        //                         )}
        //                     </div>
        //                 </div>
        //
        //                 {/* Message */}
        //                 <div className="mb-8">
        //                     <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
        //                         Message
        //                     </label>
        //                     <textarea
        //                         name="message"
        //                         value={formData.message}
        //                         onChange={handleInputChange}
        //                         placeholder="Include a description of your requirements"
        //                         rows={2}
        //                         className="w-full font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
        //                     />
        //                     {errors.message && (
        //                         <p className="text-red-600 text-sm mt-1">{errors.message}</p>
        //                     )}
        //                 </div>
        //
        //                 {/* Privacy Policy */}
        //                 <div className="mb-8">
        //                     <div className="flex items-start space-x-2">
        //                         <input
        //                             type="checkbox"
        //                             id="privacy"
        //                             name="privacyPolicyAccepted"
        //                             className="mt-1"
        //                             checked={formData.privacyPolicyAccepted || false}
        //                             onChange={(e) =>
        //                                 setFormData((prev) => ({
        //                                     ...prev,
        //                                     privacyPolicyAccepted: e.target.checked,
        //                                 }))
        //                             }
        //                         />
        //                         <label
        //                             htmlFor="privacy"
        //                             className="font-poppins font-normal text-[12px] md:text-[14px] lg:text-[15px] leading-[25px] tracking-[0em] text-[#676767]"
        //                         >
        //                             Our{" "}
        //                             <a href="/privacy-policy" className="underline">
        //                                 privacy policy
        //                             </a>{" "}
        //                             contains detailed information about our handling of personal
        //                             information.
        //                         </label>
        //                     </div>
        //                     {errors.privacyPolicyAccepted && (
        //                         <p className="text-red-600 text-sm mt-1">{errors.privacyPolicyAccepted}</p>
        //                     )}
        //                 </div>
        //
        //                 {/* Submit Button */}
        //                 <div className="text-right">
        //                     <button
        //                         onClick={handleSubmit}
        //                         disabled={submissionStatus === "submitting"}
        //                         className={`px-8 py-3 font-poppins font-medium text-[16px] md:text-[20px] lg:text-[25px] leading-[100%] tracking-[0em] text-white rounded-md hover:bg-blue-950 hover:scale-105 transition-all duration-300 ${submissionStatus === "submitting" ? "opacity-50 cursor-not-allowed" : ""}`}
        //                         style={{ backgroundColor: "#162F65" }}
        //                     >
        //                         Submit My Request
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 lg:-mt-28 md:-mt-28 poppins contact-us-main-div">
            {/* Top Section - Contact Form */}
            <div className="flex flex-col lg:flex-row  overflow-hidden">
                {/* Left Panel - Contact Info */}
                <div
                    className="lg:w-2/5 xl:w-[555px] p-8 lg:p-12 relative rounded-lg"
                    style={{ backgroundColor: "#E7E6DD" }}
                >
                    <AnimatedSection direction="left" delay={0.2}>
                        <div className="max-w-md md:max-w-xl">
                            <h1
                                className="mb-4 font-poppins font-semibold text-[28px] leading-[40px] tracking-[0.03em] md:text-[32px] md:leading-[48px] lg:text-[39px] lg:leading-[38px]"
                                style={{ color: "#162F65" }}
                            >
                                {pageData?.contact_form_title || "We're here to help."}
                            </h1>

                            <p className="mb-2 font-poppins font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] text-left text-[#0F2043]">
                                {pageData?.contact_form_description_1 || "Tell us as much as you can... Nothing is too complex for us..."}
                            </p>

                            <p className="mb-2 font-poppins font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] text-left text-[#0F2043]">
                                {pageData?.contact_form_description_2 || "Commercial shipments only - no personal effects."}
                            </p>

                            {/* Contact Methods */}
                            <div className="space-y-6 mb-8 lg:mt-26 sm:mt-4 mt-4">
                                <div className="flex items-start space-x-3">
                                    <Image
                                        src={pageData?.contact_item_1?.icon || "/call_icon.png"}
                                        alt="Phone Icon"
                                        width={20}
                                        height={20}
                                        className="mt-1"
                                    />

                                    <div>
                                        <h3
                                            className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
                                            style={{ color: "#162F65" }}
                                        >
                                            {pageData?.contact_item_1?.title || "Call Us"}
                                        </h3>
                                        <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
                                            {pageData?.contact_item_1?.contact_info || "+61 7 3737 4310"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Image
                                        src={pageData?.contact_item_2?.icon || "/mail_icon.png"}
                                        alt="mail Icon"
                                        width={20}
                                        height={20}
                                        className="mt-1"
                                    />

                                    <div>
                                        <h3
                                            className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
                                            style={{ color: "#162F65" }}
                                        >
                                            {pageData?.contact_item_2?.title || "Send Us Mail"}
                                        </h3>
                                        <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
                                            {pageData?.contact_item_2?.contact_info || "enquiries@nexuslogix.com.au"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Image
                                        src={pageData?.contact_item_3?.icon || "/location_icon.png"}
                                        alt="location Icon"
                                        width={20}
                                        height={20}
                                        className="mt-1"
                                    />

                                    <div>
                                        <h3
                                            className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
                                            style={{ color: "#162F65" }}
                                        >
                                            {pageData?.contact_item_3?.title || "We Are Located"}
                                        </h3>
                                        <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
                                            {pageData?.contact_item_3?.contact_info || "Level 38, 71 Eagle Street, Brisbane"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Social Media Icons - Bottom Left */}
                    <div className="absolute bottom-4 sm:bottom-4 md:bottom-4 lg:bottom-8 left-8 flex space-x-3">
                        {/* Twitter */}
                        <Link href={pageData?.x_link || "https://www.facebook.com"}
                              target="_blank"
                              rel="noopener noreferrer">
                            <Image
                                src="/x_icon.png"
                                alt="x"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                        </Link>

                        {/* Google+ */}
                        <Link
                            href={pageData?.linkedin_link || "https://www.linkedin.com/company/nexus-logix-pvt-ltd"}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Image
                                src="/linkedin_icon.png"
                                alt="linkedin"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                        </Link>

                        {/* Facebook */}
                        <Link
                            href={pageData?.facebook_link || "https://web.facebook.com/profile.php?id=61578771585271&sk=about"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/facebook_icon.png"
                                alt="facebook"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                        </Link>

                        {/* Instagram */}
                        <Link
                            href={pageData?.instagram_link || "https://www.instagram.com/nexus_logix/"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/instagram_icon.png"
                                alt="YouTube"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Panel - Contact Form */}
                <div className="lg:w-3/5 xl:w-2/3 p-8 lg:p-12 bg-[#F6F6F6]">
                    <AnimatedSection direction="right" delay={0.2}>
                        <div className="max-w-2xl">
                            {/* Contact Information */}

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="mb-8">
                                    <h2
                                        className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
                                        style={{ color: "#162F65" }}
                                    >
                                        Contact Information
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                                                First Name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                                                />
                                                <span className="absolute right-0 bottom-2 text-black">
                            *
                          </span>
                                            </div>
                                            {errors.firstName && (
                                                <p className="text-red-600 text-sm mt-1">
                                                    {errors.firstName}
                                                </p>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                                                Last Name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                                                />
                                                <span className="absolute right-0 bottom-2 text-black">
                            *
                          </span>
                                            </div>
                                            {errors.lastName && (
                                                <p className="text-red-600 text-sm mt-1">
                                                    {errors.lastName}
                                                </p>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                                                Company Email Address
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    name="companyEmail"
                                                    value={formData.companyEmail}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                                                />
                                                <span className="absolute right-0 bottom-2 text-black">
                            *
                          </span>
                                            </div>
                                            {errors.companyEmail && (
                                                <p className="text-red-600 text-sm mt-1">
                                                    {errors.companyEmail}
                                                </p>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                                                Phone
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder=""
                                                    required
                                                    className="w-full font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
                                                />
                                                <span className="absolute right-0 bottom-2 text-black">
                            *
                          </span>
                                            </div>
                                            {errors.phone && (
                                                <p className="text-red-600 text-sm mt-1">
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Company Information */}
                                <div className="mb-8">
                                    <h2
                                        className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
                                        style={{ color: "#162F65" }}
                                    >
                                        Company Information
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                                                Company Name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                                                />
                                                <span className="absolute right-0 bottom-2 text-black">
                            *
                          </span>
                                            </div>
                                            {errors.companyName && (
                                                <p
                                                    id="companyName-error"
                                                    className="text-red-600 text-sm mt-1"
                                                    role="alert"
                                                >
                                                    {errors.companyName}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                                                Website URL
                                            </label>
                                            <input
                                                type="url"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleInputChange}
                                                placeholder=""
                                                className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                                            />
                                            {errors.website && (
                                                <p
                                                    id="website-error"
                                                    className="text-red-600 text-sm mt-1"
                                                    role="alert"
                                                >
                                                    {errors.website}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                                        />
                                        {errors.address && (
                                            <p className="text-red-600 text-sm mt-1">
                                                {errors.address}
                                            </p>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                        <div>
                                            <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                                            />
                                            {errors.city && (
                                                <p className="text-red-600 text-sm mt-1">
                                                    {errors.city}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                                                State
                                            </label>
                                            <input
                                                type="text"
                                                name="province"
                                                value={formData.province}
                                                onChange={handleInputChange}
                                                className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
                                            />
                                            {errors.province && (
                                                <p className="text-red-600 text-sm mt-1">
                                                    {errors.province}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Topic */}
                                <div className="mb-8">
                                    <h2
                                        className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
                                        style={{ color: "#162F65" }}
                                    >
                                        Topic
                                    </h2>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setIsTopicOpen(!isTopicOpen)}
                                            className="w-full flex items-center justify-between border-b-2 border-black focus:border-blue-500 outline-none pb-2 text-left"
                                        >
                        <span className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                          {formData.topic}
                        </span>
                                            <ChevronDown
                                                className={`w-5 h-5 transition-transform ${
                                                    isTopicOpen ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>
                                        {isTopicOpen && (
                                            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1 max-h-48 overflow-y-auto">
                                                {topics.map((topic, index) => (
                                                    <button
                                                        key={index}
                                                        type="button"
                                                        onClick={() => {
                                                            setFormData((prev) => ({ ...prev, topic }));
                                                            setIsTopicOpen(false);
                                                        }}
                                                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                                                    >
                                                        {topic}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="mb-8">
                                    <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Include a description of your requirements"
                                        rows={2}
                                        className="w-full font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
                                    />
                                    {errors.message && (
                                        <p className="text-red-600 text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* reCAPTCHA */}
                                {/* reCAPTCHA */}
                                <div className="w-full md:w-1/2 md:pl-6 lg:pl-0 xl:pl-0">
                                    <div
                                        className="
                                            flex
                                            justify-center
                                            lg:justify-start
                                            w-full
                                            sm:w-auto
                                            max-w-[260px]
                                            sm:max-w-none
                                            mx-auto
                                            sm:mx-0
                                            transform
                                            scale-95
                                            sm:scale-90
                                            max-[480px]:scale-75
                                            origin-top
                                          "
                                        style={{ minWidth: 180 }}
                                    >
                                        <ReCAPTCHA
                                            sitekey={
                                                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                                                "YOUR_SITE_KEY"
                                            }
                                            onChange={(value: string | null) => {
                                                setRecaptchaValue(value);
                                                if (value) {
                                                    setErrors((prev) => {
                                                        const newErrors = { ...prev };
                                                        delete newErrors.recaptcha; // Remove reCAPTCHA error if it exists
                                                        return newErrors;
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                    {errors.recaptcha && (
                                        <p className="text-red-600 text-sm mt-1">
                                            {errors.recaptcha}
                                        </p>
                                    )}
                                </div>

                                {/* Privacy Policy */}
                                <div className="mb-8">
                                    <div className="flex items-start space-x-2">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            checked={privacyAccepted}
                                            onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                            className="mt-1"
                                        />
                                        <label
                                            htmlFor="privacy"
                                            className="font-poppins font-normal text-[12px] md:text-[14px] lg:text-[15px] leading-[25px] tracking-[0em] text-[#676767]"
                                        >
                                            Our{" "}
                                            <a href="/privacy-policy" className="underline">
                                                privacy policy
                                            </a>{" "}
                                            contains detailed information about our handling of
                                            personal information.
                                        </label>
                                    </div>
                                    {errors.privacy && (
                                        <p className="text-red-600 text-sm mt-1">
                                            {errors.privacy}
                                        </p>
                                    )}
                                </div>

                                {successMessage && (
                                    <div className="mb-6 p-4 bg-green-600 text-white rounded-md">
                                        {successMessage}
                                    </div>
                                )}
                                {errorMessage && (
                                    <div className="mb-6 p-4 bg-red-600 text-white rounded-md">
                                        {errorMessage}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="text-right">
                                    <button
                                        onClick={handleSubmit}
                                        className={`px-8 py-3 font-poppins cursor-pointer font-medium text-sm md:text-base lg:text-lg leading-[100%] tracking-[0em] text-white rounded-md hover:bg-blue-950 hover:scale-105 transition-all duration-300 ${
                                            isLoading ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                        style={{ backgroundColor: "#162F65" }}
                                    >
                                        {isLoading ? "Submitting..." : "Submit My Request"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
            <Quote />
        </div>
    );
};

export default ContactFormClient;
