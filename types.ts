export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image?: string;
  rating?: {
    rate: number;
    count: number;
  };
}
