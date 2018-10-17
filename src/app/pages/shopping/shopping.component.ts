import { Component, OnInit } from '@angular/core';
import { GetDiscountService } from "../../api/getDiscount/get-discount.service";
import {Router} from '@angular/router';

import { Global } from '../../globalData/global'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.less'],
  providers: [
    Global,
    GetDiscountService
  ]
})
export class ShoppingComponent implements OnInit {
  public totalPrice: number = 0;
  public _commercialOffers: any;

  constructor(protected _getDiscount: GetDiscountService, public global: Global, public router: Router) {
    console.log("global.getListCarte() ", global.getListCarte());
    console.log("************** ///////////////// *********** ");
    if(this.global.getListCarte().length === 0) {
      this.router.navigateByUrl('/');
    }
   }

   public getTotalPrice(): number{
     var totalPrice = 0;
     this.global.getListCarte().forEach(function(itemBook, key) {
       totalPrice = totalPrice + itemBook.price;
     });
     if(this.totalPrice !== totalPrice) {
       // var selfGlobal = global;
       this._getDiscount.getDiscount(this.global.getListCarte()).subscribe((data: any) => {
         this._commercialOffers = data;
         this.global.setCommercialOffers(this._commercialOffers);
               console.log("data ::: ", data);
           },
           error => {
             console.log('error when call GetCardStructures rest service !');
           },() => null);
       this.totalPrice = totalPrice;
     }
     return totalPrice;
   }

  ngOnInit() {
  }

}
