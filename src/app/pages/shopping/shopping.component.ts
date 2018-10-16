import { Component, OnInit } from '@angular/core';

import { Global } from '../../globalData/global'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.less'],
  providers: [ Global ]
})
export class ShoppingComponent implements OnInit {
  public totalPrice: number = 0;

  constructor(public global: Global) {
    console.log("global.getListCarte() ", global.getListCarte());
   }

   public getTotalPrice(): number{
     var totalPrice = 0;
     this.global.getListCarte().forEach(function(itemBook, key) {
       totalPrice = totalPrice + itemBook.price;
     });
     if(this.totalPrice !== totalPrice) {
       console.log("this.totalPrice : ", this.totalPrice);
       console.log("totalPrice : ", totalPrice);
       this.totalPrice = totalPrice;
     }
     return totalPrice;
   }

  ngOnInit() {
  }

}
