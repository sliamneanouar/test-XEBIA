import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { Router } from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
import { GetBooksService } from "../api/get-books.service";
import { HttpModule } from '@angular/http';
import { Global } from '../globalData/global'

@Component({
  selector: 'app-root',
  templateUrl: './page.home.html',
  styleUrls: ['./page.home.less'],
  providers: [Global]
})
export class Home {
  //title = 'app';
  public globalData: any;
  public searchValue: string;

  constructor(private translate: TranslateService, public global: Global, public router: Router) {};

  public updateData(data: any) {
    this.globalData = data;
  }

  public updateSearchValue() {
    this.global.setSearchValue(this.searchValue);
  }
}
