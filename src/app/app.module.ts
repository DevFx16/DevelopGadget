import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { InicioComponent } from './Components/inicio/inicio.component';

//Rutas
const Rutas: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: '**', redirectTo: 'Inicio' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent
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
