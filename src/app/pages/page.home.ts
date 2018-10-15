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

  constructor(private translate: TranslateService, public global: Global) {
    console.log("global ", this.global);
    // translate.setDefaultLang('en');
    // this.counter = 0;
    // var META_DATA_FILE: any = window.document.getElementsByName( 'configFile' );
    // var fileName = META_DATA_FILE[0].content;
    // console.log("META_DATA_FILE ::: ", META_DATA_FILE);
    // var request = new XMLHttpRequest();
    // var CONFIG_FILE_DATA: any = null;
    // console.log("fileName :: ", fileName);
    //         request.open( "GET", fileName, false );
    //         var self: any = this;
    //         request.onload = function() {
    //             if ( request !== null && request !== undefined && request.status === 200 ) {
    //                 CONFIG_FILE_DATA = request.responseText;
    //                     console.log("CONFIG_FILE_DATA ::", CONFIG_FILE_DATA);
    //             } else {
    //                 console.log("CONFIG_FILE_DATA ::", CONFIG_FILE_DATA);
    //             }
    //         };
    //         request.send( null );
  };

  public updateData(data: any) {
    this.globalData = data;
    console.log("this.globalData ::: !! ", this.globalData);
  }

  public updateSearchValue() {
    console.log("this.searchValue :: ", this.searchValue);
    this.global.setSearchValue(this.searchValue);
  }
}
