import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.less']
})
export class InfoSectionComponent implements OnInit {
  public _title: string = "";
  public _actor: string = "";
  public _discription: string = "";

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
         this._discription = value;
     };

     public get discription(): string {
         return this._discription;
     };

  constructor() { }

  ngOnInit() {
  }

}
