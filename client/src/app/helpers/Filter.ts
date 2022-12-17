import { ProductData } from '../models/product.model';

export const filterProductByCategory = (
  products: [ProductData],
  categoryId: string
) => {
  const filteredProductByCategory = products.filter(
    (product) => product.categoryId === categoryId
  );

  return filteredProductByCategory;
};
