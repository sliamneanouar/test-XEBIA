import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-sale-section',
  templateUrl: './sale-section.component.html',
  styleUrls: ['./sale-section.component.less']
})
export class SaleSectionComponent implements OnInit {
  public _price: number;
  public _note: number;
  public _inCart: boolean;

  @Input()
   public set price(value: number) {
       if (value === null || value === undefined) {
           return;
       }
       this._price = value;
   };

   public get price(): number {
       return this._price;
   };

   @Input()
    public set note(value: number) {
        if (value === null || value === undefined) {
            return;
        }
        this._note = value;
    };

    public get note(): number {
        return this._note;
    };

    @Input()
     public set inCart(value: boolean) {
         if (value === null || value === undefined) {
             return;
         }
         this._inCart = value;
     };

     public get inCart(): boolean {
         return this._inCart;
     };

  constructor() { }

  ngOnInit() {
  }

}
