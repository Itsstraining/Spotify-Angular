import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ComponentsModule} from '../../components/components.module'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    MatButtonModule,
    MatMenuModule
 
    
  ],
  exports:[HomeComponent],
})
export class HomeModule { }
