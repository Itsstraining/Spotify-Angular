import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMusicRoutingModule } from './list-music-routing.module';
import { ListMusicComponent } from './list-music.component';


@NgModule({
  declarations: [ListMusicComponent],
  imports: [
    CommonModule,
    ListMusicRoutingModule
  ]
})
export class ListMusicModule { }
