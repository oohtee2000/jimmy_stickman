export interface Product {
  id: number;
  name: string;
  category: string;
  colors?: string;
  image: string;
  oldPrice: string | null;
  price: string;
  discount: string | null;
  gender: string;

}