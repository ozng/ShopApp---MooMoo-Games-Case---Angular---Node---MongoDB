import { createSelector } from '@ngrx/store';

export const selectProduct = (state: any) => state.products;
export const selectAllProducts = createSelector(
  selectProduct,
  (state: any) => state.products
);

export const selectedProduct = (state: any) => state.selectedProduct;
export const selectSelectedProduct = createSelector(
  selectedProduct,
  (state: any) => state.selectedProduct
);
