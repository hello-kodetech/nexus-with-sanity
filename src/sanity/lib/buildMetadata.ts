// // utils/build-metadata.ts
// import { Metadata } from 'next';
// import { urlFor } from '../../../client';

// // Define the interface for the SEO data coming from Sanity
// interface SanitySeoData {
//     title?: string;
//     description?: string;
//     keywords?: string[];
//     ogTitle?: string;
//     ogDescription?: string;
//     ogImage?: { asset: { _ref: string } };
//     canonicalUrl?: string;
// }

// // Define the interface for the fallback values
// interface FallbackValues {
//     title: string;
//     description: string;
//     keywords: string[];
//     ogImage: string;
//     canonicalUrl: string;
// }

// /**
//  * A reusable utility function to build a Next.js Metadata object from Sanity data.
//  * This function takes the fetched SEO data and a set of fallback values.
//  * @param seoData The 'seo' object fetched from Sanity.
//  * @param fallbacks An object containing default values for all metadata fields.
//  * @returns A complete Next.js Metadata object.
//  */
// export const buildMetadata = (seoData: SanitySeoData | null, fallbacks: FallbackValues): Metadata => {
//     // If the ogImage from Sanity is a string, it's because the GROQ query
//     // manually projected it. We need to handle that, but the correct
//     // approach is to pass the full image object. The urlFor utility
//     // will handle the object correctly.
//     const ogImageUrl = seoData?.ogImage ? urlFor(seoData.ogImage).url() : fallbacks.ogImage;

//     return {
//         // Main SEO fields
//         title: seoData?.title || fallbacks.title,
//         description: seoData?.description || fallbacks.description,
//         keywords: seoData?.keywords?.length ? seoData.keywords : fallbacks.keywords,

//         // Open Graph (Social Sharing) metadata
//         openGraph: {
//             title: seoData?.ogTitle || seoData?.title || fallbacks.title,
//             description: seoData?.ogDescription || seoData?.description || fallbacks.description,
//             images: [
//                 {
//                     url: ogImageUrl,
//                     width: 1200,
//                     height: 630,
//                     alt: seoData?.ogTitle || seoData?.title || fallbacks.title,
//                 },
//             ],
//             url: seoData?.canonicalUrl || fallbacks.canonicalUrl,
//             type: 'website',
//         },

       
//         alternates: {
//             canonical: seoData?.canonicalUrl || fallbacks.canonicalUrl,
//         },
//     };
// };