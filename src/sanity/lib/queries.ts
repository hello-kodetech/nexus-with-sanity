// import client from '../../../client';

export const headerQuery = `*[_type == "navbar"]{
    headerScripts
}`;

export const airAndFreightService =
    `*[_type == "airAndFreight"]{
        hero_section {
            heroTitle,
            "heroImage": heroImage.asset->url
        },
        heading_title,
        heading_description,
        card_1_section {
            card_1_title,
            card_1_subtitle,
            card_1_description,
            card_1_description_2,
            card_1_button_text,
            card_1_button_link,
            "card_1_image": card_1_image.asset->url
        },
        card_2_section {
            card_2_title,
            card_2_subtitle,
            card_2_description,
            card_2_description_2,
            card_2_button_text,
            card_2_button_link,
            "card_2_image": card_2_image.asset->url
        },
        card_3_section {
            card_3_title,
            card_3_subtitle_1,
            card_3_description_1,
            card_3_subtitle_2,
            card_3_description_2,
            card_3_button_text,
            card_3_button_link,
            "card_3_image": card_3_image.asset->url
        },
        bottom_banner {
            banner_title,
            button_text,
            button_link,
            "image": image.asset->url,
            imageAlt
        },
        seo {
            page,
            title,
            description,
            keywords,
            openGraph{
              ogTitle,
              ogDescription,
              "ogImage": ogImage.asset->url
            },
            
            canonicalUrl
        }
    }`;

// export const insights = `
//  *[_type == "Insights"]{
//   hero_section{
//     heroTitle,
//     "heroImage": heroImage.asset->url,
//     },
//   Page_subtitle,
//   main_post->{
//
//     postTitle,
//     preview_title,
//     feature_image
//     Post_short_description,
//     postContent_1,
//     postContent_2,
//     postContent_3,
//     "slug": slug.current,
//     "postImage_1": postImage.asset->url,
//     "postImage_2": postImage.asset->url,
//   },
//
//
//   main_post_button_text,
//   right_section_post_1->{
//     postTitle,
//     preview_title,
//     feature_image
//     Post_short_description,
//     postContent_1,
//     postContent_2,
//     postContent_3,
//     "slug": slug.current,
//     "postImage_1": postImage.asset->url,
//     "postImage_2": postImage.asset->url,
//   },
//
//
//   right_section_post_2->{
//     postTitle,
//     preview_title,
//     feature_image
//     Post_short_description,
//     postContent_1,
//     postContent_2,
//     postContent_3,
//     "slug": slug.current,
//     "postImage_1": postImage.asset->url,
//     "postImage_2": postImage.asset->url,
//   },
//
//
//   latest_insights_title[]->{
//    postTitle,
//     preview_title,
//     feature_image
//     Post_short_description,
//     postContent_1,
//     postContent_2,
//     postContent_3,
//     "slug": slug.current,
//     "postImage_1": postImage.asset->url,
//     "postImage_2": postImage.asset->url,
//   },
//
//   trending_insights_title[]->{
//    postTitle,
//     preview_title,
//     feature_image
//     Post_short_description,
//     postContent_1,
//     postContent_2,
//     postContent_3,
//     "slug": slug.current,
//     "postImage_1": postImage.asset->url,
//     "postImage_2": postImage.asset->url,
//   },
//
//
//   seo {
//             page,
//             title,
//             description,
//             keywords,
//             openGraph{
//               ogTitle,
//               ogDescription,
//               "ogImage": ogImage.asset->url
//             },
//
//             canonicalUrl
//         }
// }
//
// `


export const insights = `
*[_type == "Insights"][0]{
  _id,
  _type,
  hero_section{
    title,
    desktopImage{
      _type,
      asset->{
        _id,
        url
      }
    },
    mobileImage{
      _type,
      asset->{
        _id,
        url
      }
    },
    altText
  },
  Page_subtitle,
  main_post->{
    _id,
    postTitle,
    preview_title,
    feature_image{
      _type,
      asset->{
        _id,
        url
      }
    },
    Post_short_description,
    postContent_1,
    postContent_2,
    postContent_3,
    postImage_1{
      _type,
      asset->{
        _id,
        url
      }
    },
    postImage_2{
      _type,
      asset->{
        _id,
        url
      }
    },
    slug{
      current
    }
  },
  main_post_button_text,
  right_section_post_1->{
    _id,
    postTitle,
    preview_title,
    feature_image{
      _type,
      asset->{
        _id,
        url
      }
    },
    Post_short_description,
    postContent_1,
    postContent_2,
    postContent_3,
    postImage_1{
      _type,
      asset->{
        _id,
        url
      }
    },
    postImage_2{
      _type,
      asset->{
        _id,
        url
      }
    },
    slug{
      current
    }
  },
  right_section_post_2->{
    _id,
    postTitle,
    preview_title,
    feature_image{
      _type,
      asset->{
        _id,
        url
      }
    },
    Post_short_description,
    postContent_1,
    postContent_2,
    postContent_3,
    postImage_1{
      _type,
      asset->{
        _id,
        url
      }
    },
    postImage_2{
      _type,
      asset->{
        _id,
        url
      }
    },
    slug{
      current
    }
  },
  latest_insights_title[]->{
    _id,
    postTitle,
    preview_title,
    feature_image{
      _type,
      asset->{
        _id,
        url
      }
    },
    Post_short_description,
    postContent_1,
    postContent_2,
    postContent_3,
    postImage_1{
      _type,
      asset->{
        _id,
        url
      }
    },
    postImage_2{
      _type,
      asset->{
        _id,
        url
      }
    },
    slug{
      current
    }
  },
  trending_insights_title[]->{
    _id,
    postTitle,
    preview_title,
    feature_image{
      _type,
      asset->{
        _id,
        url
      }
    },
    Post_short_description,
    postContent_1,
    postContent_2,
    postContent_3,
    postImage_1{
      _type,
      asset->{
        _id,
        url
      }
    },
    postImage_2{
      _type,
      asset->{
        _id,
        url
      }
    },
    slug{
      current
    }
  },
  seo{
    metaTitle,
    metaDescription,
    metaImage{
      _type,
      asset->{
        _id,
        url
      }
    }
  }
}
  
`


export const Post =
    `*[_type == "Posts" && slug.current == $slug][0]{
      postTitle,
      preview_title,
      feature_image,
      Post_short_description,
      postContent_1,
      postContent_2,
      postContent_3,
      postContent_4,
      "slug": slug.current,
      postImage_1 {
        asset-> {
          url,
          _id
        }
      },
      postImage_2 {
        asset-> {
          url,
          _id
        }
      },
      postImage_3 {
        asset-> {
          url,
          _id
        }
      },



      seo {
        page,
        title,
        description,
        keywords,
        openGraph { ogTitle, ogDescription, "ogImage": ogImage.asset->url },
        canonicalUrl
      }
      
    }`

export const contactUs = `
 *[_type == "contactUs"]{
 hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  contact_form_title,
  contact_form_description_1,
  contact_form_description_2,
  contact_item_1{
    "icon": icon.asset->url,
    title,
    contact_info
  },
  contact_item_2{
    "icon": icon.asset->url,
    title,
    contact_info
  },
  contact_item_3{
    "icon": icon.asset->url,
    title,
    contact_info
  },
  x_link,
  linkedin_link,
  facebook_link,
  instagram_link,
  map_link,

  
  seo {
            page,
            title,
            description,
            keywords,
            openGraph{
              ogTitle,
              ogDescription,
              "ogImage": ogImage.asset->url
            },
            
            canonicalUrl
        }
}
  
`


export const customs = `
  
  *[_type == "customs"]{
  hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  accordian_section_title,
  accordian_section_description,
  "accordian_section_image": accordian_section_image.asset->url,
  accordian_section_image_alt,
  accordian_1{
    accordian_title,
    accordian_description
  },
  accordian_2{
    accordian_title,
    accordian_description
  },
  accordian_3{
    accordian_title,
    accordian_description
  },
  accordian_4{
    accordian_title,
    accordian_description
  },
  accordian_5{
    accordian_title,
    accordian_description
  },
  accordian_6{
    accordian_title,
    accordian_description
  },
  accordian_7{
    accordian_title,
    accordian_description
  },
  accordian_8{
    accordian_title,
    accordian_description
  },
  accordian_section_subtitle,
  accordian_section_bottom_description,
  accordian_section_button_text,
  card_section{
    card_title,
    card_subtitle,
    card_description,
    card_description_2,
    card_button_text,
    card_button_link,
    "card_image": card_image.asset->url
  },
  bottom_banner{
    banner_title,
    banner_title_2,
    button_text,
    button_link,
    "image": image.asset->url,
    imageAlt
  },

  
 seo {
            page,
            title,
            description,
            keywords,
            openGraph{
              ogTitle,
              ogDescription,
              "ogImage": ogImage.asset->url
            },
            
            canonicalUrl
        }
}
  
`

export const siteSettingsQuery = `
 *[_type == "siteData"]{
  siteName,
  logo{
    "url": asset->url,
    alt: asset->originalFilename
  },
  script,
  favicon{
    "url": asset->url,
    alt: asset->originalFilename
  }
}
`;

// export const footer = `
//   *[_type == "footer"]{
//   footer_description,
//   footer_button_text,
//   footer_button_link,
//   "footer_logo": footer_logo.asset->url,
//   footer_logo_alt,
//   footer_sub_description,
//   footer_column_1_title,
//   footer_links_column_1[]->{
//     nav_item_name,
//     nav_item_link,
//   },
//   footer_column_2_title,
//   footer_links_column_2[]->{
//    nav_item_name,
//     nav_item_link,
//   },

//   seo {
//             page,
//             title,
//             description,
//             keywords,
//             openGraph{
//               ogTitle,
//               ogDescription,
//               "ogImage": ogImage.asset->url
//             },

//             canonicalUrl
//         }
// }
//   `

export const footer = `
  *[_type == "footer"] {
  footer_description,
  footer_button_text,
  footer_button_link,
  "footer_logo": footer_logo.asset->url,
  footer_logo_alt,
  footer_sub_description,
  footer_column_1_title,
  footer_links_column_1[] {
    ...,
    
  },
  footer_column_2_title,
  footer_links_column_2[] {
    ...,
    
  },
  copyrightText,
  footerScripts,
  bottomLinks[]{
    ...,
  }

}
  `

export const freight_quote = `
  
  *[_type == "freight_quote"]{
    quote_form_title_1,
    quote_form_title_2,
    quote_form_subtitle_1,
    quote_form_subtitle_2,
    "quote_form_bottom_logo" : quote_form_bottom_logo.asset->url,
    quote_form_bottom_text
}
  
`



export const homePage = `
  *[_type == "homepage"]{
  
  heroTitle,
  heroDescription,
  hero_button_text,
  hero_button_link,
  heroImagesForDesktop[] {
    asset->{
      url
    }
  },
  heroImagesForMobile[] {
    asset->{
      url
    }
  },
  icon_card_1{
   
    card_title,
    card_description_1,
    card_description_2,
    "card_icon": card_icon.asset->url
  },
  icon_card_2{
    card_title,
    card_description_1,
    card_description_2,
    "card_icon": card_icon.asset->url
  },
  icon_card_3{
    card_title,
    card_description_1,
    card_description_2,
    "card_icon": card_icon.asset->url
  },
  icon_card_4{
    card_title,
    card_description_1,
    card_description_2,
    "card_icon": card_icon.asset->url
  },
  icon_card_5{
    card_title,
    card_description_1,
    card_description_2,
    "card_icon": card_icon.asset->url
  },
  section_2_title,
  section_2_large_title,
  "section_2_image": section_2_image.asset->url,
  section_2_badge_text_row_1,
  section_2_badge_text_row_2,
  section_2_badge_text_row_3,
  section_2_badge_text_row_4,
  section_2_badge_text_row_5,
  section_2_description,
  section_2_description_2,
  section_2_description_3,
  section_2_subtitle,
  section_2_button_text,
  section_2_button_link,
  section_3_title_line_1,
  section_3_title_line_2,
  section_3_column_1_count,
  section_3_column_1_text,
  section_3_column_2_count,
  section_3_column_2_text,
  section_3_column_3_text_1,
  section_3_column_3_text_2,
  section_4_title,
  section_4_description,
  service_card_1{
   
    card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  service_card_2{
    card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  service_card_3{
    card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  service_card_4{
    card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  section_5{
    
    title,
    paragraph1,
    paragraph2,
    buttonText,
    buttonLink,
    "image": image.asset->url,
    imageAlt
    
  },
  section_6{

    title,
    paragraph1,
    paragraph2,
    buttonText,
    buttonLink,
    "image": image.asset->url,
    imageAlt
    
  },

  testimonial_section_title,
  testimonial_section_title_description,
  testimonial_details_section[]->{
    
    testimonial_comment,
    person_name,
    person_designation,
    "person_image": person_image.asset->url,
   
  }

  ,

  
  seo {
            page,
            title,
            description,
            keywords,
            openGraph{
              ogTitle,
              ogDescription,
              "ogImage": ogImage.asset->url
            },
            
            canonicalUrl
        }
}
  `


export const roadAndRail = `
*[_type == "roadAndRail"]{
  hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  heading_title,
  heading_description,
  card_1_section{
    card_1_title,
    card_1_subtitle,
    card_1_description,
    card_1_description_2,
    card_1_description_3,
    card_1_button_text,
    card_1_button_link,
    "card_1_image": card_1_image.asset->url
  },
  card_2_section{
    card_2_title,
    card_2_subtitle,
    card_2_description,
    card_2_description_2,
    card_2_button_text,
    card_2_button_link,
    "card_2_image": card_2_image.asset->url
  },
  bottom_banner{
    banner_title,
    banner_title_2,
    button_text,
    button_link,
    "image": image.asset->url,
    imageAlt
  },

  
  seo {
            page,
            title,
            description,
            keywords,
            openGraph{
              ogTitle,
              ogDescription,
              "ogImage": ogImage.asset->url
            },
            
            canonicalUrl
        }
}
  
`


export const ServiceCardRowSection
    = `
  
 *[_type == "serviceCards"]{
  section_title,
  "card_1_icon": card_1_icon.asset->url,
  card_1_title,
  card_1_button_link,

  "card_2_icon": card_2_icon.asset->url,
  card_2_title,
  card_2_button_link,


  "card_3_icon": card_3_icon.asset->url,
  card_3_title,
  card_3_button_link,

  "card_4_icon": card_4_icon.asset->url,
  card_4_title,
  card_4_button_link,
}
  
`


export const services = `
 *[_type == "services"]{
  hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  section_1_title,
  section_1_description,
  service_card_1{
    
    card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  service_card_2{
    card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  service_card_3{
    card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  service_card_4{
   card_label,
    card_description,
    "card_image": card_image.asset->url,
    card_image_alt,
    card_link
  },
  bottom_banner{
    
    banner_title,
    banner_title_2,
    button_text,
    button_link,
    "image": image.asset->url,
    imageAlt
  },

  
  seo {
            page,
            title,
            description,
            keywords,
            openGraph{
              ogTitle,
              ogDescription,
              "ogImage": ogImage.asset->url
            },
            
            canonicalUrl
        }
}
  
`

export const privacyPolicy = `
 *[_type == "privacyPolicy"]{
  hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  privacy_policy[],

  seo {
    page,
    title,
    description,
    keywords,
    openGraph{
      ogTitle,
      ogDescription,
      "ogImage": ogImage.asset->url
    },
    
    canonicalUrl
  }
}
  
`

export const termsAndConditions = `
 *[_type == "termsAndConditions"]{
  hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  terms_and_conditions[],

  
  seo {
            page,
            title,
            description,
            keywords,
            openGraph{
              ogTitle,
              ogDescription,
              "ogImage": ogImage.asset->url
            },
            
            canonicalUrl
        }
}
  
`


export const trackAndTrace = `
 *[_type == "trackAndTrace"]{
  hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  section_1_title,
  section_1{
   
    title,
    paragraph1,
    paragraph2,
    buttonText,
    buttonLink,
    "image": image.asset->url,
    imageAlt,
    reverseOrder,
  },
  section_2_title,
  section_2_description,
  "section_2_image": section_2_image.asset->url,
  IconCard_1{
    
    card_title,
    card_description_1,
    "card_icon": card_icon.asset->url
  },
  IconCard_2{
    card_title,
    card_description_1,
    "card_icon": card_icon.asset->url
  },
  IconCard_3{
    card_title,
    card_description_1,
    "card_icon": card_icon.asset->url
  },
  IconCard_4{
    card_title,
    card_description_1,
    "card_icon": card_icon.asset->url
  },
  IconCard_5{
    card_title,
    card_description_1,
    "card_icon": card_icon.asset->url
  },
  IconCard_6{
    card_title,
    card_description_1,
    "card_icon": card_icon.asset->url
  },
 contact_first_text,
 underline_text,
 alert_message,
 middle_text,
 contact_number,
 underline_text_2,
 contact_link,
  bottom_banner{
    banner_title,
    banner_title_2,
    button_text,
    button_link,
    "image": image.asset->url,
    imageAlt
  },

  seo {
            page,
            title,
            description,
            keywords,
            openGraph{
              ogTitle,
              ogDescription,
              "ogImage": ogImage.asset->url
            },
            
            canonicalUrl
        }
}




`


export const whyNexus = `
*[_type == "whyNexus"]{
  hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  heading_title,
  heading_description,
  heading_description_2,
  "heading_image": heading_image.asset->url,
  section_1_title,
  cards_section_1{
    card_1_title,
    card_1_description,
    card_2_title,
    card_2_description,
    card_3_title,
    card_3_description
  },
  cards_section_2{
    card_1_title,
    card_1_description,
    card_2_title,
    card_2_description,
    card_3_title,
    card_3_description
  },
  cards_section_3{
    card_title,
    card_description
  },
  section_2_title,
  section_2_description,
  "section_3_image": section_3_image.asset->url,
  section_3_title_1,
  section_3_description_1,
  section_3_main_title,
  section_3_title_2,
  section_3_description_2,
  section_4_title_1,
  section_4_title_2,
  section_4_description_1,
  testimonial_details_section[]->{
   
    testimonial_comment,
    person_name,
    person_designation,
    "person_image": person_image.asset->url,
    
  },
  section_5_card{
    card_title,
    card_subtitle,
    card_description,
    "card_image": card_image.asset->url
  },
  accordian_section_title,
  "accordian_section_image": accordian_section_image.asset->url,
  accordian_1{
    accordian_title,
    accordian_description
  },
  accordian_2{
    accordian_title,
    accordian_description
  },
  accordian_3{
    accordian_title,
    accordian_description
  },
  accordian_4{
    accordian_title,
    accordian_description
  },
  accordian_5{
    accordian_title,
    accordian_description
  },
  "section_7_image": section_7_image.asset->url,
  "section_7_image_for_mobile": section_7_image_for_mobile.asset->url,
  bottom_banner{
    banner_title,
    banner_title_2,
    button_text,
    button_link,
    "image": image.asset->url,
    imageAlt
  },

  
  seo {
            page,
            title,
            description,
            keywords,
            openGraph{
              ogTitle,
              ogDescription,
              "ogImage": ogImage.asset->url
            },
            
            canonicalUrl
        }
}
  
`


export const integratedLogistics = `
 *[_type == "integratedLogistics"]{
  hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  heading_title,
  heading_description,
  card_1_section{
    card_1_title,
    card_1_subtitle,
    card_1_description,
    card_1_description_2,
    card_1_button_text,
    card_1_button_link,
    "card_1_image": card_1_image.asset->url
  },
  card_2_section{
    card_2_title,
    card_2_subtitle,
    card_2_description,
     card_2_description_2,
    card_2_button_text,
    card_2_button_link,
    "card_2_image": card_2_image.asset->url
  },
  card_3_section{
    card_3_title,
    card_3_subtitle,
    card_3_description,
     card_3_description_2,
    card_3_button_text,
    card_3_button_link,
    "card_3_image": card_3_image.asset->url
  },
  card_4_section{
    card_4_title,
    card_4_subtitle,
    card_4_description,
     card_4_description_2,
    card_4_button_text,
    card_4_button_link,
    "card_4_image": card_4_image.asset->url
  },

  bottom_banner{
    banner_title,
    banner_title_2,
    button_text,
    button_link,
    "image": image.asset->url,
    imageAlt
  },
  
  seo {
            page,
            title,
            description,
            keywords,
            openGraph{
              ogTitle,
              ogDescription,
              "ogImage": ogImage.asset->url
            },
            
            canonicalUrl
        }
}
  
`

export const leadership = `
 *[_type == "leadership"]{
  hero_section{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  Page_subtitle,
  terms_member_1{
    
    person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
    description
  },
  terms_member_2{
   person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
    description
  },
  terms_member_3{
   person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
    description
  },
  terms_member_4{
    person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
    description
  },
  terms_member_5{
    person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
    description
  },
  terms_member_6{
   person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
    description
  },
  terms_member_7{
    person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
    description
  },
  terms_member_8{
   person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
    description
  },
  terms_member_9{
    person_name,
    person_designation,
    "person_photo": person_photo.asset->url,
    "person_background_image": person_background_image.asset->url,
    imageAlt,
    link_text,
    link,
    description
  },


  
seo {
      page,
      title,
      description,
      keywords,
      openGraph{
        ogTitle,
        ogDescription,
        "ogImage": ogImage.asset->url
      },
      
      canonicalUrl
  }
}
  
`


export const linkedInSection = `
  
 *[_type == "linkedInSection"]{
  section_title,
  section_description,
  button_link
}
  
`





