import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {
  public _imageURL: string = "";
  public _maxWidth: number;
  public _maxheight: number;
  public _displayShadow: boolean = false;

  @Input()
   public set imageURL(value: string) {
       if (value === null || value === undefined || value === "") {
           return;
       }
       this._imageURL = value;
   };

   public get imageURL(): string {
       return this._imageURL;
   };

   @Input()
    public set maxWidth(value: number) {
        if (value === null || value === undefined) {
            return;
        }
        this._maxWidth = value;
    };

    public get maxWidth(): number {
        return this._maxWidth;
    };

    @Input()
      public set maxheight(value: number) {
          if (value === null || value === undefined) {
              return;
          }
          this._maxheight = value;
      };

      public get maxheight(): number {
          return this._maxheight;
      };

      @Input()
       public set displayShadow(value: boolean) {
           if (value === null || value === undefined) {
               return;
           }
           this._displayShadow = value;
       };

       public get displayShadow(): boolean {
           return this._displayShadow;
       };
  constructor() { }

  ngOnInit() {
  }

}
