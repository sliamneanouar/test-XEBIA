import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GetBooksService } from './get-books.service';

describe('GetBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBooksService],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });

  it(`should issue a request`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
      // 2. inject HttpClient and HttpTestingController into the test
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        // 3. send a simple request
        http.get('http://henri-potier.xebia.fr/books').subscribe();

        // 4. HttpTestingController supersedes `MockBackend` from the "old" Http package
        // here two, it's significantly less boilerplate code needed to verify an expected request
        backend.expectOne({
          url: 'http://henri-potier.xebia.fr/books',
          method: 'GET'
        });
      })
    )
  );


  it(`should emit 'true' for 200 Ok`, async(inject([HttpTestingController],
    (backend: HttpTestingController) => {
      backend.expectOne('http://henri-potier.xebia.fr/books').flush(null, {status: 404, statusText: "Not Found"});;
      // backend.expectOne('http://henri-potier.xebia.fr/books').flush(null, {});
  })));


});
