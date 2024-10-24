import { Injectable } from '@angular/core';
import { Offer } from '../../models/offer.model';

@Injectable({
  providedIn: 'root',
})
export class OfferRepositoryService {
  private offers: Offer[] = [
    { offerName: 'Large Pizza Offer', size: 'Large', discount: 2 },
    { offerName: 'Extra Large Pizza Offer', size: 'Extra Large', discount: 3 },
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
