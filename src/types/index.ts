// Menu Item Types
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating?: number;
}

// Feature/Highlight Types
export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
}

// Contact Information
export interface ContactInfo {
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
}

// Opening Hours
export interface OpeningHours {
  day: string;
  hours: string;
}
