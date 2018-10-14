import { Component, OnInit, Input } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less'],
  providers: [NgbRatingConfig]
})
export class BookComponent implements OnInit {
  public _bookData: any = {};

  @Input()
   public set bookData(value: any) {
       if (value === null || value === undefined || value.length === 0) {
           return;
       }
       this._bookData = value;
   };

   public get bookData(): any {
       return this._bookData;
   };

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
  }

}
