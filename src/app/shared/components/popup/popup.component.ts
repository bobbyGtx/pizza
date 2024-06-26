import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  //для получения темплейта для открытия шаблона
  @ViewChild('popup')
  popup!:TemplateRef<ElementRef>;

  @Input() data:string='';

  constructor(private modalService: NgbModal) {
  }

  open():void{
    this.modalService.open(this.popup);
  }//Метод по которому открывается попап
}
