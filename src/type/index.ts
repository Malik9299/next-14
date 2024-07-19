export interface Category {
  id: number;
  name: string;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  title: string;
  category: Category;
  images: string[];
  description: string;
}
