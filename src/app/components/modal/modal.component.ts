import { Component, ViewEncapsulation, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  providers: [NgbModal]
})
export class ModalComponent  {
  public _titleButton: string = "open";
  public _titleModal: string = "";
  public _typeModal: string = "signUp";
  public _bookData: any = {};

  @Input()
    public set typeModal(value: string) {
        this._typeModal = value;
    };

    public get typeModal(): string {
        return this._typeModal;
    };

    @Input()
      public set bookData(value: any) {
          this._bookData = value;
      };

      public get bookData(): any {
          return this._bookData;
      };

    @Input()
      public set titleButton(value: string) {
          this._titleButton = value;
      };

      public get titleButton(): string {
          return this._titleButton;
      };

    @Input()
      public set titleModal(value: string) {
          this._titleModal = value;
      };

      public get titleModal(): string {
          return this._titleModal;
      };

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content,  { size: 'lg', centered: true });
  }

}
