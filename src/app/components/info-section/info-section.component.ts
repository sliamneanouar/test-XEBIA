import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.less']
})
export class InfoSectionComponent implements OnInit {
  public _title: string = "";
  public _actor: string = "";
  public _discription: string;
  public discriptionDetail: any = [];
  public _bookData: any = {};
  public _modalDisplay: boolean = false;

  @Input()
   public set title(value: string) {
       if (value === null || value === undefined || value === "") {
           return;
       }
       this._title = value;
   };

   public get title(): string {
       return this._title;
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
     public set bookData(value: any) {
       if (value === null || value === undefined) {
            return;
       }
         this._bookData = value;
     };

     public get bookData(): any {
         return this._bookData;
     };

   @Input()
    public set actor(value: string) {
        if (value === null || value === undefined || value === "") {
            return;
        }
        this._actor = value;
    };

    public get actor(): string {
        return this._actor;
    };

    @Input()
     public set discription(value: string) {
         if (value === null || value === undefined || value === "") {
             return;
         }
         this.discriptionDetail = value;
         this._discription = value[0].substring(0, 100);
     };

     public get discription(): string {
         return this._discription;
     };

  constructor() { }

  ngOnInit() {
  }

}
