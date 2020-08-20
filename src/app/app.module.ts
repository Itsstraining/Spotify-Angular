import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { LoginModule } from './pages/login/login.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { environment } from 'src/environments/environment';

import { HomeComponent } from './pages/home/home.component';



import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeModule } from './pages/home/home.module';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    CarouselModule,
    HomeModule,

  ],
  exports:[
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
