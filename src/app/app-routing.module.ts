import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AbouthPageComponent } from './shared/pages/abouth-page/abouth-page.component';
import { ContactComponent } from './shared/pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AbouthPageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  /* carga rutas hijas del modulo ej: /countries/by-countries */
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
