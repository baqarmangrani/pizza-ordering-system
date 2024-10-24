import { Size } from './size.model';
import { Topping } from './topping.model';

export interface PizzaOrder {
  vegToppings: Topping[];
  nonVegToppings: Topping[];
  size: Size | null;
  beforeDiscount: number;
  offerName: string;
  afterDiscount: number;
  isSelected: boolean;
}
