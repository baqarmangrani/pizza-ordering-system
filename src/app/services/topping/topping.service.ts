import { Injectable } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { ToppingRepositoryService } from '../../repositories';

@Injectable({
  providedIn: 'root',
})
export class ToppingService {
  constructor(private toppingRepository: ToppingRepositoryService) {}

  getNonVegToppings(): Topping[] {
    return this.toppingRepository.getNonVegToppings();
  }

  getVegToppings(): Topping[] {
    return this.toppingRepository.getVegToppings();
  }
}
