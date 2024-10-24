// src/app/services/pizza/offer.service.ts
import { Injectable } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { OfferRepositoryService } from '../../repositories';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(private offerRepository: OfferRepositoryService) {}

  getOffers(): Offer[] {
    return this.offerRepository.getOffers();
  }

  getOfferNameBySize(size: string): string | null {
    return this.offerRepository.getOfferNameBySize(size);
  }

  getDiscountBySize(size: string): number {
    return this.offerRepository.getDiscountBySize(size);
  }
}
