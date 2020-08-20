import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import {ComponentsModule} from '../../components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ComponentsModule,
   
  ],
  exports:[
  ]
})
export class MainPageModule { }
