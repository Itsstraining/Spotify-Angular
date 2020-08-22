import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiumRoutingModule } from './premium-routing.module';
import { PremiumComponent } from './premium.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [PremiumComponent],
  imports: [
    CommonModule,
    PremiumRoutingModule,
    ComponentsModule,
    MatButtonModule
  ]
})
export class PremiumModule { }
