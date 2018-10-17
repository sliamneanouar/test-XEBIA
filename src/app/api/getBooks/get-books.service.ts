import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {HttpModule, Http } from '@angular/http';

@Injectable()
export class GetBooksService {

  constructor(private _http : Http) {}
  
  public getBooks = (): Observable<Object[]> => {
    return this._http.get("http://henri-potier.xebia.fr/books")
    .map((response: any) => <Object[]>response.json())
    .catch((error:any) => {
      return Observable.throw(error);
    });
  };

}
