export type CategoryGender = "Men" | "Women" | "Kids";

export type CategoryType =
  | "Clothing"
  | "Shoes"
  | "Accessories";


export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
  description?: string;
  gender: CategoryGender;
  categoryType: CategoryType;
}