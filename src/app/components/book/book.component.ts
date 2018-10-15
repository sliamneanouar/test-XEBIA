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
  public _addBookCallBack: any;

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

   @Input()
    public set addBookCallBack(value: any) {
        if (value === null || value === undefined || typeof value !== "function") {
            return;
        }
        this._addBookCallBack = value;
    };

    public get addBookCallBack(): any {
        return this._addBookCallBack;
    };

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  public addBookWithCallBack() {
    if(this.addBookCallBack !== null && this.addBookCallBack !== undefined && typeof this.addBookCallBack === "function") {
      this.addBookCallBack(this.bookData);
    }
  }

  ngOnInit() {
  }

}
