import { StaticImageData } from "next/image";
export type nomSingle = {
  name: string;
  image: StaticImageData | null;
  nomination: string;
  isWinner?: boolean;
};
 export type Props = {
  params: { slug: string };
}
export interface IPost {
  slug: string;
  title: string;
  explainer:string
  date: string;
  content: {
    first: string;
    two: string;
  };
  media: {
    banner: string;
    media_one: string[];
    media_two: string[];
  };
}
export type blogPostType = {
  banner: string[];
  title: string;
  slug: string;
  end: string;
  date: string;
  posts: {
    chapter: string;
    texts: string[];
  }[];
};
export type testimonialsType = {
  img: StaticImageData;
  name: string;
  work: string;
  text: string;
};
export type donationType = {
  img: string;
  date: string;
  name: string;
  tag: string;
  time: string;
  slug: string;
};
export type nominees = {
  title: string;
  isActive: boolean;
  id: number;
  nominees: nomSingle[];
};
export type execType = {
  name: string;
  position: string;
  img: StaticImageData;
  maxWidth?: number;
};
export interface amanGroupType {
  name: string;
  position: string;
  img: StaticImageData;
  maxWidth?: number;
}
export type blogPostsType = {
  title: string;
  image: StaticImageData;
};
export type noms = {
  title: string;
  image: StaticImageData;
  artist: string;
  id: number;
};
export type blogType = {
  blog_image: string;
  blog_title: string;
  slug: string;
  paragraphs: string[];
  headings?: {
    title: string;
    content: string[];
  }[];
};
export type linkType = {
  name: string;
  isActive: boolean;
  href: string;
};
export type portfolioData = {
  name: string;
  url: string;
  stack: string[];
  date: string;
  id: number;
  images: StaticImageData[];
  details: string[];
  slug: string;
};
export interface replacements {
  fullName: string;
  message?: string;
  subject?: string;
  email: string;
  greeting: string;
  sent: string;
}
export interface donationReplacements extends replacements {
  amount: number;
}
export type eventCard = {
  img: StaticImageData;
  title: string;
  content: string;
  comingSoon: boolean;
  slug?: string;
};
