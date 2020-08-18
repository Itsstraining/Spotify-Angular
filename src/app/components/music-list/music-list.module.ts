import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicListRoutingModule } from './music-list-routing.module';
import { MusicListComponent } from './music-list.component';

import{ComponentsModule} from '../components.module'
@NgModule({
  declarations: [MusicListComponent],
  imports: [
    CommonModule,
    MusicListRoutingModule,
    ComponentsModule
  ]
})
export class MusicListModule { }
