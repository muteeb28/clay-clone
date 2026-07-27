export interface StartupsFeatureCard {
  bgColor: string;
  image: string;
  imageAlt: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaVariant: "solid" | "link";
}

export interface StartupsBenefit {
  icon: string;
  label: string;
}

export interface StartupsFaqItem {
  question: string;
  answer: string;
}

export interface StartupsTestimonial {
  company: string;
  accentColor: string;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}
