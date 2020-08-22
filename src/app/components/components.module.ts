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
import { MainPageComponent } from '../pages/main-page/main-page.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [NavBarComponent, FooterComponent, PremiumComponent,MusicListComponent,MainPageComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule ,
    MatMenuModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent,
    PremiumComponent,
    MusicListComponent,
    MainPageComponent
  ]
})
export class ComponentsModule { }
