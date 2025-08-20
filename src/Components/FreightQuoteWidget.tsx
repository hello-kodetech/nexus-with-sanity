// "use client";
// import React, { useEffect, useState } from "react";
// import { ChevronDown } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import ReCAPTCHA from "react-google-recaptcha";
// // import { getFreightQuoteData, getServiceCardRowSectionData } from "@/sanity/lib/api";
// // import { FreightQuoteWidgetData, ServiceCardData } from "@/sanity/types/sanity";
// import { useFreightClient } from '@/Components/useFreightClient';


// interface FreightQuoteWidgetProps {
//   isOpen: boolean;
//   onClose: () => void;
// }


// const { pageData, services, loading, error } = useFreightClient();


// const FreightQuoteWidget: React.FC<FreightQuoteWidgetProps> = ({
//   isOpen,
//   onClose,
// }) => {


//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     companyName: "",
//     email: "",
//     phone: "",
//     shipmentsPerMonth: "10 to 25",
//     mode: "Air Freight Services",
//     originPort: "",
//     destinationPort: "",
//     enquiry: "",
//     privacyAccepted: false,
//   });


//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState<string>("");
//   const [errorMessage, setErrorMessage] = useState<string>("");
//   const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);



//   //   const [pageData, setPageData] = useState<FreightQuoteWidgetData | null>(null);
//   //   const [serviceCardData, setServiceCardData] = useState<ServiceCardData | null>(null);
//   //   const [loading, setLoading] = useState(true);
//   //   const [error, setError] = useState<string | null>(null);

//   //   useEffect(() => {
//   //       const fetchData = async () => {
//   //           try {
//   //               setLoading(true);
//   //               const data = await getFreightQuoteData();
//   //               const serviceData = await getServiceCardRowSectionData();
//   //               console.log("Fetched Freight Quote Data client:", data);
//   //               console.log("Fetched Service Card Data client:", serviceData);
//   //               if (data && serviceData) {
//   //                   setPageData(data);
//   //                   setServiceCardData(serviceData);
//   //                   console.log("Fetched Freight Quote Data client setted:", data);
//   //                   console.log("Fetched Service Card Data client setted:", serviceData);
//   //               } else {
//   //                   setPageData(null);
//   //               }
//   //           } catch (err) {
//   //               console.error("Failed to fetch freight quote client data:", err);
//   //               setError("Failed to load page content.");
//   //           } finally {
//   //               setLoading(false);
//   //           }
//   //       };

//   //       fetchData();
//   //   }, []);

//   //   if (loading) {
//   //       return (
//   //           <div className="min-h-screen flex items-center justify-center">
//   //               <div className="text-lg">Loading...</div>
//   //           </div>
//   //       );
//   //   }

//   //   if (error) {
//   //       return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
//   //   }

//   //   if (!pageData) {
//   //       return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
//   //   }
//   // const services = [
//   //   {
//   //     id: "air-sea",
//   //     title:  serviceCardData?.card_1_title || "AIR & SEA \nFREIGHT",
//   //     subtitle: "",
//   //     image: serviceCardData?.card_1_icon || "/icons/plane-black.svg",
//   //     link: serviceCardData?.card_2_button_link || "/air-and-sea-freight",
//   //   },
//   //   {
//   //     id: "customs",
//   //     title: serviceCardData?.card_4_title || "CUSTOMS CLEARANCE & COMPLIANCE",
//   //     subtitle: "",
//   //     image: serviceCardData?.card_4_icon || "/icons/cart.svg",
//   //     link: serviceCardData?.card_4_button_link || "/customs",
//   //   },
//   //   {
//   //     id: "logistics",
//   //     title: serviceCardData?.card_3_title || "3PL, WAREHOUSING & SPECIAL PROJECTS",
//   //     subtitle: "",
//   //     image: serviceCardData?.card_3_icon || "/icons/box.svg",
//   //     link: serviceCardData?.card_3_button_link || "/Integrated-logistics",
//   //   },
//   //   {
//   //     id: "road-rail",
//   //     title: serviceCardData?.card_2_title || "ROAD & RAIL TRANSPORsT",
//   //     subtitle: "",
//   //     image: serviceCardData?.card_2_icon || "/icons/truck.svg",
//   //     link: serviceCardData?.card_2_button_link || "/road-and-rail",
//   //   },
//   // ].filter(Boolean);
//   if (error) {
//     return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
//   }

//   if (!pageData) {
//     return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
//   }
//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >
//   ) => {
//     // Correctly handle checkbox input by destructuring `type` and `checked`
//     const { name, value, type, checked } = e.target as HTMLInputElement;

//     setFormData((prev) => ({
//       ...prev,
//       // The original code used `type === "checkbox" ? checked : value`, but `privacyAccepted`
//       // wasn't included in the `formData` state object. It has been moved into the `formData` object.
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     // Clear error on input change
//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

//   const validate = () => {
//     const newErrors: { [key: string]: string } = {};
//     const { firstName, lastName, companyName, email, phone, originPort, destinationPort, enquiry, privacyAccepted } = formData;

//     if (!firstName.trim()) {
//       newErrors.firstName = "First name is required";
//     }

//     if (!lastName.trim()) {
//       newErrors.lastName = "Last name is required";
//     }

//     if (!companyName.trim()) {
//       newErrors.companyName = "Company name is required";
//     }

//     if (!email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/.test(
//         email.trim()
//       )
//     ) {
//       newErrors.email =
//         "Email is invalid or must be all lowercase and start with a lowercase letter.";
//     } else if (
//       email.trim().length < 6 ||
//       email.trim().length > 254
//     ) {
//       newErrors.email = "Email must be between 6 and 254 characters.";
//     }

//     if (!phone.trim()) {
//       newErrors.phone = "Phone number is required.";
//     } else if (!/^[\d\s()-]+$/.test(phone.trim())) {
//       newErrors.phone = "Please enter a valid phone number (e.g., 0435231833).";
//     } else if (/^[^0-9]/.test(phone.trim())) {
//       newErrors.phone = "Phone number must start with a digit.";
//     } else if (/\D\D/.test(phone.trim())) {
//       newErrors.phone =
//         "Phone number cannot have consecutive special characters.";
//     } else if (
//       phone.trim().length < 7 ||
//       phone.trim().length > 20
//     ) {
//       newErrors.phone = "Phone number must be between 7 and 20 characters.";
//     }

//     if (originPort.trim().length > 100) {
//       newErrors.originPort =
//         "Origin port or country cannot exceed 100 characters.";
//     }

//     if (destinationPort.trim().length > 100) {
//       newErrors.destinationPort =
//         "Destination port or country cannot exceed 100 characters.";
//     }

//     if (enquiry.trim().length > 500) {
//       newErrors.enquiry = "Enquiry cannot exceed 500 characters.";
//     }

//     // The original code checked for `!formData.privacyAccepted` but this was a separate state variable.
//     // I have moved it into `formData` and updated the check here.
//     if (!privacyAccepted) {
//       newErrors.privacyAccepted = "You must accept the privacy policy";
//     }

//     // if (!recaptchaValue) {
//     //   newErrors.recaptcha = "Please complete the reCAPTCHA verification";
//     // }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSuccessMessage("");
//     setErrorMessage("");

//     if (!validate()) {
//       // If validation fails, stop the submission process.
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // NOTE: The original code had two separate submission blocks, one for Sanity
//       // and one for a custom API endpoint. The logic was confusing and led to bugs.
//       // This refactored version combines them into a single, logical flow.
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           formType: "freightQuote",
//           ...formData,
//           recaptchaValue,
//         }),
//       });

//       if (response.ok) {
//         // Success message for the user
//         setSuccessMessage(
//           "Thank you for your freight quote request! Our team will get in touch with you soon."
//         );

//         // Reset form after successful submission
//         setFormData({
//           firstName: "",
//           lastName: "",
//           companyName: "",
//           email: "",
//           phone: "",
//           shipmentsPerMonth: "10 to 25",
//           mode: "Air Freight Services",
//           originPort: "",
//           destinationPort: "",
//           enquiry: "",
//           privacyAccepted: false,
//         });

//         // The original code tried to reset `setPrivacyAccepted(false)` which
//         // was a separate state variable. Now it's part of `formData`.
//         // The original `setRecaptchaValue(null)` is still correct.
//         setRecaptchaValue(null);

//         // Auto-clear success message after 10 seconds
//         setTimeout(() => {
//           setSuccessMessage("");
//         }, 10000);
//       } else {
//         const errorData = await response.json();
//         setErrorMessage(
//           `Failed to send request: ${errorData.message || "Please try again later."
//           }`
//         );
//       }
//     } catch (error) {
//       setErrorMessage(
//         "An unexpected error occurred. Please try again or contact support."
//       );
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//       // Auto-clear error message after 5 seconds
//       setTimeout(() => {
//         setErrorMessage("");
//       }, 5000);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className="fixed inset-0 backdrop-blur-[3px] bg-black/10 z-50 transition-opacity duration-300"
//         onClick={onClose}
//       />

//       {/* Widget */}
//       <div
//         className={`fixed right-0 top-0 h-full w-full md:w-3/5 bg-[#1B1B1B] z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 left-4 w-8 h-8 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-200 flex items-center justify-center z-10"
//           aria-label="Close"
//         >
//           ×
//         </button>

//         {/* Content */}
//         <div className="flex justify-center items-center min-h-screen px-4 sm:px-8 py-10">
//           <div className="w-full max-w-3xl p-6 sm:p-8 bg-[#1B1B1B]">
//             {/* Header */}
//             <div className="mb-8">
//               <h2 className="font-poppins font-bold text-[32px] sm:text-[42px] lg:text-[51px] text-white leading-[69px] mb-4">
//                 {/* Request a<br />
//                 freight rate today */}

//                 {pageData.quote_form_title_1 || "Request a"}
//               </h2>
//               <h2 className="font-poppins font-bold text-[32px] sm:text-[42px] lg:text-[51px] text-white leading-[69px] mb-4">
//                 {/* Request a<br />
//                 freight rate today */}

//                 {pageData.quote_form_title_2 || "freight rate today"}
//               </h2>
//               <p className="font-poppins font-medium text-[14px] sm:text-[16px] lg:text-[19px] leading-[29px] tracking-[0.003em] text-gray-300 mb-2">
//                 {pageData.quote_form_subtitle_1 || " Tell us as much as you can... Nothing is too complex for us..."}
//               </p>
//               <p className="font-poppins font-medium italic text-[14px] sm:text-[16px] lg:text-[19px] leading-[29px] tracking-[0.003em] text-gray-300">
//                 {pageData.quote_form_subtitle_2 || "Commercial shipments only - no personal effects."}
//               </p>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-6 lg:mt-22">
//               {/* Name Fields */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="firstName"
//                     className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
//                   >
//                     First Name*
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     required
//                     className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.firstName
//                       ? "border-red-500 text-red-500"
//                       : "border-[#A5A5A5] text-white"
//                       }`}
//                   />
//                   {errors.firstName && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.firstName}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="lastName"
//                     className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
//                   >
//                     Last Name*
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     required
//                     className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.lastName
//                       ? "border-red-500 text-red-500"
//                       : "border-[#A5A5A5] text-white"
//                       }`}
//                   />
//                   {errors.lastName && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.lastName}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Company Name */}
//               <div>
//                 <label
//                   htmlFor="companyName"
//                   className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
//                 >
//                   Company Name*
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   name="companyName"
//                   value={formData.companyName}
//                   onChange={handleInputChange}
//                   required
//                   className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.companyName
//                     ? "border-red-500 text-red-500"
//                     : "border-[#A5A5A5] text-white"
//                     }`}
//                 />
//                 {errors.companyName && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.companyName}
//                   </p>
//                 )}
//               </div>

//               {/* Email and Phone */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
//                   >
//                     Company Email*
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.email
//                       ? "border-red-500 text-red-500"
//                       : "border-[#A5A5A5] text-white"
//                       }`}
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//                   )}
//                   <p className="text-xs text-gray-400 mb-2 mt-2">
//                     Kindly use your company email address to <br /> your enquiry
//                     isn&#39;t marked as spam.
//                   </p>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
//                   >
//                     Phone Number*
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     placeholder=""
//                     className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors text-white placeholder-gray-400 ${errors.phone
//                       ? "border-red-500 text-red-500"
//                       : "border-[#A5A5A5] text-white"
//                       }`}
//                   />
//                   {errors.phone && (
//                     <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Shipments and Mode */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 <div className="relative">
//                   <label
//                     htmlFor="shipmentsPerMonth"
//                     className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
//                   >
//                     Number of shipments per month
//                   </label>
//                   <select
//                     id="shipmentsPerMonth"
//                     name="shipmentsPerMonth"
//                     value={formData.shipmentsPerMonth}
//                     onChange={handleInputChange}
//                     className="w-full font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] bg-transparent border-b-[1px] border-[#A5A5A5] text-[#647FBB] py-2 pr-8 focus:outline-none focus:border-white transition-colors appearance-none"
//                   >
//                     <option
//                       value="10 to 25"
//                       className="bg-[#2A2A2A] text-white"

//                     >
//                       10 to 25
//                     </option>
//                     <option
//                       value="25 to 50"
//                       className="bg-[#2A2A2A] text-white"
//                     >
//                       25 to 50
//                     </option>
//                     <option
//                       value="More than 50"
//                       className="bg-[#2A2A2A] text-white"
//                     >
//                       More than 50
//                     </option>
//                   </select>
//                   <ChevronDown
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
//                     stroke="#A5A5A5"
//                     size={17}
//                   />
//                 </div>
//                 <div className="relative">
//                   <label
//                     htmlFor="mode"
//                     className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
//                   >
//                     Mode
//                   </label>
//                   <select
//                     id="mode"
//                     name="mode"
//                     value={formData.mode}
//                     onChange={handleInputChange}
//                     className="w-full font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] bg-transparent border-b-[1px] border-[#A5A5A5] text-[#647FBB] py-2 pr-8 focus:outline-none focus:border-white transition-colors appearance-none"
//                   >
//                     <option
//                       value="Air Freight Services"
//                       className="bg-[#2A2A2A] text-white"
//                     >
//                       Air Freight Services
//                     </option>
//                     <option
//                       value="Sea Freight Services"
//                       className="bg-[#2A2A2A] text-white"
//                     >
//                       Sea Freight Services
//                     </option>
//                     <option
//                       value="Sea-Air Combination"
//                       className="bg-[#2A2A2A] text-white"
//                     >
//                       Sea-Air Combination
//                     </option>
//                     <option
//                       value="Book Road Transport"
//                       className="bg-[#2A2A2A] text-white"
//                     >
//                       Book Road Transport
//                     </option>
//                     <option
//                       value="Explore Rail Options"
//                       className="bg-[#2A2A2A] text-white"
//                     >
//                       Explore Rail Options
//                     </option>
//                     <option value="Other" className="bg-[#2A2A2A] text-white">
//                       Other
//                     </option>
//                   </select>
//                   <ChevronDown
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
//                     stroke="#A5A5A5"
//                     size={17}
//                   />
//                 </div>
//               </div>

//               {/* Origin and Destination */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="originPort"
//                     className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
//                   >
//                     Origin Port or Country
//                   </label>
//                   <input
//                     type="text"
//                     id="originPort"
//                     name="originPort"
//                     value={formData.originPort}
//                     onChange={handleInputChange}
//                     className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.originPort
//                       ? "border-red-500 text-red-500"
//                       : "border-[#A5A5A5] text-white"
//                       }`}
//                   />
//                   {errors.originPort && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.originPort}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="destinationPort"
//                     className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
//                   >
//                     Destination port or Country
//                   </label>
//                   <input
//                     type="text"
//                     id="destinationPort"
//                     name="destinationPort"
//                     value={formData.destinationPort}
//                     onChange={handleInputChange}
//                     className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.destinationPort
//                       ? "border-red-500 text-red-500"
//                       : "border-[#A5A5A5] text-white"
//                       }`}
//                   />
//                   {errors.destinationPort && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.destinationPort}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Enquiry */}
//               <div>
//                 <label
//                   htmlFor="enquiry"
//                   className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
//                 >
//                   Enquiry
//                 </label>
//                 <textarea
//                   id="enquiry"
//                   name="enquiry"
//                   value={formData.enquiry}
//                   onChange={handleInputChange}
//                   rows={2}
//                   placeholder="Include a description of the cargo"
//                   className="w-full font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] bg-transparent border-b-[1px] border-[#A5A5A5] text-white placeholder-[#647FBB] py-2 px-0 focus:outline-none focus:border-white transition-colors resize-none"
//                 />
//                 {errors.enquiry && (
//                   <p className="text-red-500 text-xs mt-1">{errors.enquiry}</p>
//                 )}
//               </div>

//               {/* Privacy Policy */}
//               <div className="flex items-start gap-3">
//                 <input
//                   type="checkbox"
//                   id="privacyAccepted"
//                   name="privacyAccepted"
//                   checked={formData.privacyAccepted}
//                   onChange={handleInputChange}
//                   className="mt-1 w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label
//                   htmlFor="privacyAccepted"
//                   className="font-poppins font-normal text-[12px] md:text-[14px] lg:text-[15px] leading-[25px] tracking-[0em] text-white"
//                 >
//                   Our{" "}
//                   <a href="/privacy-policy" className="underline">
//                     privacy policy
//                   </a>{" "}
//                   contains detailed information about our handling of personal
//                   information.
//                 </label>
//               </div>

//               {/* reCAPTCHA */}
//               <div className="mb-4">
//                 <ReCAPTCHA
//                   sitekey={
//                     process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
//                     "YOUR_SITE_KEY"
//                   }
//                   onChange={(value: string | null) => {
//                     setRecaptchaValue(value);
//                     if (value) {
//                       setErrors((prev) => {
//                         const newErrors = { ...prev };
//                         delete newErrors.recaptcha;
//                         return newErrors;
//                       });
//                     }
//                   }}
//                 />
//                 {errors.recaptcha && (
//                   <p className="text-red-600 text-sm mt-1">
//                     {errors.recaptcha}
//                   </p>
//                 )}
//               </div>

//               {successMessage && (
//                 <div className="mb-6 p-4 bg-green-600 text-white rounded-md">
//                   {successMessage}
//                 </div>
//               )}
//               {errorMessage && (
//                 <div className="mb-6 p-4 bg-red-600 text-white rounded-md">
//                   {errorMessage}
//                 </div>
//               )}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`ml-auto block px-8 py-3 font-poppins font-medium text-base md:text-lg lg:text-xl leading-[100%] tracking-[0em] text-white rounded-md hover:bg-blue-950 hover:scale-105 transition-all duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                 style={{ backgroundColor: "#162F65" }}
//               >
//                 {isLoading ? "Submitting..." : "Submit"}
//               </button>
//             </form>

//             {/* Footer Icons */}
//             <div className="grid grid-cols-2 gap-6 mt-12 pt-8 xl:flex xl:flex-row xl:flex-wrap xl:justify-start">
//               {services.map((service) => (
//                 <Link
//                   key={service.id}
//                   href={service.link}
//                   className="w-36 h-36 flex flex-col items-center justify-center p-3 rounded-md transition-all duration-200 hover:bg-[#0F0F0F]"
//                 >
//                   <div className="w-16 h-16 mb-2 flex items-center justify-center">
//                     <Image
//                       src={service.image}
//                       alt={service.title}
//                       width={64}
//                       height={64}
//                       className="object-contain filter invert"
//                     />
//                   </div>
//                   <div className="font-poppins font-medium text-[12px] sm:text-[13px] lg:text-[14px] leading-[19px] tracking-[0.02em] text-center text-gray-300">
//                     <div>{service.title}</div>
//                     <div>{service.subtitle}</div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Company Logo/Info */}
//             <div className="mt-12 pt-8 flex items-center gap-10">
//               <div className="w-24 h-auto">
//                 <Image
//                   src={pageData.quote_form_bottom_logo || "/footer_logo.png"}
//                   alt="neXus Logo"
//                   width={96}
//                   height={40}
//                   className="object-contain"
//                 />
//               </div>
//               <div className="font-poppins font-medium text-gray-300 leading-[17px] text-[11px] sm:text-[12px] lg:text-[13px] leading-tight">
//                 {pageData.quote_form_bottom_text || "A proudly Australian logistics pit crew with a global reach,<br /> delivering agile, reliable freight solutions that keep your <br /> supply chain moving."}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FreightQuoteWidget;
"use client";
import React, {  useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useFreightClient } from '@/Components/useFreightClient';

interface FreightQuoteWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreightQuoteWidget: React.FC<FreightQuoteWidgetProps> = ({
  isOpen,
  onClose,
}) => {
  const { pageData, services, loading, error } = useFreightClient();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    shipmentsPerMonth: "10 to 25",
    mode: "Air Freight Services",
    originPort: "",
    destinationPort: "",
    enquiry: "",
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const { firstName, lastName, companyName, email, phone, originPort, destinationPort, enquiry, privacyAccepted } = formData;

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/.test(
        email.trim()
      )
    ) {
      newErrors.email =
        "Email is invalid or must be all lowercase and start with a lowercase letter.";
    } else if (
      email.trim().length < 6 ||
      email.trim().length > 254
    ) {
      newErrors.email = "Email must be between 6 and 254 characters.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[\d\s()-]+$/.test(phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (e.g., 0435231833).";
    } else if (/^[^0-9]/.test(phone.trim())) {
      newErrors.phone = "Phone number must start with a digit.";
    } else if (/\D\D/.test(phone.trim())) {
      newErrors.phone =
        "Phone number cannot have consecutive special characters.";
    } else if (
      phone.trim().length < 7 ||
      phone.trim().length > 20
    ) {
      newErrors.phone = "Phone number must be between 7 and 20 characters.";
    }

    if (originPort.trim().length > 100) {
      newErrors.originPort =
        "Origin port or country cannot exceed 100 characters.";
    }

    if (destinationPort.trim().length > 100) {
      newErrors.destinationPort =
        "Destination port or country cannot exceed 100 characters.";
    }

    if (enquiry.trim().length > 500) {
      newErrors.enquiry = "Enquiry cannot exceed 500 characters.";
    }

    if (!privacyAccepted) {
      newErrors.privacyAccepted = "You must accept the privacy policy";
    }

     if (!recaptchaValue) {
      newErrors.recaptcha = "Please complete the reCAPTCHA verification";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "freightQuote",
          ...formData,
          recaptchaValue,
        }),
      });
      console.log("Response:", response);

      if (response.ok) {
        setSuccessMessage(
          "Thank you for your freight quote request! Our team will get in touch with you soon."
        );


        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          email: "",
          phone: "",
          shipmentsPerMonth: "10 to 25",
          mode: "Air Freight Services",
          originPort: "",
          destinationPort: "",
          enquiry: "",
          privacyAccepted: false,
        });

        setRecaptchaValue(null);

        setTimeout(() => {
          setSuccessMessage("");
        }, 10000);
      } else {
        const errorData = await response.json();
        setErrorMessage(
          `Failed to send request: ${errorData.message || "Please try again later."}`
        );
      }
    } catch (error) {
      setErrorMessage(
        "An unexpected error occurred. Please try again or contact support."
      );
      console.error(error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  if (!isOpen) return null;

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/10 z-50">
        <div className="text-lg text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed right-0 top-0 h-full w-full md:w-3/5 bg-[#1B1B1B] z-50 p-6 text-red-600 text-center">
        {error}
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="fixed right-0 top-0 h-full w-full md:w-3/5 bg-[#1B1B1B] z-50 p-6 text-white text-center">
        No content available.
      </div>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 backdrop-blur-[3px] bg-black/10 z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Widget */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-3/5 bg-[#1B1B1B] z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-200 flex items-center justify-center z-10"
          aria-label="Close"
        >
          ×
        </button>

        {/* Content */}
        <div className="flex justify-center items-center min-h-screen px-4 sm:px-8 py-10">
          <div className="w-full max-w-3xl p-6 sm:p-8 bg-[#1B1B1B]">
            {/* Header */}
            <div className="mb-8">
              <h2 className="font-poppins font-bold text-[32px] sm:text-[42px] lg:text-[51px] text-white leading-[69px] mb-4">
                {pageData.quote_form_title_1 || "Request a"}
              </h2>
              <h2 className="font-poppins font-bold text-[32px] sm:text-[42px] lg:text-[51px] text-white leading-[69px] mb-4">
                {pageData.quote_form_title_2 || "freight rate today"}
              </h2>
              <p className="font-poppins font-medium text-[14px] sm:text-[16px] lg:text-[19px] leading-[29px] tracking-[0.003em] text-gray-300 mb-2">
                {pageData.quote_form_subtitle_1 || "Tell us as much as you can... Nothing is too complex for us..."}
              </p>
              <p className="font-poppins font-medium italic text-[14px] sm:text-[16px] lg:text-[19px] leading-[29px] tracking-[0.003em] text-gray-300">
                {pageData.quote_form_subtitle_2 || "Commercial shipments only - no personal effects."}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 lg:mt-22">
              {/* Name Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.firstName
                      ? "border-red-500 text-red-500"
                      : "border-[#A5A5A5] text-white"
                      }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.lastName
                      ? "border-red-500 text-red-500"
                      : "border-[#A5A5A5] text-white"
                      }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                >
                  Company Name*
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.companyName
                    ? "border-red-500 text-red-500"
                    : "border-[#A5A5A5] text-white"
                    }`}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Company Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.email
                      ? "border-red-500 text-red-500"
                      : "border-[#A5A5A5] text-white"
                      }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                  <p className="text-xs text-gray-400 mb-2 mt-2">
                    Kindly use your company email address to <br /> your enquiry
                    isn&#39;t marked as spam.
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder=""
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors text-white placeholder-gray-400 ${errors.phone
                      ? "border-red-500 text-red-500"
                      : "border-[#A5A5A5] text-white"
                      }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Shipments and Mode */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="relative">
                  <label
                    htmlFor="shipmentsPerMonth"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Number of shipments per month
                  </label>
                  <select
                    id="shipmentsPerMonth"
                    name="shipmentsPerMonth"
                    value={formData.shipmentsPerMonth}
                    onChange={handleInputChange}
                    className="w-full font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] bg-transparent border-b-[1px] border-[#A5A5A5] text-[#647FBB] py-2 pr-8 focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option
                      value="10 to 25"
                      className="bg-[#2A2A2A] text-white"
                    >
                      10 to 25
                    </option>
                    <option
                      value="25 to 50"
                      className="bg-[#2A2A2A] text-white"
                    >
                      25 to 50
                    </option>
                    <option
                      value="More than 50"
                      className="bg-[#2A2A2A] text-white"
                    >
                      More than 50
                    </option>
                  </select>
                  <ChevronDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    stroke="#A5A5A5"
                    size={17}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="mode"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Mode
                  </label>
                  <select
                    id="mode"
                    name="mode"
                    value={formData.mode}
                    onChange={handleInputChange}
                    className="w-full font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] bg-transparent border-b-[1px] border-[#A5A5A5] text-[#647FBB] py-2 pr-8 focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option
                      value="Air Freight Services"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Air Freight Services
                    </option>
                    <option
                      value="Sea Freight Services"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Sea Freight Services
                    </option>
                    <option
                      value="Sea-Air Combination"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Sea-Air Combination
                    </option>
                    <option
                      value="Book Road Transport"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Book Road Transport
                    </option>
                    <option
                      value="Explore Rail Options"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Explore Rail Options
                    </option>
                    <option value="Other" className="bg-[#2A2A2A] text-white">
                      Other
                    </option>
                  </select>
                  <ChevronDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    stroke="#A5A5A5"
                    size={17}
                  />
                </div>
              </div>

              {/* Origin and Destination */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="originPort"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Origin Port or Country
                  </label>
                  <input
                    type="text"
                    id="originPort"
                    name="originPort"
                    value={formData.originPort}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.originPort
                      ? "border-red-500 text-red-500"
                      : "border-[#A5A5A5] text-white"
                      }`}
                  />
                  {errors.originPort && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.originPort}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="destinationPort"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Destination port or Country
                  </label>
                  <input
                    type="text"
                    id="destinationPort"
                    name="destinationPort"
                    value={formData.destinationPort}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${errors.destinationPort
                      ? "border-red-500 text-red-500"
                      : "border-[#A5A5A5] text-white"
                      }`}
                  />
                  {errors.destinationPort && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.destinationPort}
                    </p>
                  )}
                </div>
              </div>

              {/* Enquiry */}
              <div>
                <label
                  htmlFor="enquiry"
                  className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                >
                  Enquiry
                </label>
                <textarea
                  id="enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Include a description of the cargo"
                  className="w-full font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] bg-transparent border-b-[1px] border-[#A5A5A5] text-white placeholder-[#647FBB] py-2 px-0 focus:outline-none focus:border-white transition-colors resize-none"
                />
                {errors.enquiry && (
                  <p className="text-red-500 text-xs mt-1">{errors.enquiry}</p>
                )}
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacyAccepted"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="privacyAccepted"
                  className="font-poppins font-normal text-[12px] md:text-[14px] lg:text-[15px] leading-[25px] tracking-[0em] text-white"
                >
                  Our{" "}
                  <a href="/privacy-policy" className="underline">
                    privacy policy
                  </a>{" "}
                  contains detailed information about our handling of personal
                  information.
                </label>
              </div>

              {/* reCAPTCHA */}
              <div className="mb-4">
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
                        delete newErrors.recaptcha;
                        return newErrors;
                      });
                    }
                  }}
                />
                {errors.recaptcha && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.recaptcha}
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
              <button
                type="submit"
                disabled={isLoading}
                className={`ml-auto block px-8 py-3 font-poppins font-medium text-base md:text-lg lg:text-xl leading-[100%] tracking-[0em] text-white rounded-md hover:bg-blue-950 hover:scale-105 transition-all duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                style={{ backgroundColor: "#162F65" }}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>

            {/* Footer Icons */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 xl:flex xl:flex-row xl:flex-wrap xl:justify-start">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.link}
                  className="w-36 h-36 flex flex-col items-center justify-center p-3 rounded-md transition-all duration-200 hover:bg-[#0F0F0F]"
                >
                  <div className="w-16 h-16 mb-2 flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="object-contain filter invert"
                    />
                  </div>
                  <div className="font-poppins font-medium text-[12px] sm:text-[13px] lg:text-[14px] leading-[19px] tracking-[0.02em] text-center text-gray-300">
                    <div>{service.title}</div>
                    <div>{service.subtitle}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Company Logo/Info */}
            <div className="mt-12 pt-8 flex items-center gap-10">
              <div className="w-24 h-auto">
                <Image
                  src={pageData.quote_form_bottom_logo || "/footer_logo.png"}
                  alt="neXus Logo"
                  width={96}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="font-poppins font-medium text-gray-300 leading-[17px] text-[11px] sm:text-[12px] lg:text-[13px] leading-tight">
                {pageData.quote_form_bottom_text || "A proudly Australian logistics pit crew with a global reach,<br /> delivering agile, reliable freight solutions that keep your <br /> supply chain moving."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreightQuoteWidget;