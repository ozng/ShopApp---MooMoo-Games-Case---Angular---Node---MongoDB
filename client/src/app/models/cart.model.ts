import { ProductData } from './product.model';

export interface CartData {
  quantity?: number;
  product?: ProductData;
}
