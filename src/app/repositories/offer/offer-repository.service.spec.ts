import { TestBed } from '@angular/core/testing';

import { OfferRepositoryService } from './offer-repository.service';

describe('OfferRepositoryService', () => {
  let service: OfferRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
