import {Injectable} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private products: ProductType[] = [];

  constructor(private http:HttpClient) {
  }

  getProducts(): Observable<ProductType[]> {//Возвращаем массив с продуктами
    return this.http.get<ProductType[]>('https://testologia.ru/pizzas');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/pizzas?id=${id}`);
  }

  createOrder(data:{product:string,address:string, phone:string}) {
    return this.http.post<{success:boolean, message:string}>(`https://testologia.ru/order-pizza`,data);
  }

}
