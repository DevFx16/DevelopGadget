import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosService } from './Service/datos.service';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AppsComponent } from './Components/apps/apps.component';
import { HttpClientModule } from '@angular/common/http';

//Rutas
const Rutas: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Apps', component: AppsComponent },
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
    HttpClientModule,
    RouterModule.forRoot(Rutas),
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
