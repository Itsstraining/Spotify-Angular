import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PremiumComponent } from './premium/premium.component';



@NgModule({
  declarations: [NavBarComponent, FooterComponent, PremiumComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
