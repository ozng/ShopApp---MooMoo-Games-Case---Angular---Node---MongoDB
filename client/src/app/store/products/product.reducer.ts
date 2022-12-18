import { createReducer, on } from '@ngrx/store';
import {
  getAllProduct,
  getCategoryProduct,
  sortByPriceLow,
  sortByPriceHigh,
  sortByMostRated,
  sortByExpire,
  sortByRecentlyAdded,
  recommended,
  search,
} from './product.actions';

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
  })),
  on(sortByPriceLow, (state) => ({
    ...state,
    products: state.products
      .slice()
      .sort((a: any, b: any) => b.price - a.price),
  })),
  on(sortByPriceHigh, (state) => ({
    ...state,
    products: state.products
      .slice()
      .sort((a: any, b: any) => a.price - b.price),
  })),
  on(sortByMostRated, (state) => ({
    ...state,
    products: state.products
      .slice()
      .sort((a: any, b: any) => b.rating - a.rating),
  })),
  on(sortByExpire, (state) => ({
    ...state,
    products: state.products
      .slice()
      .sort((a: any, b: any) => b.quantity - a.quantity)
      .reverse(),
  })),
  on(sortByRecentlyAdded, (state) => ({
    ...state,
    products: state.products.slice().sort((a: any, b: any) => {
      const c = new Date(a.createdAt);
      const d = new Date(b.createdAt);
      return +c - +d;
    }),
  })),
  on(recommended, (state) => ({
    ...state,
    products: state.products
      .slice()
      .filter((product: any) => product.overview.includes('Eligible')),
  })),
  on(search, (state, { products }) => ({
    ...state,
    products: products,
  }))
);
