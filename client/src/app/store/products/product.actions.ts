import { createAction, props } from '@ngrx/store';

export const GET_ALL: string = 'GET_ALL';
export const GET_CATEGORY: string = 'GET_CATEGORY';
export const SORT_BY_PRICE_LOW: string = 'SORT_BY_PRICE_LOW';
export const SORT_BY_PRICE_HIGH: string = 'SORT_BY_PRICE_HIGH';
export const SORT_BY_MOST_RATED: string = 'SORT_BY_MOST_RATED';
export const SORT_BY_EXPIRING_SOON: string = 'SORT_BY_EXPIRING_SOON';
export const SORT_BY_RECENTLY_ADDED: string = 'SORT_BY_RECENTLY_ADDED';
export const RECOMMENDED: string = 'RECOMMENDED';
export const SEARCH: string = 'SEARCH';

export const SET_SELECTED_PRODUCT: string = 'SET_SELECTED_PRODUCT';

export const getAllProduct = createAction(GET_ALL, props<{ products: any }>());

export const getCategoryProduct = createAction(
  GET_CATEGORY,
  props<{ products: any }>()
);

export const setSelectedProduct = createAction(
  SET_SELECTED_PRODUCT,
  props<{ selectedProduct: any }>()
);

export const search = createAction(SEARCH, props<{ products: any }>());

export const sortByPriceLow = createAction(SORT_BY_PRICE_LOW);
export const sortByPriceHigh = createAction(SORT_BY_PRICE_HIGH);
export const sortByMostRated = createAction(SORT_BY_MOST_RATED);
export const sortByExpire = createAction(SORT_BY_EXPIRING_SOON);
export const sortByRecentlyAdded = createAction(SORT_BY_RECENTLY_ADDED);
export const recommended = createAction(RECOMMENDED);
