import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {HttpModule, Http } from '@angular/http';

@Injectable()
export class GetDiscountService {

  constructor(private _http : Http) { }

  public getDiscount = (data: any): Observable<Object[]> => {
    var dataRequest = "";
    data.forEach(function(itemBook, key) {
      if( key === 0 ) {
        dataRequest = dataRequest + itemBook.isbn;
      }
      else {
        dataRequest = dataRequest + "," + itemBook.isbn;
      }
    });
    return this._http.get("http://henri-potier.xebia.fr/books/" + dataRequest + "/commercialOffers")
    .map((response: any) => <Object[]>response.json())
    .catch((error:any) => {
      return Observable.throw(error);
    });
  };

}
