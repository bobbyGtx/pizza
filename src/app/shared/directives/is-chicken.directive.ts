import {AfterViewInit, Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[isChicken]'
})
export class IsChickenDirective implements OnInit {

  constructor(
    //принимаем содержимое ng-template
    private templateRef: TemplateRef<any>,
    //весь ng-template с контейнером
    private viewContainer: ViewContainerRef
  ) {}

@Input()
  isChicken:string='';
  ngOnInit(): void {
       if (this.isChicken.toLowerCase().includes('кур')) {
         this.viewContainer.createEmbeddedView(this.templateRef);
       }else{
         this.viewContainer.clear();
       }
  }

  // @Input()
  // set isChicken(description:string){
  //   if (description.toLowerCase().includes('кур')) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   }else{
  //     this.viewContainer.clear();
  //   }
  // }
}
