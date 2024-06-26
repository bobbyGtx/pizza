import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./views/layout.component";

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'', loadChildren:()=>import('./views/home/home.module').then(m => m.HomeModule)},
      {path:'order', loadChildren:()=>import('./views/order/order.module').then(m => m.OrderModule)},
      {path:'products', loadChildren:()=>import('./views/products/products.module').then(m => m.ProductsModule)},
    ]
  },
  {path: 'pizzas', redirectTo:'products'},
  {path: '**', redirectTo:''},
];

@NgModule({//декоратор моделя
  imports: [RouterModule.forRoot(routes,{anchorScrolling:'enabled', useHash:true})], //импорты - то что мы импортируем в модуль. Используется встроенный RouterModule и метод forRoot, который позволяет передать в RouterModule массив роутов
  exports: [RouterModule]//тут мы экспортируем этот модуль
})
export class AppRoutingModule { }
