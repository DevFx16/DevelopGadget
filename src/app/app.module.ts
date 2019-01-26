import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
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
