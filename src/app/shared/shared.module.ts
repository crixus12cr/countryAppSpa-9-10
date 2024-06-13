import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AbouthPageComponent } from './pages/abouth-page/abouth-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AbouthPageComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AbouthPageComponent,
    HomePageComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
