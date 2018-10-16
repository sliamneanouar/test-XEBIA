import { Component, OnInit } from '@angular/core';

import { Global } from '../../globalData/global'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.less'],
  providers: [ Global ]
})
export class ShoppingComponent implements OnInit {

  constructor(public global: Global) {
    console.log("global.getListCarte() ", global.getListCarte());
   }

  ngOnInit() {
  }

}
