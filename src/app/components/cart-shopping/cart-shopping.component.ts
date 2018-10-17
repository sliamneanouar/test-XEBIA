import { Component, OnInit, Input } from '@angular/core';

import { Global } from '../../globalData/global'

@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart-shopping.component.html',
  styleUrls: ['./cart-shopping.component.less']
})
export class CartShoppingComponent implements OnInit {
  public _cartList: any = [];

  @Input()
  public set cartList (value: any) {
    if(value === null || value === undefined) {
      return;
    }
    this._cartList = value;
  }
  public get cartList (): any {
    return this._cartList;
  }

  constructor(public global: Global) { }

  ngOnInit() {
  }

}
