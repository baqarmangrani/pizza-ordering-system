// src/app/services/pizza/size.service.ts
import { Injectable } from '@angular/core';
import { Size } from '../../models/size.model';
import { SizeRepositoryService } from '../../repositories';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  constructor(private sizeRepository: SizeRepositoryService) {}

  getSizes(): Size[] {
    return this.sizeRepository.getSizes();
  }
}
