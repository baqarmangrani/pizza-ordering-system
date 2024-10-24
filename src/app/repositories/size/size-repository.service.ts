import { Injectable } from '@angular/core';
import { Size } from '../../models/size.model';

@Injectable({
  providedIn: 'root',
})
export class SizeRepositoryService {
  private sizes: Size[] = [
    { size: 'Small', label: 'Small ($5)', price: 5 },
    { size: 'Medium', label: 'Medium ($7)', price: 7 },
    { size: 'Large', label: 'Large ($8)', price: 8 },
    { size: 'Extra Large', label: 'Extra Large ($9)', price: 9 },
  ];

  getSizes(): Size[] {
    return this.sizes;
  }
}
