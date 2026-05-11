export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  tagline: string;
  icon: string;
  image: string;
  parent_id: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  product_count?: number;
}

export interface Specification {
  label: string;
  value: string;
  unit?: string;
  icon?: string;
}

export interface SpecGroup {
  group: string;
  items: Specification[];
}

export interface Download {
  label: string;
  type: "pdf" | "cad" | "manual" | "software" | "video";
  url: string;
  size?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface ApplicationImage {
  url: string;
  caption: string;
  type?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category_id: string;
  categories?: Category;
  short_description: string;
  full_description: string;
  tagline: string;
  featured_image: string;
  gallery: string[];
  video_url?: string;
  specifications: SpecGroup[];
  features: Feature[];
  accessories: string[];
  applications: ApplicationImage[];
  downloads: Download[];
  meta_title?: string;
  meta_description?: string;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Inquiry {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  message: string;
  product_id?: string;
  source?: "contact_form" | "product_page" | "whatsapp";
  status?: "new" | "contacted" | "qualified" | "closed";
  created_at?: string;
}

export interface PageContent {
  id: string;
  page_slug: string;
  content: Record<string, unknown>;
  meta_title?: string;
  meta_description?: string;
  updated_at: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface Industry {
  name: string;
  icon: string;
  slug: string;
  description: string;
}
