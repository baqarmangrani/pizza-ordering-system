import { TestBed } from '@angular/core/testing';

import { ToppingRepositoryService } from './topping-repository.service';

describe('ToppingRepositoryService', () => {
  let service: ToppingRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToppingRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
