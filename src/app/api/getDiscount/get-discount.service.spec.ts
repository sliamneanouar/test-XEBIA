import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GetDiscountService } from './get-discount.service';

describe('GetDiscountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDiscountService],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });

  // it(`GetDiscountService status !`, async(inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
  //       http.get('http://henri-potier.xebia.fr/books/c8fabf68-8374-48fe-a7ea-a00ccd07afff,a460afed-e5e7-4e39-a39d-c885c05db861/commercialOffers')
  //       .subscribe((next) => {expect(next).toBe({});
  //       });
  //     })));

  it('should return error if getDiscount request failed', async(inject([HttpClient, HttpTestingController], (backend: GetDiscountService) => {
      backend.getDiscount([{"isbn": "x"}])
                     .subscribe((res: any) => {
                       expect(res.failure.error.type).toBe('ERROR_LOADING_COUNTRIES');
                     });
  })));

});
