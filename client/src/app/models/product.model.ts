export interface Color {
  name: string;
  price: number;
  imageUrl: string;
  _id: string;
}

export interface ProductData {
  _id: string;
  title: string;
  overview: string;
  price: number;
  categoryId: string;
  imageUrl: string;
  rating: number;
  quantity: number;
  popularity: number;
  brand: string;
  color: Color;
  createdAt: string;
  updatedAt: string;
}
