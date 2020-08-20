import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'Login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'musicList', loadChildren: () => import('./components/music-list/music-list.module').then(m => m.MusicListModule) },
  { path: ' ', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'mainpage', loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
