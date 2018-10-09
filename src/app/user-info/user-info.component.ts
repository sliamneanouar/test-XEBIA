import {  Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  public _userLabel: string = "";
  public _userUrlImage: string = "";
  public _displayLabel: boolean = false;
  public _displayImage: boolean = false;

  @Input()
    public set userLabel(value: string) {
        this._userLabel = value;
    };

    public get userLabel(): string {
      return this._userLabel;
    };
  @Input()
    public set userUrlImage(value: string) {
        this._userUrlImage = value;
        console.log("this._userUrlImage ::: ", this._userUrlImage);
    };

    public get userUrlImage(): string {
      return this._userUrlImage;
    };
  @Input()
    public set displayLabel(value: boolean) {
        this._displayLabel = value;
    };

    public get displayLabel(): boolean {
      return this._displayLabel;
    };
  @Input()
    public set displayImage(value: boolean) {
        this._displayImage = value;
    };

      public get displayImage(): boolean {
        return this._displayImage;
      };


  constructor() { }

  ngOnInit() {
  }

}
