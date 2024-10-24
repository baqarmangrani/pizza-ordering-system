import { Injectable } from '@angular/core';
import { Topping } from '../../models/topping.model';

@Injectable({
  providedIn: 'root',
})
export class ToppingRepositoryService {
  private vegToppings: Topping[] = [
    { name: 'Tomatoes', price: 1.0, isSelected: false, isNonVeg: false },
    { name: 'Onions', price: 0.5, isSelected: false, isNonVeg: false },
    { name: 'Bell Pepper', price: 1.0, isSelected: false, isNonVeg: false },
    { name: 'Mushrooms', price: 1.2, isSelected: false, isNonVeg: false },
    { name: 'Pineapple', price: 0.75, isSelected: false, isNonVeg: false },
  ];

  private nonVegToppings: Topping[] = [
    { name: 'Sausage', price: 1.0, isSelected: false, isNonVeg: true },
    { name: 'Pepperoni', price: 2.0, isSelected: false, isNonVeg: true },
    { name: 'Barbecue Chicken', price: 3.0, isSelected: false, isNonVeg: true },
  ];

  getVegToppings(): Topping[] {
    return this.vegToppings;
  }

  getNonVegToppings(): Topping[] {
    return this.nonVegToppings;
  }
}
