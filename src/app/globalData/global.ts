import { Injectable } from '@angular/core';

@Injectable()
export class Global {
  static _role: string = 'test';
  static _listBooks: any = [];
  static _lsitBookInCart: any = [];
  static _searchValue: string = '';
  static _listCarte: any = [];

  public static set role( value: string ) {
    Global._role = value;
  }
  public static get role(): string {
    return Global._role;
  }

  public setRole(value: string) {
    Global._role = value;
  }

  public getRole(): string {
     return Global._role;
  }

  public setListCarte(value: any) {
    Global._listCarte = value;
  }

  public getListCarte(): any {
     return Global._listCarte;
  }

  public setListBooks(value: any) {
    Global._listBooks = value;
  }

  public getListBooks(): any {
     return Global._listBooks;
  }

  public setLsitBookInCart(value: any) {
    Global._lsitBookInCart = value;
  }

  public getLsitBookInCart(): any {
     return Global._lsitBookInCart;
  }

  public setSearchValue(value: string) {
    Global._searchValue = value;
  }

  public getSearchValue(): string {
     return Global._searchValue;
  }

}
