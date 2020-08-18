import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'Login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }, { path: 'Home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'listMusic', loadChildren: () => import('./pages/list-music/list-music.module').then(m => m.ListMusicModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
