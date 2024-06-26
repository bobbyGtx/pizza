import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {AboutComponent} from "./about/about.component";
import {MainComponent} from "./main/main.component";

import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AboutComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbModalModule,
    HomeRoutingModule
  ],
  exports:[
    HomeRoutingModule
  ]
})
export class HomeModule { }
