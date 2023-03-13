import contentful from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface BlogPost {
  title: string;
  date: string;
  description: string;
  content: Document;
  underContent: UnderContentBlock;
  slug: string;
}

export interface UnderContentBlock {
  underTitle: string;
  underContent: Document;
}

export interface BlogPostTypo {
  title: string;
  date: string;
  description: string;
  content: Document;
  underContent: UnderContentTypo;
  slug: string;
}

export interface UnderContentTypo {
  typoTitle: string;
  typoContent: Document;
}

export interface BlogPostColor {
  title: string;
  date: string;
  description: string;
  content: Document;
  underContent: UnderContentFarbmischsysteme;
  slug: string;
}

export interface UnderContentFarbmischsysteme {
  colorTitle: string;
  colorContent: Document;
}

export interface BlogPostMedien {
  title: string;
  date: string;
  description: string;
  content: Document;
  underContent: UnderContentMedienproduktion;
  slug: string;
}

export interface UnderContentMedienproduktion {
  medienTitle: string;
  medienContent: Document;
}

export interface BlogPostImagesInHtml {
  title: string;
  date: string;
  description: string;
  content: Document;
  underContent: UnderContentBilderInHtml;
  slug: string;
}

export interface UnderContentBilderInHtml {
  htmlImageTitle: string;
  htmlImageContent: Document;
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
