import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import {ComponentsModule} from '../../components/components.module'

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ComponentsModule,
  ],
  exports:[
    MainPageComponent
  ]
})
export class MainPageModule { }
