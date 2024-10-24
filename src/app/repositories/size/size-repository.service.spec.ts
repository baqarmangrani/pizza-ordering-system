import { TestBed } from '@angular/core/testing';

import { SizeRepositoryService } from './size-repository.service';

describe('SizeRepositoryService', () => {
  let service: SizeRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizeRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
