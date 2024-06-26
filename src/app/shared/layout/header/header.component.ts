import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedState:boolean = false;
  //public cartService для использования в шаблоне html
  constructor(public cartService: CartService,private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isLoggedIn:boolean)=>{
      this.loggedState=isLoggedIn;
      console.log('Изменен статус логина.');
    })
  }

  logIn():void{
    this.authService.logIn();
  }
  logOut():void{
    this.authService.logOut();
  }
}
