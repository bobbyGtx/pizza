import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PopupComponent} from "../../../shared/components/popup/popup.component";



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor() { }

  @ViewChild(PopupComponent) //Подключаем попап компонент
  private popupComponent!:PopupComponent;
  ngAfterViewInit(): void {
    this.popupComponent.open();
  }
}
