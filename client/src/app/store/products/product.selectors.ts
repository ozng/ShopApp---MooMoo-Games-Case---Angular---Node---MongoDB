import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProductState } from './product.reducer';

export const selectProduct = (state: any) => state.products;
export const selectAllProducts = createSelector(
  selectProduct,
  (state: any) => state.products
);
