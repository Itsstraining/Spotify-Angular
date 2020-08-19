import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { LoginModule } from './pages/login/login.module';
import {HomeModule} from './pages/home/home.module';
import {ListMusicModule} from './pages/list-music/list-music.module';

  import { from } from 'rxjs';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    LoginModule,
    HomeModule,
    ListMusicModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
