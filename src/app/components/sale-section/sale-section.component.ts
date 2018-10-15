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
  public _modalDisplay: boolean = false;
  public _addBookCallBack: any;
  // simulation de liste de feedback clients
  public _saleFeedBack: any = [
    {"note": 3.5, "text": "UserComment", "imageURL": "../../../assets/images/background-robot.png"},
    {"note": 3.5, "text": "UserComment", "imageURL": "../../../assets/images/background-robot.png"},
    {"note": 3.5, "text": "UserComment", "imageURL": "../../../assets/images/background-robot.png"},
    {"note": 3.5, "text": "UserComment", "imageURL": "../../../assets/images/background-robot.png"}
  ];

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

     @Input()
      public set modalDisplay(value: boolean) {
          if (value === null || value === undefined) {
              return;
          }
          this._modalDisplay = value;
      };

      public get modalDisplay(): boolean {
          return this._modalDisplay;
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

  constructor() { }

  public addBookWithCallBack() {
    if (this.addBookCallBack !== null && this.addBookCallBack !== undefined && typeof this.addBookCallBack === "function") {
        this.addBookCallBack()
    }
  }

  ngOnInit() {
  }

}
