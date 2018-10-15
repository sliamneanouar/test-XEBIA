import { Component, OnInit } from '@angular/core';
import { GetBooksService } from "../../api/get-books.service";
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less'],
  providers: [
       GetBooksService
   ]
})
export class BookListComponent implements OnInit {
  public listOfBooks: any = [];
  public listBookInCart: any = [];

  constructor(protected _getBooksService: GetBooksService) {}

  public addBookInList(book: any) {
    console.log("book addBookInList :: ", book);
    console.log("existBookInCart  : ", this.existBookInCart(book));
    if(this.existBookInCart(book) === -1) {
    console.log("this.listBookInCart :: ", this.listBookInCart);
      this.listBookInCart.push(book);
    }
    else {
      this.listBookInCart.splice(this.existBookInCart(book), 1);
    }
    console.log("this.listBookInCart :: ", this.listBookInCart);
  }

  public existBookInCart(book: any): number {
    if(this.listBookInCart.length !== 0) {
      this.listBookInCart.forEach(function(itemBook, key) {
        if(book.cover === itemBook.cover && book.title === itemBook.title) {
          return key;
        }
      });
    }
    return -1;
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
