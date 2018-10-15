import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.less']
})
export class SaleDetailComponent implements OnInit {
  public _note: number = null;
  public _imageURL: string = "../../../assets/images/background-robot.png";
  public _text: string = null;

  @Input()
  public set note(value: number) {
    if(value === null || value === undefined) {
      return;
    }
    this._note = value;
  }
  public get note(): number {
    return this._note;
  }

  @Input()
  public set text(value: string) {
    if(value === null || value === undefined || value === "") {
      return;
    }
    this._text = value;
  }
  public get text(): string {
    return this._text;
  }

  @Input()
  public set imageURL(value: string) {
    if(value === null || value === undefined || value === "") {
      return;
    }
    this._imageURL = value;
  }
  public get imageURL(): string {
    return this._imageURL;
  }

  constructor() { }

  ngOnInit() {
  }

}
