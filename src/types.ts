export interface Service {
  id: string;
  nameEn: string;
  nameHi: string;
  description: string;
  basePrice: number;
  image: string;
  category: 'wedding' | 'haldi' | 'mehendi' | 'stage' | 'Varmala' | 'Birthday Party' | 'Sarswati Puja' |'other';
}

export interface GalleryImage {
  id: string;
  url: string;
  titleEn: string;
  titleHi: string;
  category: string;
}

export interface VideoShowcase {
  id: string;
  url: string;
  thumbnail: string;
  titleEn: string;
  titleHi: string;
}

export interface BookingDetails {
  name: string;
  phone: string;
  eventDate: string;
  location: string;
  services: string[];
  customRequest?: string;
}
