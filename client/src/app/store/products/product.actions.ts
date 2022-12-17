import { createAction, props } from '@ngrx/store';
import { ProductData } from 'src/app/models/product.model';

export const GET_ALL: string = 'GET_ALL';
export const GET_CATEGORY: string = 'GET_CATEGORY';

export const getAllProduct = createAction(GET_ALL, props<{ products: any }>());

export const getCategoryProduct = createAction(
  GET_CATEGORY,
  props<{ products: any }>()
);
