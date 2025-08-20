// import { TypedObject } from "@portabletext/types";
import { PortableTextBlock } from "@portabletext/react";
import { TypedObject} from "@sanity/types";
// import { desc } from "framer-motion/client";


// air and freight data interface
export interface CardSection {
  card_1_title?: string;
  card_1_subtitle?: string;
  card_1_description?: string;
  card_1_description_2?: string;
  card_1_button_text?: string;
  card_1_button_link?: string;
  card_1_image?: string;
  card_2_title?: string;
  card_2_subtitle?: string;
  card_2_description?: string;
  card_2_description_2?: string;
  card_2_button_text?: string;
  card_2_button_link?: string;
  card_2_image?: string;
  card_3_title?: string;
  card_3_subtitle_1?: string;
  card_3_description_1?: string;
  card_3_subtitle_2?: string;
  card_3_description_2?: string;
  card_3_button_text?: string;
  card_3_button_link?: string;
  card_3_image?: string;
}

export interface header{
  header_scripts:string;
}

// export interface SEOData {
//   page?: string;
//   title?: string;
//   description?: string;
//   keywords?: string[];
//   ogTitle?: string;
//   ogDescription?: string;
//   ogImage?: any;
//   canonicalUrl?: string;
// }

export interface BottomBanner {
  banner_title?: string;
  banner_title_2?: string;
  button_text?: string;
  button_link?: string;
  image?: string;
  imageAlt?: string;
}

export interface HeroSection {
  heroTitle?: string;
  heroImage?: string;
}

export interface AirAndFreightData {
  hero_section?: HeroSection;
  heading_title?: string;
  heading_description?: string;
  card_1_section?: CardSection;
  card_2_section?: CardSection;
  card_3_section?: CardSection;
  bottom_banner?: BottomBanner;
  seo?: SeoData; 
}


export interface FreightQuoteWidgetData {
  quote_form_title_1?: string;
  quote_form_title_2?: string;
  quote_form_subtitle_1?: string;
  quote_form_subtitle_2?: string;
  quote_form_bottom_logo?: string;
  quote_form_bottom_text?: string;
}


// contact data interface

export interface contactItem {
  icon?: string;
  title?: string;
  contact_info?: string;
}

export interface openGraph {
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { asset: { _ref: string } };
}

export interface SeoData {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  openGraph?: openGraph;
}
// export interface HeroSection {
//   heroTitle?: string;
//   heroImage?: string;
// }

export interface ContactUspageData {
  hero_section?: HeroSection;
  contact_form_title: string;
  contact_form_description_1: string;
  contact_form_description_2: string;
  contact_item_1: contactItem;
  contact_item_2: contactItem;
  contact_item_3: contactItem;
  x_link?: string;
  linkedin_link?: string;
  facebook_link?: string;
  instagram_link?: string;
  map_link?: string;
  seo?: SeoData; 

}

export interface FormData {
  privacyPolicyAccepted: boolean;
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

export interface ServiceCardData {
  section_title?: string;
  card_1_icon?: string;
  card_1_title?: string;
  card_1_button_link?: string;
  card_2_icon?: string;
  card_2_title?: string;
  card_2_button_link?: string;
  card_3_icon?: string;
  card_3_title?: string;
  card_3_button_link?: string;
  card_4_icon?: string;
  card_4_title?: string;
  card_4_button_link?: string;
}




// Customs data interface

// export interface BottomBanner {
//   banner_title?: string;
//   button_text?: string;
//   button_link?: string;
//   image?: string;
//   imageAlt?: string;
// }

export interface AccordianItem {
  accordian_title?: string;
  accordian_description?: string;
}

// export interface HeroSection {
//     heroTitle?: string;
//     heroImage?: string;
// }

export interface CustomsData {
  hero_section?: HeroSection;
  heading_title?: string;
  heading_description?: string;
  accordian_section_title?: string;
  accordian_section_description?: string;
  accordian_section_image?: string;
  accordian_section_image_alt?: string;
  accordian_1?: AccordianItem;
  accordian_2?: AccordianItem;
  accordian_3?: AccordianItem;
  accordian_4?: AccordianItem;
  accordian_5?: AccordianItem;
  accordian_6?: AccordianItem;
  accordian_7?: AccordianItem;
  accordian_8?: AccordianItem;
  accordian_section_subtitle?: string;
  accordian_section_bottom_description?: string;
  accordian_section_button_text?: string;
  card_section?: {
    card_title?: string;
    card_subtitle?: string;
    card_description?: string;
    card_description_2?: string;
    card_button_text?: string;
    card_button_link?: string;
    card_image?: string;
  };
  bottom_banner?: BottomBanner;
  seo?: SeoData;
}

export interface siteSettings {
  siteName?: string;
  logo?: {
    url?: string;
    alt?: string;
  };
  script?: string;
  favicon?: {
    url?: string;
    alt?: string;
  };
}


export interface HomePageData {

  seo?: SeoData;
}

export interface FooterLink {
  nav_item_name: string;
  nav_item_link: string;
}

export interface footerData {
  footer_description?: string;
  footer_button_text?: string;
  footer_button_link?: string;
  footer_logo?: string;
  footer_logo_alt?: string;
  footer_sub_description?: string;
  footer_column_1_title?: string;
  footer_links_column_1?: FooterLink[];
  footer_column_2_title?: string;
  footer_links_column_2?: FooterLink[];
  bottomLinks?: {
    label:string,
    href:string,
  }[];
  copyrightText?: string;
  footerScripts?: string[];

}

export interface insightData {
  hero_section?: HeroSection;
  Page_subtitle?: string;
  main_post?: {
    postTitle?: string;
    Post_short_description?: string;
    postContent?: string;
    slug?: string;
    postImage?: string;
  };

  main_post_button_text?: string;
  right_section_post_1?: {
    postTitle?: string;
    Post_short_description?: string;
    postContent?: string;
    slug?: string;
    postImage?: string;
  };

  right_section_post_2?: {
    postTitle?: string;
    Post_short_description?: string;
    postContent?: string;
    slug?: string;
    postImage?: string;
  };

  latest_insights_title?: {
    postTitle?: string;
    Post_short_description?: string;
    postContent?: string;
    slug?: string;
    postImage?: string;
  }[];

  trending_insights_title?: {
    postTitle?: string;
    Post_short_description?: string;
    postContent?: string;
    slug?: string;
    postImage?: string;
  }[];
  seo?: SeoData;
}


// insight inner (posts) interface
export interface RelatedPost {
  postTitle: string;
  Post_short_description: string;
  postContent: string;
  slug: string;
  postImage: string;
}


// export interface InsightsPageData {
//     hero_section?: HeroSection;
//     Page_subtitle?: string;
// }

export interface PostDetails {
  postTitle: string;
  Post_short_description: string;
  postContent_1: TypedObject;
  postContent_2: TypedObject;
  postContent_3: TypedObject;
  postContent_4: TypedObject;
  postImage_1: string;
  postImage_2: string;
  postImage_3: string;
  slug: string;
  // postImage: string;
  related_posts?: RelatedPost[];
}




// intergrated logistics data interface
// export interface HeroSection {
//     heroTitle?: string;
//     heroImage?: string;
// }

export interface IntegratedLogisticsData {
  hero_section?: HeroSection;
  heading_title?: string;
  heading_description?: string;
  card_1_section?: {
    card_1_title?: string;
    card_1_subtitle?: string;
    card_1_description?: string;
    card_1_description_2?: string;
    card_1_button_text?: string;
    card_1_button_link?: string;
    card_1_image?: string;
  },



  card_2_section?: {
    card_2_title?: string;
    card_2_subtitle?: string;
    card_2_description?: string;
    card_2_description_2?: string;
    card_2_button_text?: string;
    card_2_button_link?: string;
    card_2_image?: string;
  },

  card_3_section?: {
    card_3_title?: string;
    card_3_subtitle?: string;
    card_3_description?: string;
    card_3_description_2?: string;
    card_3_button_text?: string;
    card_3_button_link?: string;
    card_3_image?: string;
  },

  card_4_section?: {
    card_4_title?: string;
    card_4_subtitle?: string;
    card_4_description?: string;
    card_4_description_2?: string;
    card_4_button_text?: string;
    card_4_button_link?: string;
    card_4_image?: string;
  }

  bottom_banner?: {
    banner_title?: string;
    banner_title_2?: string;
    button_text?: string;
    button_link?: string;
    image?: string;
    imageAlt?: string;
  }

  seo?: SeoData;
}



// leadership data interface
// export interface HeroSection {
//   heroTitle?: string;
//   heroImage?: string;
// }


export interface TeamMemberSanityData {
  person_name?: string;
  person_designation?: string;
  person_photo?: string;
  person_background_image?: string;
  imageAlt?: string;
  link_text?: string;
  link?: string;
  description?: string;
}

export interface LeadershipPageData {
  hero_section?: HeroSection;
  Page_subtitle?: string;
  terms_member_1?: TeamMemberSanityData;
  terms_member_2?: TeamMemberSanityData;
  terms_member_3?: TeamMemberSanityData;
  terms_member_4?: TeamMemberSanityData;
  terms_member_5?: TeamMemberSanityData;
  terms_member_6?: TeamMemberSanityData;
  terms_member_7?: TeamMemberSanityData;
  terms_member_8?: TeamMemberSanityData;
  terms_member_9?: TeamMemberSanityData;
  seo?: SeoData;
}

// Unified Team Member type for easy mapping
export interface TeamMember {
  id: number;
  name: string;
  title: string;
  flipBg: string;
  descriptionMain: string;
  linkText: string;
  linkUrl: string;
  image: string;
  imageAlt?: string;
}



// privacy policy data interface
// export interface HeroSection {
//     heroTitle?: string;
//     heroImage?: string;
// }
export interface PrivacyPolicyData {
  hero_section?: HeroSection;
  privacy_policy?: PortableTextBlock[];
  seo?: SeoData;
}



// road and rail data interface
// export interface HeroSection {
//     heroTitle?: string;
//     heroImage?: string;
// }

export interface roadAndRailData {
  hero_section?: HeroSection;
  heading_title?: string;
  heading_description?: string;
  card_1_section?: {
    card_1_title?: string;
    card_1_subtitle?: string;
    card_1_description?: string;
    card_1_description_2?: string;
    card_1_description_3?: string;
    card_1_button_text?: string;
    card_1_button_link?: string;
    card_1_image?: string;
    
  },



  card_2_section?: {
    card_2_title?: string;
    card_2_subtitle?: string;
    card_2_description?: string;
    card_2_description_2?: string;
    card_2_description_3?: string;
    card_2_button_text?: string;
    card_2_button_link?: string;
    card_2_image?: string;
  },

  bottom_banner?: {
    banner_title?: string;
    banner_title_2?: string;
    button_text?: string;
    button_link?: string;
    image?: string;
    imageAlt?: string;
  }

  seo?: SeoData;
}


// services data interface
export interface ServiceCard {
  card_label?: string;
  card_description?: string;
  card_image?: string;
  card_image_alt?: string;
  card_link?: string;
}

// export interface BottomBanner {
//   banner_title?: string;
//   button_text?: string;
//   button_link?: string;
//   image?: string;
//   imageAlt?: string;
// }


// export interface HeroSection {
//     heroTitle?: string;
//     heroImage?: string;
// }

export interface ServiceData {
  hero_section?: HeroSection;
  section_1_title?: string;
  section_1_description?: string;
  heroImageAlt?: string;
  service_card_1?: ServiceCard;
  service_card_2?: ServiceCard;
  service_card_3?: ServiceCard;
  service_card_4?: ServiceCard;
  bottom_banner?: BottomBanner;
  seo?: SeoData;
}

export interface Service {
  label: string;
  description: string;
  src: string;
  alt: string;
  link: string;
}



// terms and conditions data interface
// export interface HeroSection {
//     heroTitle?: string;
//     heroImage?: string;
// }
export interface TermsAndConditionsData {
  hero_section?: HeroSection;
  terms_and_conditions?: PortableTextBlock[];
  seo?: SeoData;
}


// track and trace data interface
export interface IconCard {
  card_title?: string;
  card_description_1?: string;
  card_icon?: string;
}

// export interface HeroSection {
//     heroTitle?: string;
//     heroImage?: string;
// }

export interface trackAndTraceData {
  hero_section?: HeroSection;
  section_1_title?: string;
  section_1?: {
    title?: string;
    paragraph1?: string;
    paragraph2?: string;
    buttonText?: string;
    buttonLink?: string;
    "image"?: string;
    imageAlt?: string;
    reverseOrder?: boolean;
  },
  section_2_title?: string;
  section_2_description?: string;
  section_2_image?: string;
  IconCard_1?: IconCard;
  IconCard_2?: IconCard;
  IconCard_3?: IconCard;
  IconCard_4?: IconCard;
  IconCard_5?: IconCard;
  IconCard_6?: IconCard;
  contact_link?: string;
  underline_text_2?: string;
  contact_number?: string;
  middle_text?: string;
  alert_message?: string;
  underline_text?: string;
  contact_first_text?: string;
  bottom_banner?: {
    banner_title?: string;
    button_text?: string;
    button_link?: string;
    image?: string;
    imageAlt?: string;
  }
  seo?: SeoData;
}

export interface photoSectionDescriptionItem {
  title: string;
  paragraph_1: string;
  paragraph_2: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
  buttonTitle: string;
  buttonLink: string;
}



// why nexus data interface
export interface cardSection {
  card_1_title?: string;
  card_1_description?: string;
  card_2_title?: string;
  card_2_description?: string;
  card_3_title?: string;
  card_3_description?: string;
}

// export interface AccordianItem {
//   accordian_title?: string;
//   accordian_description?: string;
// }

// export interface HeroSection {
//     heroTitle?: string;
//     heroImage?: string;
// }


export interface whyNexusData {
  hero_section?: HeroSection;
  heading_title?: string;
  heading_description?: string;
  heading_description_2?: string;
  heading_image?: string;
  section_1_title?: string;
  cards_section_1?: cardSection;
  cards_section_2?: cardSection;
  cards_section_3?: {
    card_title?: string;
    card_description?: string;

  };

  section_2_title?: string;
  section_2_description?: string;
  section_3_image?: string;
  section_3_title_1?: string;
  section_3_description_1?: string;
  section_3_main_title?: string;
  section_3_title_2?: string;
  section_3_description_2?: string;
  section_4_title_1?: string;
  section_4_title_2?: string;
  section_4_description_1?: string;

  testimonial_details_section?: {
    testimonial_comment?: string;
    person_name?: string;
    person_designation?: string;
    person_image?: string;
  }[];
  section_5_card?: {
    card_title?: string;
    card_subtitle?: string;
    card_description?: string;
    card_image?: string;
  };

  accordian_section_title?: string;
  accordian_section_image?: string;
  accordian_section_description?: string;
  accordian_1?: AccordianItem;
  accordian_2?: AccordianItem;
  accordian_3?: AccordianItem;
  accordian_4?: AccordianItem;
  accordian_5?: AccordianItem;
  section_7_image?: string;
  section_7_image_for_mobile?: string;

  bottom_banner?: {
    banner_title?: string;
    banner_title_2?: string;
    button_text?: string;
    button_link?: string;
    image?: string;
    imageAlt?: string;
  };
  seo?: SeoData;
}


export interface LinkedinSectionData {
  section_title?: string;
  section_description?: string;
  button_link?: string;
}
