import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PizzaOrder, Size, Topping } from '../../models';
import { OfferService, SizeService, ToppingService } from '../../services';

@Component({
  selector: 'app-order-entry',
  standalone: true,
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.scss'],
  imports: [CommonModule],
})
export class OrderEntryComponent implements OnInit {
  pizzas: PizzaOrder[] = [];
  vegToppings: Topping[] = [];
  nonVegToppings: Topping[] = [];
  sizes: Size[] = [];
  totalPrice = 0;

  constructor(
    private offerService: OfferService,
    private sizeService: SizeService,
    private toppingService: ToppingService
  ) {}

  ngOnInit(): void {
    this.loadInitialData();
    this.seedPizzas();
  }

  private loadInitialData(): void {
    this.vegToppings = this.toppingService.getVegToppings();
    this.nonVegToppings = this.toppingService.getNonVegToppings();
    this.sizes = this.sizeService.getSizes();
  }

  private seedPizzas(): void {
    this.pizzas = this.sizes.map((size) => this.createPizzaOrder(size));
  }

  private createPizzaOrder(size: Size): PizzaOrder {
    return {
      vegToppings: [],
      nonVegToppings: [],
      size: size,
      beforeDiscount: size.price,
      offerName: '',
      afterDiscount: 0,
      isSelected: false,
    };
  }

  onToppingSelect(topping: Topping, size: Size): void {
    const selectedPizza = this.findPizzaBySize(size);
    if (selectedPizza) {
      this.toggleTopping(selectedPizza, topping);
      this.updatePizzaPricing(selectedPizza);
      this.updateTotalPrice();
    }
  }

  private findPizzaBySize(size: Size): PizzaOrder | undefined {
    return this.pizzas.find((pizza) => pizza.size?.size === size.size);
  }

  private toggleTopping(pizza: PizzaOrder, topping: Topping): void {
    const toppingList = topping.isNonVeg
      ? pizza.nonVegToppings
      : pizza.vegToppings;
    const toppingIndex = toppingList.findIndex((t) => t.name === topping.name);

    if (toppingIndex > -1) {
      toppingList.splice(toppingIndex, 1);
      pizza.beforeDiscount -= topping.price;
    } else {
      toppingList.push(topping);
      pizza.beforeDiscount += topping.price;
    }

    pizza.isSelected =
      pizza.vegToppings.length > 0 || pizza.nonVegToppings.length > 0;
  }

  private updatePizzaPricing(pizza: PizzaOrder): void {
    pizza.offerName =
      this.offerService.getOfferNameBySize(pizza.size!.size) ?? '';
    pizza.afterDiscount =
      pizza.beforeDiscount -
      this.offerService.getDiscountBySize(pizza.size!.size);
  }

  private updateTotalPrice(): void {
    this.totalPrice = this.pizzas
      .filter((pizza) => pizza.isSelected)
      .reduce((total, pizza) => total + pizza.afterDiscount, 0);
  }

  submitOrder(): void {
    alert('Order completed!');
    this.resetOrder();
  }

  resetOrder(): void {
    window.location.reload();
  }
}
