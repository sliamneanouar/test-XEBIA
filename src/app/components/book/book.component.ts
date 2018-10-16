import { Component, Input } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Global } from '../../globalData/global';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less'],
  providers: [
    NgbRatingConfig,
    Global
  ]
})
export class BookComponent {
  public _bookData: any = {};
  public _addBookCallBack: any;
  public _listBookInCart: any;
  public _inCart: boolean = false;

  @Input()
   public set bookData(value: any) {
       if (value === null || value === undefined || value.length === 0) {
           return;
       }
       this._bookData = value;
       if(this.existBookInCart(this._bookData) !== -1) {
         this._inCart = true;
       }
       else {
         this._inCart = false;
       }
   };

   public get bookData(): any {
       return this._bookData;
   };

   @Input()
    public set listBookInCart(value: any) {
        if (value === null || value === undefined) {
            return;
        }
        this._listBookInCart = value;
    };

    public get listBookInCart(): any {
        return this._listBookInCart;
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

  constructor(config: NgbRatingConfig, public global: Global) {
    config.max = 5;
    config.readonly = true;

  };

  public addBookWithCallBack() {
    if(this.addBookCallBack !== null && this.addBookCallBack !== undefined && typeof this.addBookCallBack === "function") {
      this.addBookCallBack(this.bookData);
      if(this.existBookInCart(this._bookData) !== -1) {
        this._inCart = true;
      }
      else {
        this._inCart = false;
      }
    }
  };

  public existBookInCart(book: any): number {
    var index = -1;
    if(this.global.getListCarte().length !== 0) {
      this.global.getListCarte().forEach(function(itemBook, key) {
        if(book.cover === itemBook.cover && book.title === itemBook.title) {
          index = key;
        }
      });
    }
    return index;
  };
}
