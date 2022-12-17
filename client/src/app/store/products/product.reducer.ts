import { createReducer, on } from '@ngrx/store';
// import { ProductData } from 'src/app/models/product.model';
import { getAllProduct, getCategoryProduct } from './product.actions';

export interface ProductState {
  products: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProductState = {
  products: [],
  error: '',
  status: 'pending',
};

export const productReducer = createReducer(
  initialState,
  on(getAllProduct, (state, { products }) => ({
    ...state,
    products: products,
  })),
  on(getCategoryProduct, (state, { products }) => ({
    ...state,
    products: products,
  }))
);
