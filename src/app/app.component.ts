import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { Router } from "@angular/router";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  counter: number;

  constructor(private translate: TranslateService) {
    // translate.setDefaultLang('en');
    this.counter = 0;
    var META_DATA_FILE: any = window.document.getElementsByName( 'configFile' );
    var fileName = META_DATA_FILE[0].content;
    console.log("META_DATA_FILE ::: ", META_DATA_FILE);
    var request = new XMLHttpRequest();
    var CONFIG_FILE_DATA: any = null;
    console.log("fileName :: ", fileName);
            request.open( "GET", fileName, false );
            var self: any = this;
            request.onload = function() {
                if ( request !== null && request !== undefined && request.status === 200 ) {
                    CONFIG_FILE_DATA = request.responseText;
                        console.log("CONFIG_FILE_DATA ::", CONFIG_FILE_DATA);
                } else {
                    console.log("CONFIG_FILE_DATA ::", CONFIG_FILE_DATA);
                }
            };
            request.send( null );
  };
  public incriment () {
    this.counter++;
  }
  public decriment () {
    this.counter--;
  }

}
