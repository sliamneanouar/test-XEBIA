import { TestBed, inject } from '@angular/core/testing';

import { GetDiscountService } from './get-discount.service';

describe('GetDiscountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDiscountService]
    });
  });

  it('should be created', inject([GetDiscountService], (service: GetDiscountService) => {
    expect(service).toBeTruthy();
  }));
});
