import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart-shopping.component.html',
  styleUrls: ['./cart-shopping.component.less']
})
export class CartShoppingComponent implements OnInit {
  public _cartList: any = [
    {"note": 3.5, "text": "UserComment", "imageURL": "../../../assets/images/background-robot.png"},
    {"note": 3.5, "text": "UserComment", "imageURL": "../../../assets/images/background-robot.png"},
    {"note": 3.5, "text": "UserComment", "imageURL": "../../../assets/images/background-robot.png"},
    {"note": 3.5, "text": "UserComment", "imageURL": "../../../assets/images/background-robot.png"}
  ];

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

  constructor() { }

  ngOnInit() {
  }

}
