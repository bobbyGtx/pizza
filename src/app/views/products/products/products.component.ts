import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {Router} from "@angular/router";
import {Subscription, tap} from "rxjs";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: ProductType[] = [];
  private subscription: Subscription|null = null;
  public loading:boolean = false;
  constructor(private productService: ProductService, private router: Router) {
  }

  //Тут обычно делаю запросы на сервер. В этот момент компонент создан и готов к работе
  ngOnInit() {
    this.loading = true;
    this.subscription=this.productService.getProducts()
      .pipe(tap(()=>this.loading=false))
    .subscribe(
      {
        next:(data)=>{
          this.products=data;
          },
        error:(error)=>{
          console.log(error);
          this.router.navigate(['']);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
