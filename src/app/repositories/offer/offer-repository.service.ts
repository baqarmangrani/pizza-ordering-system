import { Injectable } from '@angular/core';
import { Offer } from '../../models/offer.model';

@Injectable({
  providedIn: 'root',
})
export class OfferRepositoryService {
  private offers: Offer[] = [
    {
      offerName: 'Offer1 - 1 Medium Pizza with 2 toppings',
      size: 'Medium',
      discount: 5,
    },
    {
      offerName: 'Offer2 - 2 Medium Pizzas with 4 toppings each',
      size: 'Medium',
      discount: 9,
    },
    {
      offerName:
        'Offer3 - 1 Large with 4 toppings (Pepperoni and Barbecue chicken are counted as 2 toppings)',
      size: 'Large',
      discount: 50,
    },
  ];

  getOffers(): Offer[] {
    return this.offers;
  }

  getOfferNameBySize(size: string): string | null {
    const offer = this.offers.find((offer) => offer.size === size);
    return offer ? offer.offerName : null;
  }

  getDiscountBySize(size: string): number {
    const offer = this.offers.find((offer) => offer.size === size);
    return offer ? offer.discount : 0;
  }
}
