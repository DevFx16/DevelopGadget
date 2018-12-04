import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AppsComponent } from './Components/apps/apps.component';
//Rutas
const Rutas: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Apps', component: AppComponent },
  { path: '**', redirectTo: 'Inicio' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(Rutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
