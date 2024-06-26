import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import { map, Subject, Subscription} from "rxjs";
import {PopupComponent} from "../../../shared/components/popup/popup.component";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  private subject:Subject<number>;

  private subscription: Subscription|null = null;

  constructor(public cartService: CartService) {
    let count:number = 0;
    this.subject = new Subject<number>();
    const interval= setInterval(() => {
      this.subject.next(count++);//Метод next обязателен. Во время его срабатывания - запускаются все подписчики
    }, 1000);

    const timeout1=setTimeout(() => {
      this.subject.complete();
    }, 4000);


  }


  ngOnInit(): void {
    this.subscription=this.subject.subscribe(
      {
        next:(param: number) => {console.log('Subscriber 1: '+param);},
        error:(error:string)=>{console.log('ERROR!!! '+error);},
        complete:()=>{console.log('Observeble завершен');},
      }
    );

    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show();


  }

  @ViewChild(PopupComponent) //Подключаем попап компонент
  private popupComponent!:PopupComponent;
  ngAfterViewInit(): void {
    this.popupComponent.open();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  test(){//можно и any
    this.subject.pipe(
      map(
        (number)=>{return 'Число: '+ number;})
    )
      .subscribe((param: string) => {
      console.log('Subscriber 2: '+param);
    });
  }
}
