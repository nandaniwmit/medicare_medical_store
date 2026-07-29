export interface MedicineStockItem {
  id: number;
  medicineName: string;
  brand: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  category: string;
}

export interface HealthTip {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  isVerified: boolean;
  source: 'Google' | 'Direct';
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ServiceDetail {
  name: string;
  description: string;
  indicativePrice?: string;
  isPopular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: ServiceDetail[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'store' | 'medicines' | 'equipment' | 'products';
  imageUrl: string;
  description: string;
}
