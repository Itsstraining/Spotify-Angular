import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PremiumComponent } from './premium/premium.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MusicListComponent } from './music-list/music-list.component';
@NgModule({
  declarations: [NavBarComponent, FooterComponent, PremiumComponent,MusicListComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent,
    PremiumComponent,
    
  ]
})
export class ComponentsModule { }
