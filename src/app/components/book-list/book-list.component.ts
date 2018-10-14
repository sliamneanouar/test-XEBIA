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

  constructor(protected _getBooksService: GetBooksService) {}

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
