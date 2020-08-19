import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PremiumComponent } from './premium/premium.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MusicListComponent } from './music-list/music-list.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
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
    MusicListComponent
  ]
})
export class ComponentsModule { }
