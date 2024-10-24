import { Topping } from './topping.model';

export interface Pizza {
  size: string;
  basePrice: number;
  toppings: Topping[];
}
