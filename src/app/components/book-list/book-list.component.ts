import { Component, OnInit, Output, Input } from '@angular/core';
import { GetBooksService } from "../../api/get-books.service";
import { HttpModule } from '@angular/http';

import { Global } from '../../globalData/global'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less'],
  providers: [
       GetBooksService,
       Global
   ]
})
export class BookListComponent implements OnInit {
  public listOfBooks: any = [];
  public listOfBooksSearchResult: any = [];
  public _listBookInCart: any = [];
  public _updateData: any;

  @Input()
  public set updateData(value: any) {
    this._updateData = value;
  }

  public get updateData(): any {
    return this._updateData;
  }

  @Output()
  get listBookInCart(): any {
    return this._listBookInCart;
  }

  constructor(protected _getBooksService: GetBooksService, public global: Global) {}

  public addBookInList(book: any) {
    console.log("addBookInList");
    if(this.existBookInCart(book) === -1) {
      this._listBookInCart.push(book);
    }
    else {
      this._listBookInCart.splice(this.existBookInCart(book), 1);
    }
    this.global.setListCarte(this._listBookInCart);
    console.log("addBookInList this.global.setListCarte : ", this.global.getListCarte());
  }

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
  }

  public inSearchResult(valueSearch: string): boolean {
    if(valueSearch.length > 0){
      this.listOfBooksSearchResult = this.listOfBooks.filter(item => item.title.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1);
      console.log("this.listOfBooksSearchResult :: ", this.listOfBooksSearchResult);
    }
    else {
      this.listOfBooksSearchResult = this.listOfBooks;
    }
    return true;
  }

  ngOnInit() {
    this._getBooksService.getBooks().subscribe((data: any) => {
            this.listOfBooks = data;
            console.log("this.listOfBooks ::: ", this.listOfBooks);
        },
        error => {
          console.log('error when call GetCardStructures rest service !');
        },() => null);
  }

}
