import { Component, Input } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.less'],
  providers: [NgbRatingConfig]
})
export class BookDetailComponent {
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

  constructor(config: NgbRatingConfig) {
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
    if(this._listBookInCart.length !== 0) {
      this._listBookInCart.forEach(function(itemBook, key) {
        if(book.cover === itemBook.cover && book.title === itemBook.title) {
          index = key;
        }
      });
    }
    return index;
  };
}
